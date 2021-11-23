import { createApp } from './vendor/vue.esm-browser.js';

const App = {
  data() {
    return {
      firstNumber: 10,
      secondNumber: 5,
      operator: 'sum',
    };
  },
  computed: {
    result() {
      switch (this.operator) {
        case 'sum':
          return this.firstNumber + this.secondNumber;
        case 'subtract':
          return this.firstNumber - this.secondNumber;
        case 'multiply':
          return this.firstNumber * this.secondNumber;
        case 'divide':
          return this.firstNumber / this.secondNumber;
        default:
          return 'Incorrect operator';
      }
    },
  },
};

const app = createApp(App);

const vm = app.mount('#app');

window.vm = vm;
