import React from "react";
import { FaRegCopy } from "react-icons/fa6";
import FormPage from "./FormPage";
import {toast} from "react-hot-toast";

interface Props{
    passwordLength: number;
    isUppercase: boolean;
    isLowercase: boolean;
    isNumber: boolean;
    isSymbol: boolean;
    color: string,
    generatedPassword: string;
    handlePasswordLengthChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleCheckboxChange: (checkboxNumber: number) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const MainPage = ({passwordLength, isUppercase, isLowercase, isNumber, isSymbol, color, generatedPassword, handlePasswordLengthChange, handleCheckboxChange, handleSubmit}: Props) => {

    const handleCopyPassword = () => {
        // Create a temporary input element
        const tempInput = document.createElement("input");
        tempInput.value = generatedPassword;
        document.body.appendChild(tempInput);
    
        // Select the text in the input element
        tempInput.select();
        tempInput.setSelectionRange(0, 99999); // For mobile devices
    
        // Copy the selected text to the clipboard
        document.execCommand("copy");
    
        // Remove the temporary input element
        document.body.removeChild(tempInput);
    
        toast.success("Password copied to clipboard!");
      };



  return (
    <div>
      {/* Input section */}
      <div className="flex flex-row items-center justify-center">
        <input
          readOnly
          type="text"
          className="border-2 rounded-xl"
          value={generatedPassword}
        />

        <FaRegCopy onClick={handleCopyPassword} />
      </div>

      {/* Main Form Section */}
      <FormPage 
        passwordLength={passwordLength}
        isUppercase={isUppercase}
        isLowercase={isLowercase}
        isNumber={isNumber}
        isSymbol={isSymbol}
        color={color}
        handlePasswordLengthChange={handlePasswordLengthChange}
        handleCheckboxChange={handleCheckboxChange}
        handleSubmit={handleSubmit} />
    </div>
  );
};

export default MainPage;
