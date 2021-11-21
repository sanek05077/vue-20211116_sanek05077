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
          return parseInt(this.firstNumber) + parseInt(this.secondNumber);
        case 'subtract':
          return parseInt(this.firstNumber) - parseInt(this.secondNumber);
        case 'multiply':
          return parseInt(this.firstNumber) * parseInt(this.secondNumber);
        case 'divide':
          return parseInt(this.firstNumber) / parseInt(this.secondNumber);
        default:
          return 'Incorrect operator';
      }
    },
  },
};

const app = createApp(App);

const vm = app.mount('#app');
