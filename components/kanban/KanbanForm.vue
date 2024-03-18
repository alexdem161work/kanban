<script setup lang="ts">
import { ref } from 'vue';
import { useCardsStore } from '~/store/cardsStore';

import Form from '~/services/form';

interface Props {
  row: string,
}

const cards = useCardsStore();
const emit = defineEmits(['close', 'created']);
const props = defineProps<Props>();

const formData = ref(new Form({
  row: props.row,
  text: 'null',
}));

const clearForm = () => {
  formData.value.fields.text = null;
}

const handleCancel = () => {
  clearForm();
  emit('close');
};

const handleAddCard = async () => {
  await cards.createCard(formData.value.getValues());
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
