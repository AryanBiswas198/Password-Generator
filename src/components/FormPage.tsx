import React from "react";
import "../App.css";

interface Props {
  passwordLength: number;
  isUppercase: boolean;
  isLowercase: boolean;
  isNumber: boolean;
  isSymbol: boolean;
  color: string;
  handlePasswordLengthChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheckboxChange: (checkboxNumber: number) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const FormPage = ({
  passwordLength,
  isUppercase,
  isLowercase,
  isNumber,
  isSymbol,
  color,
  handlePasswordLengthChange,
  handleCheckboxChange,
  handleSubmit,
}: Props) => {
  return (
    <div className="flex flex-col md:h-[30em] w-full bg-dk-violet rounded-xl p-8 border-b-8 border-lt-violet2 text-white">
      <form onSubmit={handleSubmit}>
        {/* Password Length */}
        <div className="flex justify-between items-center text-white pb-5 font-semibold tracking-wider">
          <h3 className="text-xl">Password Length</h3>
          <p className="text-vb-yellow text-xl">{passwordLength}</p>
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
            className="slider"
          />
        </div>

        {/* Four Checkboxes */}
        <div className="flex flex-col ">
          <div className="flex gap-x-4 check">
            <input
              type="checkbox"
              id="uppercase"
              checked={isUppercase}
              onChange={() => handleCheckboxChange(1)}
            />
            <label htmlFor="uppercase">Includes UpperCase Letters</label>
          </div>

          <div className="flex gap-x-4 check">
            <input
              type="checkbox"
              id="lowercase"
              checked={isLowercase}
              onChange={() => handleCheckboxChange(2)}
            />
            <label htmlFor="lowercase">Includes LowerCase Letters</label>
          </div>

          <div className="flex gap-x-4 check">
            <input
              type="checkbox"
              id="numbers"
              checked={isNumber}
              onChange={() => handleCheckboxChange(3)}
            />
            <label htmlFor="numbers">Includes Numbers</label>
          </div>

          <div className="flex gap-x-4 check">
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
        <div className="flex justify-between items-center mb-3 mt-5">
          <p className="text-xl tracking-wider">Strength</p>
          <div
            className="p-2.5 rounded-full"
            style={{ backgroundColor: color }}
          ></div>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full md:w-[calc(100%-2rem)] my-5 py-2.5 text-xl text-vb-yellow font-semibold tracking-wide bg-vb-violet rounded-xl border-b-4 border-vb-yellow text-center uppercase"
        >
          Generate Password
        </button>
      </form>
    </div>
  );
};

export default FormPage;
