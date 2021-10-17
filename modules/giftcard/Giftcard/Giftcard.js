import { AiOutlineGift } from "react-icons/ai";
import Card from "../../../components/Card/Card";

const Giftcard = ({ card, onClick }) => {
  return (
    <div onClick={(e) => onClick(card.value)} className=" cursor-pointer hover:scale-105 transition duration-150">
      <Card>
        <span className="flex">
          <AiOutlineGift size={28} className="mb-10 mr-2" />
          <h2 className="text-2xl">Giftcard</h2>
        </span>
        <h2 className="text-6xl font-bold">$ {card.value}</h2>
      </Card>
    </div>
  );
};

export default Giftcard;
