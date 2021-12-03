<template>
  <div class="container">
    <div class="login-layout__wrapper">
    <div class="login-layout">
      <img src="~@/assets/sibdev-logo.png" />
      <h3>Регистрация</h3>
        <div class="form-field">
          <label for="">Логин<input v-model="register_username" type="text"/></label>
        </div>
         <div class="form-field">
          <label for="">Пароль<input v-model="register_password"
          :type="showRegisterPassword ? 'text' : 'password'"/>
          <font-awesome-icon :icon="showRegisterPassword ? 'eye-slash' : 'eye'"
          @click="toggleInputType('register')" /></label>
         </div>
          <button class="button-primary" @click="register">Зарегистрироваться</button>
          <h3>Войти</h3>
         <div class="form-field">
         <label for="">Логин<input v-model="auth_username" type="text"/></label>
         </div>
          <div class="form-field">
          <label for="">Пароль<input v-model="auth_password"
          :type="showAuthPassword ? 'text' : 'password'"/>
          <font-awesome-icon :icon="showAuthPassword ? 'eye-slash' : 'eye'"
          @click="toggleInputType('auth')" /></label>
          </div>
           <button class="button-primary" @click="auth">Войти</button>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
  name: 'username',
  data() {
    return {
      register_username: '', register_password: '', auth_username: '', auth_password: '', showAuthPassword: false, showRegisterPassword: false,
    };
  },
  methods: {
    ...mapActions(['signUp', 'login']),
    register() {
      this.signUp({ username: this.register_username, password: this.register_password });
    },
    auth() {
      this.login({ username: this.auth_username, password: this.auth_password });
      this.$emit('to-login');
    },
    toggleInputType(type: any) {
      switch (type) {
        case 'auth':
          this.showAuthPassword = !this.showAuthPassword;
          break;
        case 'register':
          this.showRegisterPassword = !this.showRegisterPassword;
          break;
        default:
          break;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.form{
  &-field{
    position: relative;
  }
}
svg{
  position: absolute;
  right:10px;
  top:50%;
  cursor: pointer;
}
.login{
  &-layout{
    width:600px;
    background: #fff;
    &__wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        height: calc(100vh - 10px);
      }
    }
}
.button{
  &-primary{
    margin: 10px auto 60px auto;
  }
}
img{
  margin-top: 20px;
}
h3{
  margin-top: 30px;
  line-height: 0.2;
}
</style>
