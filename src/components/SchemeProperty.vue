<template>
  <scheme-form @set-prop-item="setPropertyItem"/>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import SchemeForm from './SchemeForm.vue';

export default defineComponent({
  components: { SchemeForm },
  name: 'scheme-property',
  data() {
    return { property: [] };
  },
  methods: {
    setPropertyItem(item: any) {
      if (this.property.length > 0) {
        const index = this.property.findIndex((itm: any) => itm.key === item.key);
      }
    },
  },
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
  input,
  select {
    display: block;
    width: 422px;
  }
}
.red {
  color: red;
}
</style>
