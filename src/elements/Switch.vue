<template>
  <div class="right list-item__right">
      <div input-id="switch1" class="switch" style="touch-action: pan-y;
      -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
    <input class="switch__input" type="checkbox" />
    <div class="switch__toggle">
      <div class="switch__handle">
        <div class="switch__touch"></div>
      </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'switch',
});
</script>

<style lang="scss">

.switch{
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    background-clip: padding-box;
    position: relative;
    min-width: 51px;
    font-size: 17px;
    font-size: 17px;
    padding: 0 20px;
    border: none;
    overflow: visible;
    width: 51px;
    width: 51px;
    height: 32px;
    height: 32px;
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
      z-index: 1;
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
    border-radius: 28px;
    height: 28px;
    width: 28px;
    background-color: white;
    background-color: white;
    left: 1px;
    top: 2px;
    transition-property: all;
    transition-duration: 0.35s;
    transition-timing-function: cubic-bezier(.59, .01, .5, .99);
    box-shadow: 0 0 1px 0 rgba(0, 0, 0,0.25), 0 3px 2px rgba(0, 0, 0,0.25);
    }
    &__toggle{
      background-color: white;
      background-color: white;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 30px;
      transition-property: all;
      transition-duration: 0.35s;
      transition-timing-function: ease-out;
      box-shadow: inset 0 0 0 2px #e5e5e5;
      box-shadow: inset 0 0 0 2px #e5e5e5;
    }
}
:checked + .switch__toggle {
  box-shadow: inset 0 0 0 2px #44db5e;
  box-shadow: inset 0 0 0 2px #44db5e;
  background-color: #44db5e;
  background-color: #44db5e;
  height: 100%;
  width: 150px;
}

:checked + .switch__toggle > .switch__handle{
        left: 21px;
    box-shadow: 0 3px 2px rgba(0, 0, 0,0.25);
}

.list-item__right{
    box-sizing: border-box;
    display: -webkit-flex;
    display: flex;
    margin-left: auto;
    padding: 12px 12px 12px 0;
    -webkit-order: 2;
    order: 2;
    -webkit-align-items: center;
    align-items: center;
    -webkit-align-self: stretch;
    background-size: 100% 1px;
    background-repeat: no-repeat;
    background-position: bottom;
}
</style>
