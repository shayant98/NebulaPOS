import { useEffect, useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import Card from "../../../components/Card/Card.js";

function TodayRevenueCard({ todayRevenue = 0, yesterdayRevenue = 0 }) {
  const [procent, setProcent] = useState(0);
  useEffect(() => {
    if (todayRevenue >= yesterdayRevenue) {
      setProcent(((todayRevenue / yesterdayRevenue) * 100).toFixed(2));
    } else {
      setProcent(((yesterdayRevenue / todayRevenue) * 100).toFixed(2));
    }
    console.log(yesterdayRevenue);
  }, [todayRevenue, yesterdayRevenue, setProcent]);
  return (
    <div>
      <Card>
        <h3>Revenue</h3>
        <p className="text-6xl mt-5">${todayRevenue}</p>
        <p className="mt-5 flex">
          {todayRevenue >= yesterdayRevenue ? <AiFillCaretUp size={24} className="text-green-500" /> : <AiFillCaretDown size={24} className="text-red-500" />}
          {procent}% {todayRevenue >= yesterdayRevenue ? "Increase" : "Decrease"}
        </p>
      </Card>
    </div>
  );
}

export default TodayRevenueCard;
