<template>
  <div class="inventory-grid-container">
    <div v-if="isLoading" class="loading-state">
      <div class="loading-spinner"></div>
    </div>
    <div v-else-if="error">
      <p>{{ error }}</p>
    </div>
    <div v-else class="inventory-grid">
      <div
        v-for="index in totalSlotsToRender"
        :key="index"
        class="inventory-cell"
      >
        <InventoryCard
          v-if="items[index - 1]"
          :item="items[index - 1]"
          @mouseenter="(e: MouseEvent) => showTooltip(e, items[index - 1].name)"
          @mouseleave="hideTooltip"
        />
        <div v-else></div>
      </div>
      <InventoryCardTooltip ref="tooltipRef" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { InventoryItem } from "@/types/inventory";
import InventoryCard from "@/components/InventoryCard.vue";
import InventoryCardTooltip from "@/components/InventoryCardTooltip.vue";
import { computed, ref } from "vue";

interface Props {
  items: InventoryItem[];
  isLoading?: boolean;
  error?: string | null;
}
const props = defineProps<Props>();

const tooltipRef = ref<InstanceType<typeof InventoryCardTooltip>>();

function showTooltip(e: MouseEvent, name: string) {
  tooltipRef.value?.showTooltip(e, name);
}

function hideTooltip() {
  tooltipRef.value?.hideTooltip();
}

const totalSlots = 40;
const totalSlotsToRender = computed(() =>
  Math.max(props.items.length, totalSlots)
);
</script>

<style lang="scss" scoped>
@use "@/styles/components/inventory-grid.scss";
</style>
