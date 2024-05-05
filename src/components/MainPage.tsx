import React from "react";
import { FaRegCopy } from "react-icons/fa6";

interface Props{
    passwordLength: number;
    isUppercase: boolean;
    isLowercase: boolean;
    isNumber: boolean;
    isSymbol: boolean;
    generatedPassword: string;
    handlePasswordLengthChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleCheckboxChange: (checkboxNumber: number) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const MainPage = ({passwordLength, isUppercase, isLowercase, isNumber, isSymbol, generatedPassword, handlePasswordLengthChange, handleCheckboxChange, handleSubmit}: Props) => {
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

        <FaRegCopy />
      </div>

      {/* Main Form Section */}
      <form onSubmit={handleSubmit}>
        {/* Password Length */}
        <div>
          <h3>Password Length</h3>
          <p>{passwordLength}</p>
        </div>

        {/* Input Slider */}
        <div>
          <input
            type="range"
            min="1"
            max="20"
            step="1"
            value={passwordLength}
            onChange={handlePasswordLengthChange}
          />
        </div>

        {/* Four Checkboxes */}
        <div className="flex flex-col gap-y-3">
          <div className="flex gap-x-4">
            <input
              type="checkbox"
              id="uppercase"
              checked={isUppercase}
              onChange={() => handleCheckboxChange(1)}
            />
            <label htmlFor="uppercase">Includes UpperCase Letters</label>
          </div>

          <div className="flex gap-x-4">
            <input
              type="checkbox"
              id="lowercase"
              checked={isLowercase}
              onChange={() => handleCheckboxChange(2)}
            />
            <label htmlFor="lowercase">Includes LowerCase Letters</label>
          </div>

          <div className="flex gap-x-4">
            <input
              type="checkbox"
              id="numbers"
              checked={isNumber}
              onChange={() => handleCheckboxChange(3)}
            />
            <label htmlFor="numbers">Includes Numbers</label>
          </div>

          <div className="flex gap-x-4">
            <input
              type="checkbox"
              id="symbols"
              checked={isSymbol}
              onChange={() => handleCheckboxChange(4)}
            />
            <label htmlFor="symbols">Includes Symbols</label>
          </div>
        </div>

        {/* Strength section */}
        <div className="flex justify-between">
          <p>Strength</p>
          <div>0</div>
        </div>

        {/* Button */}
        <button type="submit">Generate Password</button>
      </form>
    </div>
  );
};

export default MainPage;
