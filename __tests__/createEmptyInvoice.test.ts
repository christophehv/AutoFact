import { createEmptyInvoice } from '../app/actions';

jest.mock('../lib/prisma', () => ({
  __esModule: true,
  default: {
    user: {
      findUnique: jest.fn().mockResolvedValue({ id: 'u1' })
    },
    invoice: {
      findUnique: jest.fn().mockResolvedValue(null), 
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

test('crée une facture vide avec les valeurs par défaut', async () => {
  await createEmptyInvoice('test@user.com', 'Facture test');

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
