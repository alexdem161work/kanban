<script setup lang="ts">

</script>

<template>
  <div class="kanban-container">
    <KanbanColumn title="ON HOLD" type="0" :cards="[]"/>
    <KanbanColumn title="IN PROGRESS" type="1" :cards="[]"/>
    <KanbanColumn title="NEEDS REVIEW" type="2" :cards="[]"/>
    <KanbanColumn title="APPROVED" type="3" :cards="[]"/>
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
