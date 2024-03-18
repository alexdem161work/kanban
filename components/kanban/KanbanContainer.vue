<script setup lang="ts">
import { ref } from 'vue';
import { getCards } from '~/api/cards';

const cards = ref([]);

const columns = ref([
  {
    row: '0',
    title: 'ON HOLD',
    cards: [],
  },
  {
    row: '1',
    title: 'IN PROGRESS',
    cards: [],
  },
  {
    row: '2',
    title: 'NEEDS REVIEW',
    cards: [],
  },
  {
    row: '3',
    title: 'APPROVED',
    cards: [],
  },
]);

const distributeCardsToColumns = () => {
  cards.value.forEach((card) => {
    const { row } = card;
    const column = columns.value.find((col) => col.row === row);

    if (column) {
      const { id, seq_num, text } = card;
      column.cards.push({ id, seq_num, text });
    }
  });
};

const handleLoadCards = async () => {
  cards.value = await getCards();
  distributeCardsToColumns();
};
handleLoadCards();

const handelAddNewCard = (newCard, row: string) => {
  const column = columns.value.find((col) => col.row === row);
  if (column) {
    column.cards.push(newCard);
  }
};
</script>

<template>
  <div class="kanban-container">
    <KanbanColumn
      v-for="column in columns"
      :key="column.row"
      :title="column.title"
      :row="column.row"
      :cards="column.cards"
      @created-card="handelAddNewCard"
    />
  </div>
</template>

<style scoped lang="scss">
.kanban-container {
  padding: 63px 72px;
  min-height: 100%;

  display: grid;
  grid-template-columns: repeat(4, 416px);
  gap: 84px;
  overflow-x: auto;
  white-space: nowrap;
}
</style>
