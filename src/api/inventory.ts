export async function fetchInventory(caseNumber: number) {
  const response = await fetch(
    `https://us-central1-seven-seven-bit-inhouse-helper.cloudfunctions.net/vueDevTestTask-getInventoryState?case=${caseNumber}`
  );

  if (!response.ok) {
    throw new Error("Ошибка загрузки инвентаря");
  }

  return response.json();
}
