<template>
<div class="flex">
  <div>
    <div class="collapse" @click="togglePropertyVisibility">
      <span class="arrow arrow-button"></span></div><h2>Свойство {{ idx }}
        </h2></div>
        <font-awesome-icon icon="trash"/>
        </div>
      <div  v-if="propertyVisibility">
    <form class="form-column">
    <div class="form-field">
      <label
        ><span class="red">*</span> Ключ свойства
        <input v-model="item.key" :key="item.key"
        placeholder="Укажите ключ свойства" @input="setValue($event, 'key')"/>
      </label>
    </div>
    <div class="form-field">
      <label
        ><span class="red">*</span> Название свойства
        <input v-model="item.name"
        placeholder="Укажите название свойства" @input="setValue($event, 'name')"/>
      </label>
    </div>
    <div class="form-field">
      <label
        ><span class="red">*</span> Поле для отображения
        <div>
        <select v-model="item.fieldType" @change="setValue($event, 'fieldType')">
          <option disabled selected>Выберите поле для отображения</option>
          <option value="text">Текстовое поле</option>
          <option value="number">Числовое поле</option>
          <option value="password">Пароль</option>
          <option value="checkbox">Чекбокс</option>
          <option value="phone">Номер телефона</option>
          <option value="dropdown">Выпадающий список</option>
        </select>
         <div class="arrow arrow-select" @click="togglePropertyVisibility"></div>
        </div>
      </label>
    </div>
    </form>
    <form class="form-column">
 <validation v-if="item.fieldType" :field-type="item.fieldType" />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Validation from './Validation.vue';

type propertyType = {
  key: 'string',
  name: 'string',
  fieldType: 'string',
}

export default defineComponent({
  name: 'property-form',
  components: {
    Validation,
  },
  data() {
    return { item: { key: '', name: '', fieldType: '' }, propertyVisibility: true };
  },
  props: {
    property: Object as PropType<propertyType>,
    idx: {
      type: Number,
      required: true,
    },
  },
  mounted() {
    this.assignPropValues(this.property);
  },
  methods: {
    assignPropValues(property: any) {
      this.item.key = property?.key;
      this.item.name = property?.name;
      this.item.fieldType = property?.fieldType;
    },
    setValue(event: any, itemProp: string) {
      switch (itemProp) {
        case 'key':
          this.item.key = event.target.value;
          break;
        case 'name':
          this.item.name = event.target.value;
          break;
        case 'fieldType':
          this.item.fieldType = event.target.value;
          break;
        default:
          break;
      }
      if (this.item.fieldType && this.item.name && this.item.key) {
        console.log(this.item);
        this.$emit('set-prop-item', this.item);
      }
    },
    togglePropertyVisibility() {
      this.propertyVisibility = !this.propertyVisibility;
    },
  },
});
</script>

<style lang="scss" >
h2{
  margin-left: 10px;
  position: relative;
  display: inline-block;
}
  .form {
    &-column{
      width:50%;
      display: inline-block;
      vertical-align: top;
    }
    &-field {
      margin: 5px;
      width: 422px;
      position: relative;
      font-size: 14px;
      display: inline-block;
      margin-left: 15px;
    }
  }
  label {
    display: block;
    font-size: 16px;
    line-height: 22px;
    font-weight: bold;
    text-align: left;
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
  .arrow{
      content: '';
      width:0;
      height:0;
      position: absolute;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      z-index: 9999999;
      border-top: 4px solid rgb(36, 39, 36);
      cursor: pointer;
      &-button{
        left:3px;
        bottom:5px;
      }
      &-select{
        right: 10px;
        top: 40px;
      }
    }
// }
.red {
  color: red;
}
.collapse{
  position: relative;
  display: inline-block;
  width: 12px;
}
.fa-trash{
  color:grey;
}
</style>
