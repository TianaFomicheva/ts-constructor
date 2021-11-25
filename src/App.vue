<template>
  <div id="nav">
    <Header />
  </div>
  <router-view/>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    Header,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container{
  max-width: 1120px;
  margin: 0 auto;
  padding:20px;
}
.dotted{
  padding-top:20px;
  padding-bottom: 20px;
  border-bottom: 1px dotted rgb(192, 191, 191);
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #1390E5;

    &.router-link-exact-active {
      color: #1390E5;
    }
  }
}
</style>
