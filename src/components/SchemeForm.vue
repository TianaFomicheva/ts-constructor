<template>
  <form class="form-column">
    <div class="form-field">
      <label
        ><span class="red">*</span>Ключ свойства
        <input v-model="key" placeholder="Укажите ключ свойства" @input="setValue($event, 'key')"/>
      </label>
    </div>
    <div class="form-field">
      <label
        ><span class="red">*</span>Название свойства
        <input v-model="name"
        placeholder="Укажите название свойства" @input="setValue($event, 'name')"/>
      </label>
    </div>
    <div class="form-field">
      <label
        ><span class="red">*</span>Поле для отображения
        <div>
        <select @change="setValue($event, 'fieldType')">
          <option disabled selected>Выберите поле для отображения</option>
          <option value="text">Текстовое поле</option>
          <option value="number">Числовое поле</option>
          <option value="password">Пароль</option>
          <option value="checkbox">Чекбокс</option>
          <option value="phone">Номер телефона</option>
          <option value="dropdown">Выпадающий список</option>
        </select>
         <div class="arrow-down"></div>
        </div>
      </label>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'scheme-form',
  data() {
    return { item: { key: '', name: '', fieldType: '' } };
  },
  methods: {
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
      // console.log(this.item);
      if (this.item.fieldType && this.item.name && this.item.key) {
        console.log(this.item);
        this.$emit('set-prop-item', this.item);
      }
    },
  },
});
</script>

<style lang="scss" >
// form {
  .form {
    &-column{
      width:50%
    }
    &-field {
      margin: 5px;
      width: 422px;
      position: relative;
      font-size: 14px;
      display: inline-block;
    }
  }
  label {
    display: block;
    font-size: 16px;
    line-height: 22px;
    font-weight: bold;
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
  .arrow-down{
      content: '';
      width:0;
      height:0;
      position: absolute;
      right: 10px;
      top: 40px;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      z-index: 9999999;
      border-top: 4px solid rgb(36, 39, 36);
      cursor: pointer;
    }
// }
.red {
  color: red;
}
</style>
