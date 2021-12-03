<template>
  <div class="flex">
    <div class="form-column">
      <label
        >Мин. кол-во символов
        <input type="number" @input="setMin($event.target.value)" min="0"
      /></label>
    </div>
    <div class="form-column">
      <label
        >Макс. кол-во символов
        <input type="number" @input="setMax($event.target.value)" min="0"
      /></label>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'min-max',
  methods: {
    setMin(val: string) {
      this.$emit('set-min', val);
    },
    setMax(val: string) {
      this.$emit('set-max', val);
    },
  },
});
</script>

<style lang="scss" scoped>
.form {
  &-column {
    width: 47%;
  }
}
</style>
