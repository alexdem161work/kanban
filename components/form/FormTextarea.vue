<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  modelValue: string | number | null,

  placeholder: string,
}

const emit = defineEmits(['update:modelValue', 'focus', 'blur']);
const props = defineProps<Props>();

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
  <textarea
    v-model="value"
    :placeholder="placeholder"
    class="form-textarea"
    :readonly="readonly"
  />
</template>

<style lang="scss">
.form-textarea {
  box-sizing: border-box;

  width: 100%;
  height: 100px;
  resize: none;
  background: #4f4f4f;
  color: #a7a9ab;

  border: none;
  padding: 15px;

  &:focus {
    outline: none;
  }
}
</style>
