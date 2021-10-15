import { useEffect, useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import Card from "../../../components/Card/Card.js";
function TodayTotalDiscountCard({ total }) {
  return (
    <div>
      <Card>
        <h3>Orders</h3>
        <p className="text-6xl mt-5">${total}</p>
      </Card>
    </div>
  );
}

export default TodayTotalDiscountCard;
