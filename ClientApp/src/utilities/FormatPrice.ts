export function formatPrice(priceInCents: number): string {
  const dollars = Math.floor(priceInCents / 100);
  const cents = priceInCents % 100;
  return `$${dollars}.${cents.toString().padStart(2, '0')}`;
}