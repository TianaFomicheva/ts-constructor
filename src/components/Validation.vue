<template>
  <h3 class="title">Валидация</h3>
  <div class="form-field">
    <Switch
      @toggle-required="toggleRequired"
      :prop-val="curValidParams?.isRequired"
    />
  </div>
  <div class="form-field">
    <MinMax
      v-if="validateMinMax"
      @set-min="setMin"
      @set-max="setMax"
      :prop-val="{ min: curValidParams?.minVal, max: curValidParams?.maxVal }"
    />
  </div>
  <RegExp
    v-if="validateRegExp"
    @set-reg-exp="setRegExp"
    :prop-val="curValidParams?.regExp"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Switch from '@/elements/Switch.vue';
import MinMax from '@/elements/MinMax.vue';
import RegExp from '@/elements/RegExp.vue';

export default defineComponent({
  name: 'validation',
  data() {
    return {
      isRequired: false,
      minVal: 0,
      maxVal: 0,
      regExp: '',
    };
  },
  components: {
    Switch,
    MinMax,
    RegExp,
  },
  props: {
    fieldType: {
      type: String,
      default: '',
    },
    curValidParams: {
      type: Object,
    },
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
    toggleRequired(required:boolean) {
      this.isRequired = required;
      this.$emit('set-required', this.isRequired);
    },
    setMin(val: string) {
      this.minVal = val !== '' ? +val : 0;
      this.$emit('set-min-val', this.minVal);
    },
    setMax(val: string) {
      this.maxVal = val !== '' ? +val : 0;
      this.$emit('set-max-val', this.maxVal);
    },
    setRegExp(val: string) {
      this.regExp = val;
      this.$emit('set-reg-exp', this.regExp);
    },
  },
});
</script>

<style lang="scss">
input {
  width: 100%;
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
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
</style>
