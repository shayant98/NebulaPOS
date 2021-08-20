import { createContext, useContext, useState } from "react";

export const ReceiptContext = createContext();
const ReceiptItemRemoveContext = createContext();
const ReceiptItemAddContext = createContext();

export function ReceiptProvider({ children }) {
  const [receiptItems, setReceiptItems] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const tax = 30;
  const removeItem = (id) => {
    const newReceiptItems = recalulateItemTotal(
      receiptItems
        .map((receiptItem) => {
          receiptItem.id === id && (receiptItem.qty = receiptItem.qty - 1);

          return receiptItem;
        })
        .filter((receiptItems) => receiptItems.qty >= 1)
    );
    const subtot = calculateSubtotal(newReceiptItems);
    calculateTotal(subtot);
    setReceiptItems([...newReceiptItems]);
  };

  const addItem = (item) => {
    let newReceiptItems = [];
    if (receiptItems.filter((receiptItem) => item.id === receiptItem.id).length > 0) {
      newReceiptItems = recalulateItemTotal(
        receiptItems.map((receiptItem) => {
          if (receiptItem.id === item.id) {
            receiptItem.qty = receiptItem.qty + 1;
          }
          return receiptItem;
        })
      );
    } else {
      newReceiptItems = recalulateItemTotal([...receiptItems, { id: item.id, name: item.name, price: item.price, qty: 1 }]);
    }
    const subtot = calculateSubtotal(newReceiptItems);
    calculateTotal(subtot);
    setReceiptItems([...newReceiptItems]);
  };

  const recalulateItemTotal = (newReceipt) => {
    return newReceipt.map((item) => {
      item.totalPrice = item.qty * item.price;
      return item;
    });
  };

  const calculateSubtotal = (receiptItems) => {
    const total = receiptItems.reduce((prev, cur, index) => {
      return prev + cur.totalPrice;
    }, 0);
    setSubTotal(total);
    return total;
  };

  const calculateTotal = (subTotal) => {
    setTotal(subTotal + tax);
  };

  return (
    <ReceiptContext.Provider value={{ receiptItems, subTotal, total, tax }}>
      <ReceiptItemRemoveContext.Provider value={removeItem}>
        <ReceiptItemAddContext.Provider value={addItem}>{children}</ReceiptItemAddContext.Provider>
      </ReceiptItemRemoveContext.Provider>
    </ReceiptContext.Provider>
  );
}

export const useReceipt = () => {
  return { receipt: useContext(ReceiptContext), addItem: useContext(ReceiptItemAddContext), removeItem: useContext(ReceiptItemRemoveContext) };
};