import { createRouter, createWebHistory } from "vue-router";
import InventoryPage from "@/views/InventoryPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Inventory",
      component: InventoryPage,
      beforeEnter: (to) => {
        if (!to.query.case || isNaN(Number(to.query.case))) {
          return {
            ...to,
            query: { ...to.query, case: "1" },
            replace: true,
          };
        }
        return true;
      },
    },
  ],
});

export default router;
