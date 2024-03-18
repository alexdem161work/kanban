<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  title: string,
  row: string,
  cards: [],
}

const emit = defineEmits(['createdCard']);
const props = defineProps<Props>();

const shownForm = ref(false);
const handleOpenForm = () => {
  shownForm.value = true;
};

const handleCloseForm = () => {
  shownForm.value = false;
}

const handleBeforeCreated = (newCard) => {
  emit('createdCard', newCard, props.row)
};
</script>

<template>
  <div class="kanban-column" :class="`kanban-column--${row}`">
    <div class="kanban-column__header">
      {{ title }} ({{ cards.length }})
    </div>

    <div class="kanban-column__body">
      <div class="kanban-column__cards">
        <KanbanCard
          v-for="card in cards"
          :key="card.id"
          :card="card"
        />

        <KanbanForm
          v-show="shownForm"
          :row="row"
          @created="handleBeforeCreated"
          @close="handleCloseForm"
        />
      </div>

      <div class="kanban-column__actions" v-show="!shownForm">
        <UiButton
          @click="handleOpenForm"
          variant="ghost"
          adaptive
        >
          Добавить
        </UiButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.kanban-column {
  &__header {
    box-sizing: border-box;

    font-size: 28px;
    height: 62px;
    padding: 14px;

    display: flex;
    align-items: center;
    color: white;
  }

  &--0 > &__header {
    background: #eb834b;
  }

  &--1 > &__header {
    background: #4090b7;
  }

  &--2 > &__header {
    background: #edcb54;
  }

  &--3 > &__header {
    background: #51b168;
  }

  &__body {
    background: #2f3135;
  }

  &__cards {
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  &__actions {
    margin-top: 40px;
  }
}
</style>
