import React from "react";
import InputMask from "react-input-mask";
const Input = ({ placeholder, type = "text", title, icon, onChange, onKeyPress, value, name, varient = "", mask = "" }) => {
  return (
    <div className="">
      <label className="">{title}</label>
      <div className="flex bg-gray-100 text-black p-2 w-full space-x-4 rounded-lg mt-2">
        {icon}
        {varient === "" ? (
          <input name={name} className="bg-gray-100 outline-none w-full" type={type} placeholder={placeholder} onChange={onChange} onKeyUp={onKeyPress} value={value} />
        ) : (
          varient === "masked" && mask !== "" && <InputMask className="bg-gray-100 outline-none w-full" mask={mask} value={value} onChange={onChange} />
        )}
      </div>
    </div>
  );
};

export default Input;
