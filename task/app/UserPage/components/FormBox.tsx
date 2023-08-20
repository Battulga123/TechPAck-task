import React from "react";

interface FormBoxProps {
  children: React.ReactNode;
}

const FormBox: React.FC<FormBoxProps> = ({ children }) => {
  return (
    <div className="bg-white rounded-3xl h-fit text-gray-800 p-5">
      {children}
    </div>
  );
};

export default FormBox;
