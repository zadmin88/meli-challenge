export function formatCurrency(value, currency) {
  // const country =
  //   currency === "COP" ? "es-CO" : currency === "AUD" ? "en-AU" : undefined;
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    minimumFractionDigits: 0,
    currency: currency,
  }).format(value);
}
