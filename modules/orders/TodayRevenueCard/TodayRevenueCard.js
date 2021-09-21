import { useEffect, useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import Card from "../../../components/Card/Card.js";

function TodayRevenueCard({ todayRevenue, yesterdayRevenue }) {
  const [procent, setProcent] = useState(0);
  useEffect(() => {
    if (todayRevenue >= yesterdayRevenue) {
      setProcent((todayRevenue / yesterdayRevenue) * 100);
    } else {
      setProcent((yesterdayRevenue / todayRevenue) * 100);
    }
  }, [todayRevenue, yesterdayRevenue, setProcent]);
  return (
    <Card>
      <h3>Revenue</h3>
      <p className="text-6xl mt-5">${todayRevenue}</p>
      <p className="mt-5 flex">
        {todayRevenue >= yesterdayRevenue ? <AiFillCaretUp size={24} className="text-green-500" /> : <AiFillCaretDown size={24} className="text-red-500" />}
        {procent}% {todayRevenue >= yesterdayRevenue ? "Increase" : "Decrease"}
      </p>
    </Card>
  );
}

export default TodayRevenueCard;
