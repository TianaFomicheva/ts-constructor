<template>
  <div class="form-field">
    <label
      >Шаблон ввода
      <input @input="setRegExp($event.target.value)" />
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'reg-exp',
  methods: {
    setRegExt(val: string) {
      this.$emit('set-reg-exp', val);
    },
  },
});
</script>

<style>
</style>
