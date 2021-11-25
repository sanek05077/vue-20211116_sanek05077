import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',
  props: {
    count: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  methods: {
    increaseCounter(count) {
      count++;
      this.$emit('update:count', count);
    },
  },
  template: `<button type="button" @click="increaseCounter(count)">{{ count }}</button>`,
});
