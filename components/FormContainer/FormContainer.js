import React from "react";

const FormContainer = ({ children, onSubmit }) => {
  return (
    <form onSubmit={() => onSubmit()}>
      {children}
      <button type="submit" className=" bg-gray-800 w-min py-3 px-5 mt-4 ml-auto text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
        <span>Inloggen</span>
      </button>
    </form>
  );
};

export default FormContainer;
