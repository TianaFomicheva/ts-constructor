<template>
<div >
<h3 class="title">Валидация</h3>
<div class="form-field">
    <Switch @toggle-required="toggleRequired" />
</div>
<div class="form-field">
    <MinMax v-if="validateMinMax" />
</div>
    <RegExp v-if="validateRegExp" />
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Switch from '@/elements/Switch.vue';
import MinMax from '@/elements/MinMax.vue';
import RegExp from '@/elements/RegExp.vue';

export default defineComponent({
  name: 'validation',
  data() {
    return { isRequired: false };
  },
  components: {
    Switch,
    MinMax,
    RegExp,
  },
  props: {
    fieldType: {
      type: String,
    },
  },
  mounted() {
    console.log(this.fieldType);
  },
  computed: {
    validateMinMax() {
      return this.fieldType !== 'dropdown' && this.fieldType !== 'phone';
    },
    validateRegExp() {
      return this.fieldType === 'text';
    },
  },
  methods: {
    toggleRequired() {
      this.isRequired = !this.isRequired;
    },
  },
});
</script>

<style lang="scss">
input {
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
