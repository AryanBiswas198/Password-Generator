import React from "react";
import { FaRegCopy } from "react-icons/fa6";
import FormPage from "./FormPage";
import { toast } from "react-hot-toast";

interface Props {
  passwordLength: number;
  isUppercase: boolean;
  isLowercase: boolean;
  isNumber: boolean;
  isSymbol: boolean;
  color: string;
  generatedPassword: string;
  handlePasswordLengthChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheckboxChange: (checkboxNumber: number) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const MainPage = ({
  passwordLength,
  isUppercase,
  isLowercase,
  isNumber,
  isSymbol,
  color,
  generatedPassword,
  handlePasswordLengthChange,
  handleCheckboxChange,
  handleSubmit,
}: Props) => {
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
      <div className="relative bg-dk-violet border-b-8 border-lt-violet2 rounded-xl my-4 py-1 flex flex-col sm:flex-row justify-center items-center gap-x-5">
        <input
          readOnly
          type="text"
          className="border-1 text-2xl sm:text-3xl w-full sm:w-[18em] rounded-3xl px-4 py-4 bg-transparent focus:outline-none focus:ring-0 text-vb-yellow font-semibold leading-8 tracking-wide opacity-95"
          value={generatedPassword}
        />

        <FaRegCopy
          onClick={handleCopyPassword}
          className="text-vb-cyan2 w-6 h-6 sm:w-8 sm:h-8 absolute right-0 mr-4 mt-4 sm:mt-0 cursor-pointer"
        />
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
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default MainPage;
