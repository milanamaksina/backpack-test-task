const BASE_URL =
  "https://us-central1-seven-seven-bit-inhouse-helper.cloudfunctions.net";
const INVENTORY_ENDPOINT = "/vueDevTestTask-getInventoryState";

export async function fetchInventory(caseNumber: number) {
  const response = await fetch(
    `${BASE_URL}${INVENTORY_ENDPOINT}?case=${caseNumber}`
  );

  if (!response.ok) {
    throw new Error("Failed to load inventory");
  }

  return response.json();
}
