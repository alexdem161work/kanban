<template>
  <form class="form-wrapper">
    <fieldset class="form-wrapper__main">
      <slot/>
    </fieldset>

    <fieldset class="form-wrapper__actions" v-if="$slots.actions">
      <slot name="actions"/>
    </fieldset>
  </form>
</template>

<style lang="scss">
.form-wrapper {
  &__actions {
    display: flex;
    gap: 10px;

    margin-top: 20px;
  }

  &__main {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
}
</style>
