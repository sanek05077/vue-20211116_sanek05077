import { createApp } from './vendor/vue.esm-browser.js';

const App = {
  data() {
    return {
      count: 0,
    };
  },
};

const app = createApp(App);

const vm = app.mount('#app');

window.vm = vm;
