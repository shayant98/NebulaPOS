import React from "react";
import { DefaultEditor } from "react-simple-wysiwyg";
const Input = ({ placeholder, id, title, icon, onChange, value, name, varient = "", type = "text" }) => {
  return (
    <div className="">
      <label className="">{title}</label>
      <div className="flex bg-gray-100 text-black p-2 w-full space-x-4 rounded-lg mt-2">
        {icon}
        {varient === "" ? (
          <input id={id} name={name} className="bg-gray-100 outline-none w-full" type={type} placeholder={placeholder} onChange={onChange} value={value} />
        ) : (
          <DefaultEditor id={id} name={name} className="bg-gray-100 outline-none w-full h-64 overflow-scroll" onChange={onChange} value={value} />
        )}
      </div>
    </div>
  );
};

export default Input;
