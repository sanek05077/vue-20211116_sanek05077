<template>
  <ui-toast-list :toasts="toasts"></ui-toast-list>
</template>

<script>
import UiToastList from './UiToastList';

export default {
  name: 'TheToaster',
  components: {
    UiToastList,
  },
  data() {
    return {
      toasts: [],
      toastId: 0,
    };
  },

  methods: {
    createToast(toast) {
      this.toasts.push({
        toastId: this.toastId++,
        message: toast.message,
        type: toast.type,
      });
      setTimeout(() => {
        this.toasts.shift();
      }, 5000);
    },
    success(message) {
      this.createToast({
        message: message,
        type: 'success',
      });
    },
    error(message) {
      this.createToast({
        message: message,
        type: 'error',
      });
    },
  },
};
</script>

