<template >
  <div id="nav">
    <Header @to-logout="toLogout" v-if="isLogged"/>
  </div>
  <router-view @to-login="toLogin" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import '@/assets/form.scss';

export default defineComponent({
  name: 'Home',
  components: {
    Header,
  },
  data() {
    return {
      loginState: 0,
    };
  },
  computed: {
    isLogged() {
      return localStorage.getItem('token') ? 1 : 0;
    },
  },
  methods: {
    toLogout() {
      window.location.reload();
    },
    toLogin() {
      window.location.reload();
    },
  },
});
</script>

<style lang="scss">
body{
background: #FAFAFA;
}
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
}
.title{
  font-size: 28px;
  font-weight: bold;
}
.button{
  &-primary, &-plain{
    margin-top: 20px;
    display: block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    border: 1px solid #1390E5;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px;
    font-size: 14px;
    border-radius: 4px;
  }
  &-primary{
    background: #1390E5;
    color: #fff;
  }
  &-plain{
    background: transparent;
    color: #1390E5;
    border: 1px solid #1390E5;
  }
}
.dotted{
  padding-top:20px;
  padding-bottom: 20px;
  border-bottom: 1px dotted rgb(192, 191, 191);
}
#nav {

  a {
    font-weight: bold;
    color: #1390E5;

    &.router-link-exact-active {
      color: #1390E5;
    }
  }
}
.layout{
  text-align: left;
  padding: 20px;
}
.left{
  text-align: left;
}
.flex{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.start{
  justify-content: start;
}
.blue{
  color: #1390E5;
}
.red{
  color: red;
}
</style>
