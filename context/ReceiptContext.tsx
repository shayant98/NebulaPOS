import { createContext, useContext, useState } from "react";

export const ReceiptContext = createContext(null);
const ReceiptItemRemoveContext = createContext(null);
const ReceiptClearContext = createContext(null);
const ReceiptItemAddContext = createContext(null);

export function ReceiptProvider({ children }) {
  const [receiptItems, setReceiptItems] = useState<IReceiptItem[]>([]);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalWithoutDiscount, setTotalWithoutDiscount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [discountType, setDiscountType] = useState("");
  const [tax, setTax] = useState(total * 0.08);



  const removeItem = (id: number) => {
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

  const addItem = (item: IReceiptItem) => {
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
      item.totalPrice = (item.qty * item.price).toFixed(2);
      return item;
    });
  };

  const calculateSubtotal = (receiptItems) => {
    const total = receiptItems.reduce((prev, cur) => {
      return parseFloat(prev) + parseFloat(cur.totalPrice);
    }, 0);
    setSubTotal(total);
    return total;
  };

  const calculateTotal = (subTotal) => {
    if (subTotal > 0) {
      setTotal(parseFloat((subTotal + tax - discount).toFixed(2)));
      setTotalWithoutDiscount(subTotal);
    } else {
      setTotal(0);
    }
  };

  const clearReceipt = () => {
    setReceiptItems([]);
    setSubTotal(0);
    setTotal(0);
  };

  return (
    <ReceiptContext.Provider value={{ receiptItems, subTotal, total, tax, discount, setDiscount, discountType, setDiscountType, calculateTotal, totalWithoutDiscount }}>
      <ReceiptItemRemoveContext.Provider value={removeItem}>
        <ReceiptClearContext.Provider value={clearReceipt}>
          <ReceiptItemAddContext.Provider value={addItem}>{children}</ReceiptItemAddContext.Provider>
        </ReceiptClearContext.Provider>
      </ReceiptItemRemoveContext.Provider>
    </ReceiptContext.Provider>
  );
}

export const useReceipt = () => {
  return {
    receipt: useContext(ReceiptContext),
    addItem: useContext(ReceiptItemAddContext),
    removeItem: useContext(ReceiptItemRemoveContext),
    clearReceipt: useContext(ReceiptClearContext),
  };
};
