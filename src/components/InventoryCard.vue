<template>
  <div
    class="inventory-card"
    :class="[item.type, { 'card-visible': cardVisible }]"
  >
    <div class="image-wrapper" :class="{ cooldown: isOnCooldown }">
      <div
        v-if="item.charges && item.maxCharges && imgLoaded"
        class="charges-label"
      >
        {{ item.charges }}/{{ item.maxCharges }}
      </div>
      <div v-if="item.count && imgLoaded" class="count-label">
        {{ item.count }}
      </div>
      <img
        :src="item.imageUrl"
        :alt="item.name"
        class="item-image"
        @load="onImageLoad"
      />
      <div v-if="isOnCooldown && imgLoaded" class="cooldown-overlay">
        <Icon name="cooldown" class="cooldown-icon" />
        <span class="cooldown-text">{{ remainingSeconds }}s</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { InventoryItem } from "@/types/inventory";
import Icon from "@/components/Icon.vue";
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { useCooldownTimer } from "@/composables/useCooldownTimer";

interface Props {
  item: InventoryItem;
}

const props = defineProps<Props>();
const imgLoaded = ref(false);
const cardVisible = ref(false);
const cooldown = props.item?.cooldown;
const { remainingSeconds, startTimer, stopTimer } = useCooldownTimer(cooldown);
const isOnCooldown = computed(() => remainingSeconds.value > 0);

function onImageLoad() {
  imgLoaded.value = true;
  requestAnimationFrame(() => {
    cardVisible.value = true;
  });
}

onMounted(() => {
  if (isOnCooldown.value) {
    startTimer();
  }
});

watch(
  () => props.item?.cooldown,
  (newCooldown) => {
    stopTimer();
    if (typeof newCooldown === "number" && newCooldown > Date.now()) {
      startTimer();
    }
  }
);

onUnmounted(() => {
  stopTimer();
});
</script>

<style lang="scss" scoped>
@use "@/styles/components/inventory-card.scss";
</style>
