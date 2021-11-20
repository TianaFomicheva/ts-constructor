<template>
  <form>
    <div class="form-field">
      <label
        ><span class="red">*</span>Ключ свойства
        <input v-model="key" placeholder="Укажите ключ свойства" @input="setValue($event, 'key')"/>
      </label>
    </div>
    <div class="form-field">
      <label
        ><span class="red">*</span>Название свойства
        <input v-model="name" placeholder="Укажите название свойства" />
      </label>
    </div>
    <div class="form-field">
      <label
        ><span class="red">*</span>Поле для отображения
        <select @change="setValue($event, 'fieldType')">
          <option disabled selected>Выберите поле для отображения</option>
          <option value="text">Текстовое поле</option>
          <option value="number">Числовое поле</option>
          <option value="password">Пароль</option>
          <option value="checkbox">Чекбокс</option>
          <option value="phone">Номер телефона</option>
          <option value="dropdown">Выпадающий список</option>
        </select>
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
      if (this.item.fieldType && this.item.name && this.item.key) {
        this.$emit('set-prop-item', this.item);
      }
    },
  },
});
</script>

<style>

</style>
