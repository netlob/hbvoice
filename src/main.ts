import { createApp } from 'vue';
import App from './App.vue';

import router from './router';
import store, { key } from './store';
import clickaway from 'vue3-click-away';
import './styling/main.css';

import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: 'AIzaSyATyYhcgiR6277okhT_9ix9tO41Kebo0Nc',
  authDomain: 'hbvoice-bb16c.firebaseapp.com',
  projectId: 'hbvoice-bb16c',
  storageBucket: 'hbvoice-bb16c.appspot.com',
  messagingSenderId: '249712849132',
  appId: '1:249712849132:web:9983114ae7d6e42318f5c9',
  measurementId: 'G-276SJ9M7KX'
};
initializeApp(firebaseConfig);

createApp(App).use(router).use(store, key).use(clickaway).mount('#app');
