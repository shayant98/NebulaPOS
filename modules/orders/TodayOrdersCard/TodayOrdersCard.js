import { useEffect, useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import Card from "../../../components/Card/Card.js";
function TodayOrdersCard({ todayOrders, yesterdayOrders }) {
  const [procent, setProcent] = useState(0);
  useEffect(() => {
    if (todayOrders >= yesterdayOrders) {
      setProcent((todayOrders / yesterdayOrders) * 100);
    } else {
      setProcent((yesterdayOrders / todayOrders) * 100);
    }
  }, [todayOrders, yesterdayOrders, setProcent]);

  return (
    <div>
      <Card>
        <h3>Orders</h3>
        <p className="text-6xl mt-5">{todayOrders}</p>
        <p className="mt-5 flex">
          {todayOrders >= yesterdayOrders ? <AiFillCaretUp size={24} className="text-green-500" /> : <AiFillCaretDown size={24} className="text-red-500" />}
          {procent}% {todayOrders >= yesterdayOrders ? "Increase" : "Decrease"}
        </p>
      </Card>
    </div>
  );
}

export default TodayOrdersCard;
