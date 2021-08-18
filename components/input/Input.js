import React from "react";

const Input = ({ placeholder, type = "text", title }) => {
  return (
    <div className="mt-5">
      <label className="p-4 ">{title}</label>
      <div class="flex bg-gray-100 p-4 w-full space-x-4 rounded-lg mt-2">
        <input class="bg-gray-100 outline-none w-full" type={type} placeholder={placeholder} />
      </div>
    </div>
  );
};

export default Input;
