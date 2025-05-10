import { calculateTotals } from "../utils/calculeTotales";

// Tests unitaires de la fonction calculateTotals
describe("calculateTotals", () => {

  // Test avec TVA activée
  it("calcule correctement les totaux avec TVA activée", () => {
    const invoice = {
      vatActive: true,
      vatRate: 20,
      lines: [
        { quantity: 2, unitPrice: 50 }, // 100
        { quantity: 1, unitPrice: 100 } // 100
      ]
    } as any;

    const totals = calculateTotals(invoice);

    expect(totals.totalHT).toBe(200);   // Total HT
    expect(totals.totalVAT).toBe(40);   // TVA (20% de 200)
    expect(totals.totalTTC).toBe(240);  // TTC = HT + TVA
  });

  // Test avec TVA désactivée
  it("calcule correctement les totaux sans TVA", () => {
    const invoice = {
      vatActive: false,
      vatRate: 20, // ignoré
      lines: [
        { quantity: 3, unitPrice: 30 } // 90
      ]
    } as any;

    const totals = calculateTotals(invoice);

    expect(totals.totalHT).toBe(90);
    expect(totals.totalVAT).toBe(0);    // Pas de TVA
    expect(totals.totalTTC).toBe(90);   // TTC = HT
  });

});
