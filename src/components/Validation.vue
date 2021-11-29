<template>
<div >
<h3 class="title">Валидация</h3>
<div class="form-field">
    <Switch />
</div>
<div class="form-field">
    <MinMax />
</div>
    <RegExp />
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Switch from '@/elements/Switch.vue';
import MinMax from '@/elements/MinMax.vue';
import RegExp from '@/elements/RegExp.vue';

export default defineComponent({
  name: 'validation',
  components: {
    Switch,
    MinMax,
    RegExp,
  },
});
</script>

<style lang="scss">

</style>
