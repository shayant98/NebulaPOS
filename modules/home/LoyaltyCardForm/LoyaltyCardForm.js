import { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsCreditCard } from "react-icons/bs";
import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";
import Input from "../../../components/input/Input";
import { useReceipt } from "../../../context/ReceiptContext";
import { addCreditToCard, getCustomerByCard } from "../../../services/customerService";

function LoyaltyCardForm() {
  const {
    receipt: { setDiscount, setDiscountType, calculateTotal, subTotal, total },
  } = useReceipt();
  const [cardNumber, setCardNumber] = useState("");

  const { data, isLoading, refetch, remove } = useQuery(["cardNumber", cardNumber], getCustomerByCard, { enabled: false });

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
      { credit: total * 0.1, number: cardNumber },
      {
        onSuccess: (data) => {
          refetch();
        },
      }
    );
  };

  const handleCashout = () => {
    setDiscount(30);
    setDiscountType("loyalty");
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
      <button
        onClick={handleSubmit}
        className=" bg-black ring-2 hover:ring-4 ring-offset-2 ring-black border  border-transparent  py-3 px-5 mt-4 ml-auto text-white font-semibold rounded-lg hover:shadow-lg   transition duration-3000 cursor-pointer"
      >
        <div className="flex space-x-4">
          <span>Check</span>
        </div>
      </button>

      {isLoading == false && data ? (
        <div className="bg-gray-700 p-5 mt-10 rounded-xl shadow flex gap-4">
          <div>
            <div className="bg-green-400 p-10"></div>
          </div>
          <div>
            <h2 className="text-4xl font-extrabold">
              {data.name} {data.surname}
            </h2>
            <h2 className="text-xl  flex mt-4 gap">
              <AiOutlineCalendar size={24} /> {data.birthday}
            </h2>
            <h2 className=" font-extrabold flex mt-4 gap">Credit: ${data.loyalty_credit}</h2>
            <div className="mt-4">
              <button
                onClick={handleTopUp}
                className=" bg-black ring-2 hover:ring-4 ring-offset-2 ring-black border  border-transparent  py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg   transition duration-3000 cursor-pointer"
              >
                Top-Up
              </button>
              <button
                onClick={handleCashout}
                className=" bg-black ring-2 hover:ring-4 ring-offset-2 ring-black border  border-transparent  py-3 px-5 ml-3 text-white font-semibold rounded-lg hover:shadow-lg   transition duration-3000 cursor-pointer"
              >
                Cash Out
              </button>
            </div>
          </div>
        </div>
      ) : (
        "Loading"
      )}
    </div>
  );
}

export default LoyaltyCardForm;
