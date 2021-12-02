<template>
  <div class="container">
    <div class="layout">
    <new-edit-scheme />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NewEditScheme from '@/components/NewEditScheme.vue';

export default defineComponent({
  name: 'new-scheme',
  components: {
    NewEditScheme,

  },
});
</script>

<style>

</style>
