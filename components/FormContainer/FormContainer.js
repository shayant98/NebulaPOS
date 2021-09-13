import React from "react";

const FormContainer = ({ children, onSubmit = () => {}, buttonTitle, method, action }) => {
  return (
    <form method={method} action={action} onSubmit={() => onSubmit()}>
      {children}
      <button
        type="submit"
        className=" bg-black ring-2 hover:ring-4 ring-offset-2 ring-black border  border-transparent  py-3 px-5 mt-4 ml-auto text-white font-semibold rounded-lg hover:shadow-lg   transition duration-3000 cursor-pointer"
      >
        {buttonTitle}
      </button>
    </form>
  );
};

export default FormContainer;
