<template>

  <scheme-form v-for="(item, index) in property" :key = index @set-prop-item="setPropertyItem" />
  <div class="column-2">
  <button class="form-button" @click="createItem">Добавить новое свойство</button>
  </div>
  <div class="column-2">
     <button class="form-button" @click="createProperty">Сохранить схему</button>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';
import SchemeForm from './SchemeForm.vue';

export default defineComponent({
  components: { SchemeForm },
  name: 'scheme-property',
  data() {
    return { property: [{}] };
  },
  methods: {
    ...mapActions(['createScheme']),
    setPropertyItem(item: any) {
      if (this.property.length > 0) {
        const index = this.property.findIndex((itm: any) => itm.key === item.key);
      }
    },
    createItem() {
      this.property.push({});
    },
    createProperty() {
      this.createScheme(this.property);
    },
  },
});
</script>

<style lang="scss">
.form{
  &-button{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #1390E5;
    color: #1390E5;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px;
    font-size: 14px;
    border-radius: 4px;
  }
}
</style>
