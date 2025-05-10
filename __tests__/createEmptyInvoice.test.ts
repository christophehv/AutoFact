// Import de la fonction à tester
import { createEmptyInvoice } from '../app/actions';

// Mock de Prisma pour isoler la logique de test (pas de vraie base)
jest.mock('../lib/prisma', () => ({
  __esModule: true,
  default: {
    user: {
      // Simule un utilisateur existant
      findUnique: jest.fn().mockResolvedValue({ id: 'u1' })
    },
    invoice: {
      // Simule que l’ID de facture n’existe pas encore
      findUnique: jest.fn().mockResolvedValue(null),
      // Simule la création réussie d’une facture
      create: jest.fn().mockResolvedValue({
        id: 'generated-id',
        name: 'Facture test',
        issuerName: '',
        issuerAddress: '',
        clientName: '',
        clientAddress: '',
        invoiceDate: '',
        dueDate: '',
        vatActive: false,
        vatRate: 20,
        status: 1,
        lines: [],
        userId: 'u1'
      })
    }
  }
}));

// Test : vérifie que la création fonctionne et que les données par défaut sont bien définies
test('crée une facture vide avec les valeurs par défaut', async () => {
  // Appel de la fonction à tester
  await createEmptyInvoice('test@user.com', 'Facture test');

  // Vérifie que la méthode create de Prisma a été appelée avec les bonnes valeurs
  const prisma = (await import('../lib/prisma')).default;
  expect(prisma.invoice.create).toHaveBeenCalledWith(
    expect.objectContaining({
      data: expect.objectContaining({
        name: 'Facture test',
        vatActive: false,
        vatRate: 20
      })
    })
  );
});
