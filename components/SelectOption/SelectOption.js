import { Listbox } from "@headlessui/react";
import { AiOutlineCheck } from "react-icons/ai";

const SelectOption = ({ value, selectedValue, index, label }) => {
  return (
    <Listbox.Option className={`px-2 py-2 text-black ${value === selectedValue ? "bg-green-500 bg-opacity-25" : ""}`} key={index} value={value}>
      <span className="flex items-center">
        {value === selectedValue ? <AiOutlineCheck className="mr-4 text-green-500 " size={16} /> : <div className="mr-8"></div>}
        {label}
      </span>
    </Listbox.Option>
  );
};

export default SelectOption;
