<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  variant?: 'primary' | 'ghost',
  adaptive?: boolean,
  type?: 'button' | 'submit' | 'reset',
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  adaptive: false,
  type: 'button',
});

const classes = computed((): string[] => {
  const styles = ['v-button', `v-button--${props.variant}`];

  if (props.adaptive) {
    styles.push('v-button--adaptive');
  }

  return styles;
});
</script>

<template>
  <button :class="classes" :type="type">
    <slot/>
  </button>
</template>

<style lang="scss">
.v-button {
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  white-space: nowrap;
  text-align: left;

  padding: 15px;

  &--ghost {
    background: transparent;
    color: #75767d;
    border: none;

    &:hover {
      background: #26282c;
    }
  }

  &--adaptive {
    width: 100%;
  }
}
</style>
