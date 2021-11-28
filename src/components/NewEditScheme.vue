<template>
<h1 class="title left">Новая схема</h1>
<div class="dotted">
  <label><span class="red">*</span> Название схемы
  <input v-model="schemaName" />
  </label>
</div>
<h2>Свойства схемы</h2>
<p>Схема должна содержать хотя бы одно свойство</p>
<div class="form-layout dotted">
  <div v-for="(item, index) in properties" :key ="index">
  <property-form
   @set-prop-item="setPropertyItem" :property="item" :idx="+index+1" />
  </div>
  </div>
  <div class="action-buttons">
  <button class="button-plain"
  @click="createItem">Добавить новое свойство</button>
     <button class="button-primary" @click="createUpdateSchema">{{ createButtonText }}</button>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import PropertyForm from './PropertyForm.vue';

type propertyType = {
  key: 'string',
  name: 'string',
  fieldType: 'string',
};
type schemaObjType = {
  properties: Array<propertyType>,
  schemaName: 'string',
};
type schemaType = {
  schema: schemaObjType,
  id: number,
}

export default defineComponent({
  components: { PropertyForm },
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
      this.schemaName = schema.schemaName;
      this.properties = schema.properties;
    },
    ...mapActions(['createScheme', 'updateScheme']),
    setPropertyItem(item: any) {
      // console.log(item);
      const index = this.properties.findIndex((itm: any) => itm.key === item.key);
      const index1 = this.properties.findIndex((itm: any) => itm.name === item.name);
      const ind = Math.max(index, index1);
      console.log(ind);
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
    createUpdateSchema() {
      if (this.curSchema?.id) {
        console.log(this.curSchema);
        this.updateScheme({ id: this.curSchema.id, schemaVal: this.curSchema });
      } else {
        this.createScheme(
          { schemaVal: { schemaName: this.schemaName, properties: this.properties } },
        );
      }
    },
  },
});
</script>

<style lang="scss" scoped>

.action{
  &-buttons{
    display: flex;
    justify-content: space-between;
  }
}
.w-422{
  width:422px;
  display: inline-block;
}
.form{
  &-layout{
    background: #fff;
    padding: 15px;
  }
    &-column{
      width:50%;
      display: inline-block;
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
 input,
  select {
    width:100%;
    display: block;
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    position: relative;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  }
</style>
