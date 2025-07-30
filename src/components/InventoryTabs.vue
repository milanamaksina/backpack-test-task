<template>
  <div class="tabs">
    <button class="backpack-tab">BACKPACK</button>
    <button class="nexus-tab">NEXUS</button>
    <button class="close-btn">
      <Icon name="close" class="close-icon" />
    </button>
  </div>
</template>

<script setup>
import Icon from "@/components/Icon.vue";
</script>

<style lang="scss" scoped>
@use "@/styles/components/inventory-tabs.scss";
</style>
