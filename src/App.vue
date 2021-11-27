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
  background: #E5E5E5;
}
.container{
  max-width: 1120px;
  margin: 0 auto;
}
.button{
  &-primary{
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
    background: #1390E5;
    color: #fff;
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
  padding: 20px;
}
.left{
  text-align: left;
}
.blue{
  color: #1390E5;
}
.color{
  color: red
}
</style>
