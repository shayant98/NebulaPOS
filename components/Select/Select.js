import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { AiOutlineCaretDown, AiOutlineCheck } from "react-icons/ai";
import SelectOption from "../SelectOption/SelectOption";

const Select = ({ selectedValue, setSelectedValue, currentlySelectedTitle, SelectOptions }) => {
  return (
    <Listbox value={selectedValue} onChange={setSelectedValue}>
      <Listbox.Button className="flex w-full justify-between py-2 px-3   text-left bg-white text-black rounded-lg shadow-md">
        <span className="block truncate">{currentlySelectedTitle}</span>
        <AiOutlineCaretDown className=" text-gray-700 " size={24} />
      </Listbox.Button>
      <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
        <Listbox.Options className=" w-full cursor-pointer mt-1 overflow-auto text-base bg-white text-black rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {SelectOptions}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
};

export default Select;
