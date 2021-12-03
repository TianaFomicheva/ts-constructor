<template>
  <div>
    <Schemes v-if="isLogged" />
    <Login v-else @to-login="toLogin" />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Schemes from '@/components/Schemes.vue';
import Login from '@/components/Login.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Schemes,
    Login,
  },
  data() {
    return { startState: 0 };
  },
  props: {
    state: {
      type: Number,
    },
  },
  computed: {
    isLogged() {
      return !!localStorage.getItem('token');
    },
  },
});
</script>
