<template>
  <h1 class="title left">Новая схема</h1>
  <div class="dotted">
    <label
      ><span class="red">*</span> Название схемы
      <input v-model="schemaTitle" />
    </label>
  </div>
  <h2>Свойства схемы</h2>
  <p :class="{ red: deleteErr }">
    Схема должна содержать хотя бы одно свойство
  </p>
  <div class="dotted">
    <div v-for="(item, index) in properties" :key="index">
      <property-form
        @set-prop-item="setPropertyItem"
        :property="item"
        :idx="+index + 1"
        @delete-property="deleteProperty"
      />
    </div>
  </div>
  <div class="action-buttons">
    <button class="button-plain" @click="createItem">
      Добавить новое свойство
    </button>
    <button class="button-primary" @click="createUpdateSchema">
      {{ createButtonText }}
    </button>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import PropertyForm from './PropertyForm.vue';

type propertyType = {
  key: 'string';
  name: 'string';
  fieldType: 'string';
};
type schemaObjType = {
  properties: Array<propertyType>;
  schemaName: 'string';
};
type schemaType = {
  schema: schemaObjType;
  id: number;
};

export default defineComponent({
  components: { PropertyForm },
  name: 'new-edit-scheme',
  data() {
    return {
      properties: Array<propertyType>(),
      schemaTitle: '',
      deleteErr: false,
    };
  },
  props: {
    curSchema: {
      type: Object as PropType<schemaType>,
    },
  },
  mounted() {
    if (!this.curSchema?.id) {
      const emptyObj = {} as propertyType;
      this.properties.push(emptyObj);
    }
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
      this.schemaTitle = schema.schemaName;
      this.properties = schema.properties;
    },
    ...mapActions(['createScheme', 'updateScheme']),
    setPropertyItem(item: any) {
      console.log(item);
      const index = this.properties.findIndex(
        (itm: any) => itm.key === item.key,
      );
      const index1 = this.properties.findIndex(
        (itm: any) => itm.name === item.name,
      );
      const ind = Math.max(index, index1);
      if (ind !== -1) {
        this.properties.splice(index, 1, item);
      } else {
        const index2 = this.properties.findIndex((itm: any) => !itm.key);
        this.properties.splice(index2, 1, item);
      }
    },
    createItem() {
      const emptyObj = {} as propertyType;
      this.properties.push(emptyObj);
    },
    deleteProperty(idx: number) {
      if (this.properties.length > 1) {
        this.properties.splice(idx - 1, 1);
      } else {
        this.deleteErr = true;
      }
    },
    createUpdateSchema() {
      if (this.curSchema?.id) {
        try {
          this.updateScheme({
            id: this.curSchema.id,
            schemaVal: {
              schema: {
                schemaName: this.schemaTitle,
                properties: this.properties,
              },
            },
          });
          this.$emit('close-form');
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          this.createScheme({
            schemaVal: {
              schemaName: this.schemaTitle,
              properties: this.properties,
            },
          });
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.action {
  &-buttons {
    display: flex;
    justify-content: space-between;
  }
}
.w-422 {
  width: 422px;
  display: inline-block;
}
</style>
