<script setup lang="ts">

</script>

<template>
  <div class="kanban-card">
    <div class="kanban-card__id">
      <span class="kanban-card__id-label">id: </span>
      <span class="kanban-card__id-value">1234314325235</span>
    </div>

    <div class="kanban-card__description">
      Text
    </div>
  </div>
</template>

<style lang="scss">
.kanban-card {
  background: #1f1f21;
  padding: 40px 16px 16px;

  font-size: 19px;
  color: #6c7071;

  &__id {
    margin-bottom: 30px;
  }

  &__id-label {
    color: white;
    font-weight: bold;
  }
}
</style>
