<template>
<div class="container form-layout">
  <h1 class="title left">{{curSchema?.schema?.schemaName }}</h1>
  <div v-for="(property, idx) in curSchema?.schema?.properties" :key="idx">
    <div class="form-field__show"><span v-if="property.isRequired" class="red">* </span>
    <label class="left" :class="{'red': property.isErr }">{{property.name}} </label>
      <input :ref="`field_${idx}`"
      v-if="property.fieldType !=='dropdown' && property.fieldType !=='phone'"
      :class="{'red-bordered': property.isErr}"
      :key="property.isErr" />
      <input v-else-if="property.fieldType =='phone'" v-maska="'+7(###) ###-####'"  />
      <select v-else></select>
    </div>
    </div>
     <button class="button-primary" @click="validate">Валидация</button>
     <button class="button-plain" v-if="hasValidateResult"
     :class="{'green-colored': validateResult, 'red-colored': !validateResult}">
       <font-awesome-icon icon="check" v-if="validateResult" />
       <font-awesome-icon icon="times" v-else/>
       {{ validateResult ? 'Валидация пройдена' : 'Валидация не пройдена'}}</button>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
  name: 'show',
  data() {
    return {
      schemaId: 0, curSchema: {} as any, validateResult: false as boolean, hasValidateResult: false,
    };
  },
  async mounted() {
    this.schemaId = +this.$route.params.id;
    this.curSchema = await this.getScheme(this.schemaId);
  },

  methods: {
    ...mapActions(['getScheme']),
    validate() {
      const newProperties = this.curSchema.schema.properties.map((item:any, ind:number) => {
        const itemField:any = this.$refs[`field_${ind}`];
        const err = { isErr: true };
        if (item.isRequired) {
          if (itemField.value === '' || (item.fieldType === 'phone' && itemField.value.length < 10)) {
            return { ...item, ...err };
          }
        }
        if (item.minVal) {
          if (itemField.value.length < item.minVal) {
            return { ...item, ...err };
          }
        }
        if (item.maxVal) {
          if (itemField.value.length > item.maxVal) {
            return { ...item, ...err };
          }
        }
        if (item.regExp) {
          const expr = itemField.value.match(`/${item.regExp})/g`);
          if (expr.length === 0) {
            return { ...item, ...err };
          }
        }
        return item;
      });
      const resInd = newProperties.findIndex((item:any) => item.isErr);
      this.validateResult = resInd === -1;
      this.curSchema.schema.properties = newProperties;
      this.hasValidateResult = true;
    },
  },
});
</script>

<style lang="scss">
.form{
  &-field{
    &__show{
      display: block;
      width: 70%;
    }
  }
}
.red{
  &-bordered{
    border: 1px solid red;
    background: rgba(229, 179, 179, 0.219);
  }
  &-colored{
    border: 1px solid red;
    color:red;
  }
}
.green{
  &-colored{
    border: 1px solid green;
    color:green;
  }
}
</style>
