import { createStore } from 'vuex';
import axios from 'axios';

const api = 'http://193.124.206.217:3000/';
export default createStore({
  state: {
    properties: [],
    isLogged: false,
    token: '',
    schemes: [],
  },
  mutations: {
  },
  actions: {
    async createScheme({ commit }, payload: any) {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const res:any = await axios.post(`${api}form`, { schema: payload }, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then((response) => { console.log(response); });
        } catch (error) {
          console.error(error);
        }
      } else {
        alert('Вы не авторизованы');
      }
    },
    async updateScheme({ commit }, payload:any) {
      const { id, schemaVal } = payload;
      console.log(commit);
      console.log(schemaVal);
      console.log(payload);
      // const id = 186;
      const token = localStorage.getItem('token');
      // const payload = { schemaName: 'Name1',
      // properties: [{ key: 'key1', name: 'name1', fieldType: 'text' }] };
      if (token) {
        try {
          const res:any = await axios.post(`${api}form/${id}`, { schema: schemaVal }, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then((response) => { console.log(response); });
        } catch (error) {
          console.error(error);
        }
      } else {
        alert('Вы не авторизованы');
      }
      return true;
    },
    async getSchemes({ commit }):Promise<any> {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const res = await axios.get(`${api}form`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          return res.data;
        } catch (error) {
          console.error(error);
        }
      } else {
        alert('Вы не авторизованы');
      }
      return false;
    },
    async getScheme({ commit }, payload:number):Promise<any> {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const res = await axios.get(`${api}form/${payload}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          return res.data;
        } catch (error) {
          console.error(error);
        }
      } else {
        alert('Вы не авторизованы');
      }
      return false;
    },
    async signUp({ commit }, payload: any) {
      try {
        console.log(commit);
        await axios.post(`${api}auth/signup`, { username: payload.username, password: payload.password })
          .then((response) => { console.log(response); });
      } catch (error) {
        console.error(error);
      }
    },
    async login({ commit }, payload: any) {
      try {
        console.log(commit);
        await axios.post(`${api}auth/login`, { username: payload.username, password: payload.password })
          .then((response:any) => { localStorage.setItem('token', response.data.access_token); });
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {
  },
  getters: {
    isLogged: (state:any) => state.isLogged,
  },
});
