<template>
  <div>
    <Login v-if="!isLogged"/>
    <Schemes v-else/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import { mapGetters } from 'vuex';
import Schemes from '@/components/Schemes.vue';
import Login from '@/components/Login.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Schemes,
    Login,
  },
  data() {
    return { };
  },
  computed: {
    isLogged() {
      return !!localStorage.getItem('token');
    },
  },
});
</script>
