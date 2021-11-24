<template>
  <div class="header">
    <div class="container">
      <div class="header-links">
      <div class="header-links_left">
        <div class="header-link">
        <router-link to="/">Список схем</router-link>
        </div>
        <div class="header-link">
        <router-link to="/new">Создать новую схему</router-link>
        </div>
      </div>
      <div class="header-links_right">
        <div class="header-link">
        <router-link to="/logout">Выйти</router-link>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
});
</script>
<style lang="scss" scoped>
.header {
  height: 60px;
  &-links {
    display: flex;
    justify-content: space-between;

  }
  &-link{
    padding-left:10px;
    padding-right:10px;
    display: inline-block;
    color: #1390E5;
  }
  & a{
    text-decoration: none;
    color: #1390E5;
  }
}
</style>
