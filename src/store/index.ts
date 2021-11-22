// import { ComponentCustomProperties } from 'vue'
import { createStore } from 'vuex';
import axios from 'axios';

// declare module '@vue/runtime-core' {
//   // declare your own store states
//   interface State {
//     isLogged: boolean
//   }
//   interface ComponentCustomProperties {
//     $store: createStore<State>
//   }
// }

const api = 'http://193.124.206.217:3000/';
export default createStore({
  state: {
    properties: [],
    isLogged: false,
  },
  mutations: {
  },
  actions: {
    async createScheme({ commit }, payload: any) {
      try {
        await axios.post(`${api}form`, { schema: payload })
          .then((response) => { console.log(response); });
      } catch (error) {
        console.error(error);
      }
    },
    async signUp({ commit }, payload: any) {
      try {
        await axios.post(`${api}auth/signup`, { schema: payload })
          .then((response) => { console.log(response); });
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
