import React from "react";
import Title from "../Title/Title";

const FormContainer = ({ children, onSubmit, title, ...props }) => {
  return (
    <form className="space-y-6" {...props}>
      <Title>{title}</Title>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {children}
      </div>
    </form>
  );
};

export default FormContainer;
