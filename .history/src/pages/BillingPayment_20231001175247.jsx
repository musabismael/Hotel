import React, { useState } from "react";

const BillingPayment = () => {
  const [invoices, setInvoices] = useState([
    { id: 1, invoiceNumber: "INV-001", amount: 200, status: "Paid" },
    { id: 2, invoiceNumber: "INV-002", amount: 150, status: "Paid" },
    { id: 3, invoiceNumber: "INV-003", amount: 250, status: "Pending" },
  ]);

  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [newPayment, setNewPayment] = useState({ amount: "", method: "" });
  const [transactionHistory, setTransactionHistory] = useState([]);

  const [filterStatus, setFilterStatus] = useState("All"); // Filter by 'All', 'Paid', 'Pending'

  const handleInvoiceClick = (invoice) => {
    setSelectedInvoice(invoice);
  };

  const handleAddPayment = () => {
    // Add a new payment to the selected invoice
    if (selectedInvoice) {
      const updatedInvoices = invoices.map((invoice) =>
        invoice.id === selectedInvoice.id
          ? { ...invoice, amount: invoice.amount - newPayment.amount }
          : invoice
      );
      setInvoices(updatedInvoices);
      setSelectedInvoice(null);
      // Clear the input fields
      setNewPayment({ amount: "", method: "" });

      // Add the payment to the transaction history
      setTransactionHistory([
        ...transactionHistory,
        {
          invoiceNumber: selectedInvoice.invoiceNumber,
          paymentAmount: newPayment.amount,
          paymentMethod: newPayment.method,
          date: new Date().toLocaleDateString(),
        },
      ]);
    }
  };

  const filteredInvoices =
    filterStatus === "All"
      ? invoices
      : invoices.filter((invoice) => invoice.status === filterStatus);

  return (
    <div className="container mx-auto p-4">
      <div className="my-4 p-4 border rounded-lg">
        <h2 className="text-lg text-white font-semibold mb-4">
          Billing and Payment
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg text-white font-semibold mb-2">Invoices</h3>
            <div className="mb-2">
              <label htmlFor="filterStatus" className="text-white">
                Filter by Status:
              </label>
              <select
                id="filterStatus"
                className="w-full border rounded-md py-2 px-3"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Paid">Paid</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
            <ul className="space-y-2">
              {filteredInvoices.map((invoice) => (
                <li
                  key={invoice.id}
                  className={`cursor-pointer ${
                    selectedInvoice && selectedInvoice.id === invoice.id
                      ? "bg-blue-200"
                      : "hover:bg-gray-100"
                  } p-2 rounded-lg`}
                  onClick={() => handleInvoiceClick(invoice)}
                >
                  <span className="text-gray-800 font-semibold">
                    {invoice.invoiceNumber} - ${invoice.amount}
                  </span>{" "}
                  ({invoice.status})
                </li>
              ))}
            </ul>
          </div>
          <div>
            {selectedInvoice && (
              <>
                <h3 className="text-lg text-white font-semibold mb-2">
                  Selected Invoice
                </h3>
                <div className="mb-2">
                  <p>Invoice Number: {selectedInvoice.invoiceNumber}</p>
                </div>
                <div className="mb-2">
                  <p>Amount: ${selectedInvoice.amount}</p>
                </div>
                <div className="mb-2">
                  <p>Status: {selectedInvoice.status}</p>
                </div>
                <h3 className="text-lg text-white font-semibold mt-4 mb-2">
                  Add Payment
                </h3>
                <div className="mb-2">
                  <input
                    type="number"
                    placeholder="Payment Amount"
                    className="w-full border rounded-md py-2 px-3"
                    value={newPayment.amount}
                    onChange={(e) =>
                      setNewPayment({ ...newPayment, amount: e.target.value })
                    }
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Payment Method"
                    className="w-full border rounded-md py-2 px-3"
                    value={newPayment.method}
                    onChange={(e) =>
                      setNewPayment({ ...newPayment, method: e.target.value })
                    }
                  />
                </div>
                <button
                  type="button"
                  className="bg-green-500 text-white py-2 px-4 rounded-md"
                  onClick={handleAddPayment}
                >
                  Add Payment
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="my-4 p-4 border rounded-lg">
        <h3 className="text-lg text-white font-semibold mb-2">
          Transaction History
        </h3>
        <ul className="space-y-2">
          {transactionHistory.map((transaction, index) => (
            <li key={index} className="p-2 rounded-lg bg-gray-200">
              <span className="text-gray-800">
                Invoice: {transaction.invoiceNumber} - $
                {transaction.paymentAmount}
              </span>{" "}
              ({transaction.date})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BillingPayment;
