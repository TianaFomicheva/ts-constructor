<template>
  <form>
    <div class="form-field">
      <label
        ><span class="red">*</span>Ключ свойства
        <input placeholder="Укажите ключ свойства" />
      </label>
    </div>
    <div class="form-field">
      <label
        ><span class="red">*</span>Название свойства
        <input placeholder="Укажите название свойства" />
      </label>
    </div>
    <div class="form-field">
      <label
        ><span class="red">*</span>Поле для отображения
        <select>
          <option disabled selected>Выберите поле для отображения</option>
          <option>Текстовое поле</option>
          <option>Числовое поле</option>
          <option>Пароль</option>
          <option>Чекбокс</option>
          <option>Номер телефона</option>
          <option>Выпадающий список</option>
        </select>
      </label>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'scheme-property',
});
</script>

<style lang="scss">
form {
  .form {
    &-field {
      margin: 5px;
    }
  }
  label {
    display: block;
    font-size: 22px;
  }
  input, select {
    display: block;
    width: 422px;
  }
}
.red {
  color: red;
}
</style>
