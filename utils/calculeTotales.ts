import { Invoice, Totals } from "@/type";

export function calculateTotals(invoice: Invoice): Totals {
  const ht = invoice.lines.reduce((acc, { quantity, unitPrice }) =>
    acc + quantity * unitPrice, 0);
  const vat = invoice.vatActive ? ht * (invoice.vatRate / 100) : 0;
  return {
    totalHT: ht,
    totalVAT: vat,
    totalTTC: ht + vat
  };
}
