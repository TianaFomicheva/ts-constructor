<template>
  <div class="header">
    <div class="container">
      <div class="header-links">
      <div class="header-links__left">
        <div class="header-link">
        <router-link to="/"><img src="~@/assets/sibdev-logo.png" /></router-link>
        </div>
        <div class="header-link">
        <router-link to="/">Мои схемы</router-link>
        </div>
        <div class="header-link">
        <router-link to="/new">Создать новую схему</router-link>
        </div>
      </div>
      <div class="header-links__right">
        <div class="header-link">
        <a @click="toLogout">Выйти</a>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default defineComponent({
  name: 'Header',
  methods: {
    ...mapActions(['logout']),
    toLogout() {
      this.logout();
      window.location.reload();
    },
  },
});
</script>
<style lang="scss" scoped>
.header {
  height: 60px;
  background: #fff;
  &-links {
    display: flex;
    justify-content: space-between;
    &__left, &__right{
      display: flex;
      align-items: center;
    }

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
