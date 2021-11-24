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
    increaseCounter(counter) {
      counter++;
      this.$emit('update:count', counter);
    },
  },
  template: `<button type="button" @click="increaseCounter(count)">{{ count }}</button>`,
});
