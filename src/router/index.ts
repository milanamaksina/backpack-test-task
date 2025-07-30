import { createRouter, createWebHistory } from "vue-router";
import InventoryPage from "@/views/InventoryPage.vue";

const routes = [{ path: "/", name: "Inventory", component: InventoryPage }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
