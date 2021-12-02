<template>
  <div class="container">
        <div class="form-field">
          <label for="">Логин<input v-model="register_username" type="text"/></label>
        </div>
         <div class="form-field">
          <label for="">Пароль<input v-model="register_password" type="password"/></label>
         </div>
          <button class="form-button" @click="register">Зарегистрироваться</button>
         <div class="form-field">
         <label for="">Логин<input v-model="auth_username" type="text"/></label>
         </div>
          <div class="form-field">
          <label for="">Пароль<input v-model="auth_password" type="password"/></label>
          </div>
           <button class="form-button" @click="auth">Войти</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
  name: 'username',
  data() {
    return {
      register_username: '', register_password: '', auth_username: '', auth_password: '',
    };
  },
  methods: {
    ...mapActions(['signUp', 'login']),
    register() {
      this.signUp({ username: this.register_username, password: this.register_password });
    },
    auth() {
      this.login({ username: this.auth_username, password: this.auth_password });
    },
  },
});
</script>

<style lang="scss" scoped>

</style>
