import { Invoice } from "@/type";
import React from "react";

interface Props {
  invoice: Invoice;
  setInvoice: (invoice: Invoice) => void;
}



const VATControl: React.FC<Props> = ({ invoice, setInvoice }) => {
  const handleVatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvoice({
      ...invoice,
      vatActive: e.target.checked,
      vatRate: e.target.checked ? invoice.vatRate : 0,
    });
  };

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
    status: 1
  };
  

  const handleVatRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvoice({
      ...invoice,
      vatRate: parseFloat(e.target.value),
    });
  };

  return (
    <div className="flex items-center">
      <label htmlFor="toggle-tva" className="block text-sm font-bold">
        TVA (%)
      </label>
      <input
        id="toggle-tva"
        type="checkbox"
        className="toggle toggle-sm ml-2"
        onChange={handleVatChange}
        checked={invoice.vatActive}
      />
      {invoice.vatActive && (
        <input
          type="number"
          value={invoice.vatRate}
          className="input input-sm input-bordered w-16 ml-2"
          onChange={handleVatRateChange}
          min={0}
        />
      )}
    </div>
  );
};

export default VATControl;
