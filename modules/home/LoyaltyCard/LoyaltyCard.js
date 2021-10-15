import { isToday } from "date-fns";
import { useEffect, useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";

const LoyaltyCard = ({ customer, handleTopUp, handleCashout }) => {
  const [showTopUp, setShowTopUp] = useState(true);
  const [showCashout, setShowCashout] = useState(true);

  useEffect(() => {
    customer.CreditLog.forEach((log) => {
      if (isToday(new Date(log.createdAt))) {
        if (log.type === "ADD") {
          setShowTopUp(false);
        }
        if (log.type === "SUBTRACT") {
          setShowCashout(false);
        }
      }
    });
  }, [customer]);
  return (
    <div className="bg-gray-700 p-5 mt-10 rounded-xl shadow flex gap-4">
      <div></div>
      <div>
        <h2 className="text-4xl font-extrabold">
          {customer.name} {customer.surname}
        </h2>
        <h2 className="text-xl  flex mt-4 gap-2">
          <AiOutlineCalendar size={24} /> <span>{new Date(customer.birthday).toLocaleDateString()}</span>
        </h2>
        <h2 className=" font-extrabold  mt-4 ">Credit: ${customer.loyalty_credit}</h2>
        <div className="mt-4 flex gap-4">
          {showTopUp && (
            <button onClick={handleTopUp} className="text-green-400   hover:text-green-900 rounded transition duration-200">
              Top-Up
            </button>
          )}
          {showCashout && (
            <button onClick={handleCashout} className="text-green-400 hover:text-green-900 rounded transition duration-200">
              Cash Out
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoyaltyCard;
