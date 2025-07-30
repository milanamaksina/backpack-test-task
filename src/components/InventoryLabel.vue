<template>
  <div class="inventory-label">
    <span class="label">{{ label }}</span>
    <span class="item-counter">{{ `${totalItems}/100` }}</span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string;
  totalItems: number;
}
defineProps<Props>();
</script>

<style lang="scss" scoped>
@use "@/styles/components/inventory-label.scss";
</style>
