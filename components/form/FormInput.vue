<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  modelValue?: string | number | null,

  placeholder?: string,
  type?: 'text' | 'password',
  errors?: string[],
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
  <div class="form-input-container">
    <input
      v-model="value"
      :type="type"
      :placeholder="placeholder"
      class="form-input-container__input"
    />

    <div
      v-if="errors?.length > 0"
      class="form-input-container__errors"
    >
      <div
        class="form-input-container__error"
        v-for="error in errors"
        :key="error"
      >
        {{ error }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.form-input-container {

  &__input {
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

  &__errors {

  }
}
</style>
