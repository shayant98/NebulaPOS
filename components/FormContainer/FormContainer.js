import React from "react";

const FormContainer = ({ children, onSubmit }) => {
  return (
    <form className=" ">
      {children}
      <div class=" bg-gray-800 w-min py-3 px-5 mt-4 ml-auto text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
        <span>Inloggen</span>
      </div>
    </form>
  );
};

export default FormContainer;
