<script setup lang="ts">
import { ref } from 'vue';

const test = ref(null);
</script>

<template>
<div class="kanban-form">
  <FormWrapper>
    <FormTextarea v-model="test" placeholder="Введите заголовок для этой карточки"/>
    <template #actions>
      <UiButton>Добавить карточку</UiButton>
      <UiButton variant="ghost">X</UiButton>
    </template>
  </FormWrapper>
</div>
</template>

<style scoped lang="scss">

</style>
