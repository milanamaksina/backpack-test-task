<template>
  <div class="inventory-filter">
    <button
      v-for="filter in filters"
      :key="filter.id"
      class="filter-btn"
      :class="{ active: filter.id === modelValue }"
      @click="$emit('update:modelValue', filter.id)"
    >
      <Icon :name="filter.id" class="icon" />
    </button>
  </div>
</template>

<script setup lang="ts">
import Icon from "@/components/Icon.vue";

interface Props {
  filters: { id: string; label: string }[];
  modelValue: string;
}
interface Emits {
  (e: "update:modelValue", value: string): void;
}
defineProps<Props>();
defineEmits<Emits>();
</script>

<style lang="scss" scoped>
@use "@/styles/components/inventory-filter.scss";
</style>
