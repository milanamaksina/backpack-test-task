<template>
  <div class="inventory-card">
    <div class="image-wrapper">
      <img
        :src="item.imageUrl"
        :alt="item.name"
        class="item-image"
        @load="onImageLoad"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { InventoryItem } from "@/types/inventory";

interface Props {
  item: InventoryItem;
}

const props = defineProps<Props>();
const imgLoaded = ref(false);
const cardVisible = ref(false);

function onImageLoad() {
  imgLoaded.value = true;
  requestAnimationFrame(() => {
    cardVisible.value = true;
  });
}
</script>

<style lang="scss" scoped>
@use "@/styles/components/inventory-card.scss";
</style>
