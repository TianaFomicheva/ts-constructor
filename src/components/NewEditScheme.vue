<template>
<div class="dotted">
  <label>Название схемы
  <input v-model="schemaName" />
  </label>
</div>
  <scheme-form v-for="(item, index) in properties"
  :key = index @set-prop-item="setPropertyItem" :property="item" />
  <div class="form-column dotted">
  <div class="w-422">
  <button class="form-button"
  @click="createItem">Добавить новое свойство {{properties.length}}</button>
  </div>
  </div>
   <div class="form-column">
  <div class="w-422">
     <button class="form-button" @click="createUpdateSchema">{{ createButtonText }}</button>
  </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import SchemeForm from './SchemeForm.vue';

type propertyType = {
  key: 'string',
  name: 'string',
  fieldType: 'string',
};
type schemaObjType = {
  properties: Array<propertyType>,
  schemaName: 'sctring',
};
type schemaType = {
  schema: schemaObjType,
  id: number,
}

export default defineComponent({
  components: { SchemeForm },
  name: 'new-edit-scheme',
  data() {
    return { properties: Array<propertyType>(), schemaName: '' };
  },
  props: {
    curSchema: {
      type: Object as PropType<schemaType>,
    },
  },
  mounted() {
    if (!this.curSchema?.id) {
      const emptyObj = {} as propertyType;
      console.log(777);
      // this.properties.push(emptyObj);
    }
    console.log(this.curSchema?.schema.schemaName);
    if (this.curSchema) {
      this.assignPropValues(this.curSchema.schema);
    }
  },
  computed: {
    ...mapGetters(['getSchemes']),
    createButtonText() {
      return this.curSchema?.id ? 'Отредактировать' : 'Создать схему';
    },
  },
  methods: {
    assignPropValues(schema: any) {
      this.schemaName = schema.schemaName;
      this.properties = schema.properties;
    },
    ...mapActions(['createScheme', 'updateScheme']),
    setPropertyItem(item: any) {
      // console.log(item);
      const index = this.properties.findIndex((itm: any) => !itm.key);
      // if (index !== -1) {
      this.properties.splice(index, 1, item);
      // } else {
      //   // this.properties.push(item);
      // }
      console.log(this.properties);
    },
    createItem() {
      // this.property.push({});
    },
    createUpdateSchema() {
      if (this.curSchema?.id) {
        console.log({ name: this.schemaName, properties: this.properties });
        this.updateScheme({ id: this.curSchema.id, schemaVal: this.curSchema });
      } else {
        // this.createScheme(this.property);
      }
    },
  },
});
</script>

<style lang="scss">
.w-422{
  width:422px;
  display: inline-block;
}
.form{
    &-column{
      width:50%
    }
  &-button{
    display: block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #1390E5;
    color: #1390E5;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px;
    font-size: 14px;
    border-radius: 4px;
  }
}
</style>
