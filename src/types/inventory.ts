export type InventoryType = "armor" | "weapon" | "misc";

export interface InventoryItem {
  id: string;
  type: InventoryType;
  name: string;
  imageUrl: string;
  count?: number;
  cooldown?: number;
  charges?: number;
  maxCharges?: number;
}
