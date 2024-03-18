<script setup lang="ts">
import { ref } from 'vue';
import { createCard } from '~/api/cards';

import Form from '~/services/form';
import BadRequestError from '~/errors/BadRequestError';

interface Props {
  row: string,
}

const emit = defineEmits(['close', 'created']);
const props = defineProps<Props>();

const formData = ref(new Form({
  row: props.row,
  text: null,
}));

const clearForm = () => {
  formData.value.fields.text = null;
}

const handleCancel = () => {
  clearForm();
  emit('close');
};

const handleAddCard = async () => {
  try {
    const newCard = await createCard(formData.value.getValues());
    emit('created', newCard);
    handleCancel();
  } catch (error) {
    if (error instanceof BadRequestError) {
      formData.value.setErrors(error.getErrors());
    }
  }
};
</script>

<template>
<div class="kanban-form">
  <FormWrapper @submit.prevent="handleAddCard">
    <FormTextarea
      v-model="formData.fields.text"
      placeholder="Введите заголовок для этой карточки"
    />
    <template #actions>
      <UiButton type="submit">Добавить карточку</UiButton>
      <UiButton variant="ghost" @click="handleCancel">X</UiButton>
    </template>
  </FormWrapper>
</div>
</template>

<style scoped lang="scss">

</style>
