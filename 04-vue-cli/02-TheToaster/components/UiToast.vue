<template>
  <div class="toast" :class="toastClass">
    <ui-icon class="toast__icon" :icon="toastIcon" />
    <span>{{ toast.message }}</span>
  </div>
</template>

<script>
import UiIcon from './UiIcon';
const toastIcon = {
  success: 'check-circle',
  error: 'alert-circle',
};
const toastClass = {
  success: 'toast_success',
  error: 'toast_error',
};

export default {
  name: 'UiToast',
  components: {
    UiIcon,
  },
  props: {
    toast: {
      type: Object,
      required: true,
    },
  },
  computed: {
    toastIcon() {
      return toastIcon[this.toast.type];
    },
    toastClass() {
      return toastClass[this.toast.type];
    },
  },
};
</script>

<style scoped>
.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast__icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
</style>
