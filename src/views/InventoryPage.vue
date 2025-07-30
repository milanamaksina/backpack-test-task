<template>
  <div class="inventory-page">
    <InventoryTabs />
    <div class="inventory-wrapper">
      <InventoryFilter />
      <div class="inventory-backpack">
        <InventoryLabel />
        <InventoryGrid
          :items="filteredItems"
          :errorMessage="errorMessage"
          :isLoading="isLoading"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { fetchInventory } from "../api/inventory";
import InventoryGrid from "@/components/InventoryGrid.vue";
import InventoryFilter from "@/components/InventoryFilter.vue";
import InventoryTabs from "@/components/InventoryTabs.vue";
import InventoryLabel from "@/components/InventoryLabel.vue";
import type { InventoryItem } from "@/types/inventory";

const route = useRoute();
const selectedFilter = ref("all");
const inventory = ref<InventoryItem[]>([]);
const errorMessage = ref<string | null>(null);
const isLoading = ref(false);

const loadInventory = async (caseNumber: number) => {
  try {
    isLoading.value = true;
    const data = await fetchInventory(caseNumber);
    inventory.value = data.inventory;
  } catch (error) {
    errorMessage.value = `Error loading inventory: ${error}`;
  } finally {
    isLoading.value = false;
  }
};

watch(
  () => route.query.case,
  (newCase) => {
    if (newCase && !isNaN(Number(newCase))) {
      loadInventory(Number(newCase));
    }
  },
  { immediate: true }
);

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
