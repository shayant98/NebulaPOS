import Card from "../../../components/Card/Card";

const Giftcard = ({ card, onClick }) => {
  return (
    <div onClick={(e) => onClick(card.value)} className="h-32 cursor-pointer hover:scale-105 transition duration-150">
      <Card>$ {card.value}</Card>
    </div>
  );
};

export default Giftcard;
