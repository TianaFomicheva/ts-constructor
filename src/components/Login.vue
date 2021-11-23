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
      console.log(this.auth_username);
      this.login({ username: this.auth_username, password: this.auth_password });
    },
  },
});
</script>

<style lang="scss" scoped>
label{
  text-align: left;
}
.form {
    &-column{
      width:50%
    }
    &-field {
      margin: 5px;
      width: 422px;
      position: relative;
      font-size: 14px;
      display: block;
    }
     &-button{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #1390E5;
    color: #1390E5;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px;
    font-size: 14px;
    border-radius: 4px;
  }
}
</style>
