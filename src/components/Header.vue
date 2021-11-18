<template>
  <div class="header">
    <div class="container">
      <div class="header-links">
      <div class="header-links_left">
        <router-link to="/">Список схем</router-link>
        <router-link to="/new">Создать новую схему</router-link>
      </div>
      <div class="header-links_right">
        <router-link to="/logout">Выйти</router-link>
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
  height: 180px;
  &-links {
    display: flex;
    justify-content: space-between;

  }
  & a{
    text-decoration: none;
  }
}
</style>
