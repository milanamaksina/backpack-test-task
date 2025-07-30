<template>
  <div
    v-if="visible"
    class="tooltip"
    :style="{
      top: `${position.y}px`,
      left: `${position.x}px`,
    }"
  >
    {{ text }}
  </div>
</template>

<script setup lang="ts">
import { useTooltip } from "@/composables/useTooltip";

const { visible, text, position, showTooltip, hideTooltip } = useTooltip();

defineExpose({ showTooltip, hideTooltip });
</script>

<style lang="scss" scoped>
@use "@/styles/components/inventory-card-tooltip.scss";
</style>
