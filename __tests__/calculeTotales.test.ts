import { calculateTotals } from "../utils/calculeTotales";

describe("calculateTotals", () => {
  it("calcule correctement les totaux avec TVA activée", () => {
    const invoice = {
      vatActive: true,
      vatRate: 20,
      lines: [
        { quantity: 2, unitPrice: 50 },
        { quantity: 1, unitPrice: 100 }
      ]
    } as any;

    const totals = calculateTotals(invoice);

    expect(totals.totalHT).toBe(200);
    expect(totals.totalVAT).toBe(40);
    expect(totals.totalTTC).toBe(240);
  });

  it("calcule correctement les totaux sans TVA", () => {
    const invoice = {
      vatActive: false,
      vatRate: 20,
      lines: [
        { quantity: 3, unitPrice: 30 }
      ]
    } as any;

    const totals = calculateTotals(invoice);

    expect(totals.totalHT).toBe(90);
    expect(totals.totalVAT).toBe(0);
    expect(totals.totalTTC).toBe(90);
  });
});
