import Giftcard from "../Giftcard/Giftcard";

const CardList = ({ onClick, giftcards }) => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-10 ">
      {giftcards.map((card) => (
        <Giftcard card={card} onClick={onClick} />
      ))}
    </div>
  );
};

export default CardList;
