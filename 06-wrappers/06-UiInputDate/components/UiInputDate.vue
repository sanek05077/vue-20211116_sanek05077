<template>
  <ui-input ref="uiInput" v-model="dataModel" :type="type">
    <template v-if="$slots['left-icon']" #left-icon>
      <slot name="left-icon" />
    </template>
    <template v-if="$slots['right-icon']" #right-icon>
      <slot name="left-icon" />
    </template>
  </ui-input>
</template>

<script>
const getDate = (date) => {
  return date.toISOString().split('T')[0];
};
const getTime = (date) => {
  return date.toISOString().split('.')[0].split('T')[1];
};
const getDatetimeLocal = (date) => {
  return date.toISOString().split('.')[0];
};

import UiInput from './UiInput';

export default {
  name: 'UiInputDate',
  components: { UiInput },
  props: {
    type: {
      type: String,
      default: 'date',
    },
    modelValue: {
      default: Number,
    },
  },
  emits: ['update:modelValue'],
  computed: {
    dataFormat() {
      let date = new Date(this.modelValue);
      if (this.type === 'time') {
        if (this.$attrs.step && this.$attrs.step % 60 !== 0) {
          return getTime(date);
        }
        return getTime(date).slice(0, -3);
      }
      if (this.type === 'datetime-local') {
        return getDatetimeLocal(date);
      }
      return getDate(date);
    },
    dataModel: {
      get() {
        if (!this.modelValue) {
          return null;
        }
        return this.dataFormat;
      },
      set() {
        this.$emit('update:modelValue', this.$refs.uiInput.$refs.input.valueAsNumber);
      },
    },
  },
};
</script>
