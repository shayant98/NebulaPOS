import Button from "@components/Button/Button";
import React from "react";

const FormContainer = ({ children, onSubmit, buttonTitle, method, action, buttonType }: CFormContainer) => {
  return (
    <form method={method} action={action} onSubmit={() => onSubmit()}>
      {children}
      <div className="mt-4">
        <Button type={buttonType}><span>{buttonTitle}</span></Button>
      </div>
    </form>
  );
};

interface CFormContainer {
  children: JSX.Element[]
  buttonTitle: string
  buttonType: "submit" | "button"
  method: string
  action?: string
    onSubmit: Function

}

export default FormContainer;
