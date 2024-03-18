<script setup lang="ts">
import { useCardsStore } from '~/store/cardsStore';

const cards = useCardsStore();

const handleLoadCards = async () => {
  await cards.loadCards();
};
handleLoadCards();
</script>

<template>
  <div class="kanban-container" v-if="cards.columns.length > 0">
    <KanbanColumn
      v-for="column in cards.columns"
      :key="column.row"
      :title="column.title"
      :row="column.row"
      :cards="column.cards"
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
