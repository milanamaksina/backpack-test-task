<template>
  <div class="inventory-container">
    <InventoryTabs />
    <div class="inventory-wrapper">
      <InventoryFilter
        class="filter"
        :filters="filters"
        v-model="selectedFilter"
      />
      <div class="inventory-backpack">
        <InventoryLabel
          :label="activeFilterLabel"
          :totalItems="inventory.length"
        />
        <InventoryGrid
          :items="filteredItems"
          :errorMessage="errorMessage"
          :isLoading="isLoading"
          :key="selectedFilter"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import InventoryGrid from "@/components/InventoryGrid.vue";
import InventoryFilter from "@/components/InventoryFilter.vue";
import InventoryTabs from "@/components/InventoryTabs.vue";
import InventoryLabel from "@/components/InventoryLabel.vue";
import type { InventoryItem } from "@/types/inventory";
import { inventoryFilters } from "@/constants/inventoryFilters";
import { useInventory } from "@/composables/useInventory";

const route = useRoute();
const selectedFilter = ref("all");
const filters = ref(inventoryFilters);
const { inventory, isLoading, errorMessage, loadInventory } = useInventory();

watch(
  () => route.query.case,
  (newCase) => {
    if (newCase && !isNaN(Number(newCase))) {
      loadInventory(Number(newCase));
    }
  },
  { immediate: true }
);

const activeFilter = computed(() =>
  filters.value.find((f) => f.id === selectedFilter.value)
);

const activeFilterLabel = computed(() => activeFilter.value?.label ?? "all");

const filteredItems = computed(() => {
  if (selectedFilter.value === "all") return inventory.value;
  return inventory.value.filter(
    (item: InventoryItem) => item.type === selectedFilter.value
  );
});
</script>

<style lang="scss" scoped>
@use "@/styles/views/inventory-page.scss";
</style>
