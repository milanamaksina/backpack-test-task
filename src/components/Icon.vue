<template>
  <svg style="max-height: 56px">
    <use :xlink:href="`/sprite.svg#icon-${name}`" />
  </svg>
</template>

<script setup lang="ts">
defineProps({
  name: { type: String, required: true },
});
</script>
