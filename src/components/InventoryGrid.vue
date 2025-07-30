div
<template>
  <div class="inventory-grid-container">
    <div class="inventory-grid">
      <div v-for="index in totalSlots" :key="index" class="inventory-cell">
        <InventoryCard />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import InventoryCard from "@/components/InventoryCard.vue";

const totalSlots = 40;
</script>

<style lang="scss" scoped>
@use "@/styles/components/inventory-grid.scss";
</style>
