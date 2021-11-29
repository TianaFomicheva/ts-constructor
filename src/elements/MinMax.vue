<template>
  <div class="flex">
    <div class="form-column"><label>Мин. кол-во символов<input /></label></div>
    <div class="form-column"><label>Макс. кол-во символов<input /></label></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'min-max',
});
</script>

<style lang="scss" scoped>
.form{
  &-column{
    width:47%;
  }
}
</style>
