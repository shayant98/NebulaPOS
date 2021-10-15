import { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsCreditCard } from "react-icons/bs";
import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";
import Input from "../../../components/input/Input";
import { useReceipt } from "../../../context/ReceiptContext";
import { addCreditToCard, getCustomerByCard } from "../../../services/customerService";
import LoyaltyCard from "../LoyaltyCard/LoyaltyCard";

function LoyaltyCardForm() {
  const {
    receipt: { discount, setDiscount, setDiscountType, calculateTotal, subTotal, total },
  } = useReceipt();
  const [cardNumber, setCardNumber] = useState("");

  const { data, isLoading, refetch, isFetched, isFetching } = useQuery(["cardNumber", cardNumber], getCustomerByCard, { enabled: false });
  const addCreditMut = useMutation(addCreditToCard);

  const handleSubmit = () => {
    if (cardNumber === "" || cardNumber.length < 11) {
      toast.error("Please enter a valid card number");
      return;
    }
    refetch();
  };

  const handleTopUp = () => {
    addCreditMut.mutate(
      { total: total, number: cardNumber },
      {
        onSuccess: (data) => {
          refetch();
        },
      }
    );
  };

  const handleCashout = (credit) => {
    if (credit > 150) {
      setDiscount(150);
    } else {
      setDiscount(credit);
    }

    if (discount >= subTotal) {
      setDiscount(subTotal);
    }

    setDiscountType("CREDIT");
    calculateTotal(subTotal);
  };

  return (
    <div className="mt-10">
      <div>
        <h2 className="text-2xl font-bold mb-2">Loyalty Card?</h2>
        <p className="w-full break-words">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus augue, vehicula in leo vel, ornare venenatis lacus. Praesent diam ipsum, imperdiet a lobortis eget,
          porttitor non justo.
        </p>
      </div>
      <Input
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        varient="masked"
        mask="999-999-999"
        icon={<BsCreditCard className="text-gray-400" size={24} />}
        placeholder="###-####-####"
        type="number"
      />
      <button onClick={handleSubmit} className="text-white mt-4 p-3 bg-green-600  rounded">
        <div className="flex space-x-4">
          <span>Search</span>
        </div>
      </button>
      {/* {isLoading == false ? isFetched ? <LoyaltyCard handleCashout={handleCashout} handleTopUp={handleTopUp} /> : "Nothinf found" : "Loading"} */}
      {isFetched && data ? (
        <LoyaltyCard customer={data} handleCashout={handleCashout} handleTopUp={handleTopUp} discount={discount} />
      ) : isFetched && isLoading ? (
        "Loading"
      ) : isFetched && !data ? (
        "Nothing"
      ) : (
        ""
      )}
    </div>
  );
}

export default LoyaltyCardForm;
