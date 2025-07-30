import { ref } from "vue";
import { fetchInventory } from "@/api/inventory";
import type { InventoryItem } from "@/types/inventory";

export function useInventory() {
  const inventory = ref<InventoryItem[]>([]);
  const isLoading = ref(false);
  const errorMessage = ref<string | null>(null);

  const loadInventory = async (caseNumber: number) => {
    try {
      isLoading.value = true;
      const data = await fetchInventory(caseNumber);
      inventory.value = data.inventory;
    } catch (error) {
      errorMessage.value = `Error loading inventory ${error}`;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    inventory,
    isLoading,
    errorMessage,
    loadInventory,
  };
}
