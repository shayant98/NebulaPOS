import { AiOutlineBarcode } from "react-icons/ai";
import Input from "../../../components/input/Input";

const RefundForm = ({ orderNr, setOrderNr, handleSubmit }) => {
  return (
    <form>
      <Input icon={<AiOutlineBarcode size={24} />} placeholder="Order #" onChange={(e) => setOrderNr(e.target.value)} value={orderNr} />
      <button
        type="button"
        onClick={handleSubmit}
        className=" bg-black ring-2 hover:ring-4 ring-offset-2 ring-black border  border-transparent  py-3 px-5 mt-4 ml-auto text-white font-semibold rounded-lg hover:shadow-lg   transition duration-3000 cursor-pointer"
      >
        Find
      </button>
    </form>
  );
};

export default RefundForm;
