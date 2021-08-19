import React from "react";

const Input = ({ placeholder, type = "text", title, register }) => {
  return (
    <div className="mt-5">
      <label className="p-4 ">{title}</label>
      <div className="flex bg-gray-100 p-4 w-full space-x-4 rounded-lg mt-2">
        <input className="bg-gray-100 outline-none w-full" type={type} placeholder={placeholder} ref={register} />
      </div>
    </div>
  );
};

export default Input;
