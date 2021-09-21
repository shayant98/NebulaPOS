import { useState } from "react";
import { BsCreditCard } from "react-icons/bs";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Input from "../../../components/input/Input";
import { getCustomerByCard } from "../../../services/customerService";

function LoyaltyCard() {
  const [cardNumber, setCardNumber] = useState("");

  const { data, isLoading, refetch, remove } = useQuery(["cardNumber", cardNumber], getCustomerByCard);

  const handleSubmit = () => {
    if (cardNumber === "" || cardNumber.length < 11) {
      toast.error("Please enter a valid card number");
      return;
    }
    refetch();
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
    </div>
  );
}

export default LoyaltyCard;
