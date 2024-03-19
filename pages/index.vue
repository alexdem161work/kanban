<script setup lang="ts">
definePageMeta({
  middleware: ['role-user'],
});
</script>

<template>
  <KanbanContainer/>
</template>
