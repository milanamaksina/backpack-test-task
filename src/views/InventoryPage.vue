<template>
  <div class="inventory-page">
    <InventoryTabs />
    <div class="inventory-wrapper">
      <InventoryFilter class="filter" />
      <div class="inventory-backpack">
        <InventoryLabel />
        <InventoryGrid />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import InventoryGrid from "@/components/InventoryGrid.vue";
import InventoryFilter from "@/components/InventoryFilter.vue";
import InventoryTabs from "@/components/InventoryTabs.vue";
import InventoryLabel from "@/components/InventoryLabel.vue";
</script>
<style lang="scss" scoped>
@use "@/styles/views/inventory-page.scss";
</style>
