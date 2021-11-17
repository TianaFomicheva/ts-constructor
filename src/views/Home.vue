<template>
  <div>
    <Header />
    <Schemes />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Schemes from '@/components/Schemes.vue'; // @ is an alias to /src
import Header from '@/components/Header.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    Schemes,
    Header
  },
});
</script>
