export function formatMoney(amountCents) {
  return (amountCents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
