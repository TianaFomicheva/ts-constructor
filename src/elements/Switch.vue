<template>
<div class="flex start">
  <div class="switch-wrapper">
      <div input-id="switch1" class="switch" style="touch-action: pan-y;
      -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
      @click="toggleRequired">
    <input class="switch__input" type="checkbox" ref="switchInput" :checked="isChecked" />
    <div class="switch__toggle">
      <div class="switch__handle">
        <div class="switch__touch" @click.stop="doNothing"></div>
      </div>
      </div>
    </div>
  </div>
  <label class="label-right"> Обязательно для заполнения</label>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'switch',
  data() {
    return { isChecked: false };
  },
  props: {
    propVal: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.isChecked = this.propVal;
  },
  methods: {
    doNoting() {
      return false;
    },
    toggleRequired() {
      this.isChecked = !this.isChecked;
      this.$emit('toggle-required');
    },

  },
});
</script>

<style lang="scss">

.switch{
  &-wrapper{
    box-sizing: border-box;
    padding: 8px 12px 8px 0;
    align-items: center;
    -webkit-align-self: stretch;
    background-size: 100% 1px;
    background-repeat: no-repeat;
    background-position: bottom;
  }
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    background-clip: padding-box;
    position: relative;
    font-size: 17px;
    padding: 0 20px;
    border: none;
    overflow: visible;
    width: 47px;
    height: 28px;
    z-index: 0;
    text-align: left;
    &__input{
      position: absolute;
      right: 0;
      top: 0;
      left: 0;
      bottom: 0;
      padding: 0;
      border: 0;
      background-color: transparent;
      vertical-align: top;
      outline: none;
      width: 100%;
      margin: 0;
      z-index: 0;
    }
    &__touch{
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -10px;
      right: -10px;
    }
    &__handle{
    box-sizing: border-box;
    background-clip: padding-box;
    position: absolute;
    content: '';
    border-radius: 24px;
    height: 24px;
    width: 24px;
    background-color: white;
    left: 1px;
    top: 2px;
    transition-property: all;
    transition-duration: 0.35s;
    transition-timing-function: cubic-bezier(.59, .01, .5, .99);
    box-shadow: 0 0 1px 0 rgba(0, 0, 0,0.25), 0 3px 2px rgba(0, 0, 0,0.25);
    }
    &__toggle{
      background-color: #e7e6e6;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 30px;
      transition-property: all;
      transition-duration: 0.35s;
      transition-timing-function: ease-out;
      box-shadow: inset 0 0 0 2px #e7e6e6;
    }
}
:checked + .switch__toggle {
  box-shadow: inset 0 0 0 2px #1390E5;
  background-color: #1390E5;
  height: 100%;
  width: 47px;
}

:checked + .switch__toggle > .switch__handle{
    left: 21px;
    box-shadow: 0 3px 2px rgba(0, 0, 0,0.25);
}

.label-right{
  display: inline-block;
}
</style>
