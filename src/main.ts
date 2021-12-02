import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Maska from 'maska';
import App from './App.vue';
import router from './router';
import store from './store';

library.add(faTrash, faCheck, faTimes);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router)
  .use(Maska)
  .mount('#app');
