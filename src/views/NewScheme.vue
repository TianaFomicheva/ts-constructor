<template>
  <div class="container">
    <div class="layout">
    <scheme-property />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SchemeProperty from '@/components/SchemeProperty.vue';

export default defineComponent({
  name: 'new-scheme',
  components: {
    SchemeProperty,

  },
});
</script>

<style>
.layout
{
  text-align: left;
}
</style>
