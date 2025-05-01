import { render, fireEvent } from '@testing-library/react';
import VATControl from '../app/components/VATControl';

const mockInvoice = {
  id: 'test-id',
  name: 'Facture test',
  vatActive: false,
  vatRate: 20,
  lines: [],
  issuerName: '',
  issuerAddress: '',
  clientName: '',
  clientAddress: '',
  invoiceDate: '',
  dueDate: '',
  userId: 'user-1',
  status: 1
};

const setInvoice = jest.fn();

describe('VATControl', () => {
  test('affiche le toggle TVA', () => {
    const { getByRole } = render(<VATControl invoice={mockInvoice} setInvoice={setInvoice} />);
    const toggle = getByRole('checkbox');
    expect(toggle).toBeInTheDocument();
  });

  test('active la TVA', () => {
    const { getByRole } = render(<VATControl invoice={mockInvoice} setInvoice={setInvoice} />);
    const toggle = getByRole('checkbox');
    fireEvent.click(toggle);
    expect(setInvoice).toHaveBeenCalledWith({
      ...mockInvoice,
      vatActive: true,
      vatRate: 20
    });
  });

  test('modifie le taux de TVA', () => {
    const invoiceWithVat = { ...mockInvoice, vatActive: true };
    const { getByDisplayValue } = render(<VATControl invoice={invoiceWithVat} setInvoice={setInvoice} />);
    const input = getByDisplayValue('20');
    fireEvent.change(input, { target: { value: '10' } });
    expect(setInvoice).toHaveBeenCalledWith({
      ...invoiceWithVat,
      vatRate: 10
    });
  });
});
