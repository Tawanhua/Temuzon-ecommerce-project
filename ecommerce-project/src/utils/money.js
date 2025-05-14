export function formatMoney(amountCents) {
  return (amountCents.priceCents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
