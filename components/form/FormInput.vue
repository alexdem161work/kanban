<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  modelValue?: string | number | null,

  placeholder?: string,
  type?: 'text' | 'password',
}

const emit = defineEmits(['update:modelValue']);
const props = withDefaults(defineProps<Props>(), {
  type: 'text',
});

const value = computed({
  get() {
    return props.modelValue;
  },

  set(val) {
    emit('update:modelValue', val);
  },
});
</script>

<template>
  <input
    v-model="value"
    :type="type"
    :placeholder="placeholder"
    class="form-input"
  />
</template>

<style scoped lang="scss">
.form-input {
  box-sizing: border-box;

  width: 100%;
  height: 40px;

  background: #4f4f4f;
  color: #a7a9ab;

  border: none;
  padding: 15px;

  &:focus {
    outline: none;
  }
}
</style>
