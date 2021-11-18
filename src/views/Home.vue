<template>
  <div>
    <Schemes />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Schemes from '@/components/Schemes.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    Schemes,

  },
});
</script>
