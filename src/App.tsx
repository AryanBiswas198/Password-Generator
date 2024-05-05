import React, { useState } from "react";
import "./App.css";
import { FaRegCopy } from "react-icons/fa6";

function App() {
  const [passwordLength, setPasswordLength] = useState<number>(10);
  const [isUppercase, setIsUppercase] = useState<boolean>(false);
  const [isLowercase, setIsLowercase] = useState<boolean>(false);
  const [isNumber, setIsNumber] = useState<boolean>(false);
  const [isSymbol, setIsSymbol] = useState<boolean>(false);

  const handlePasswordLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordLength(parseInt(e.target.value))
  }

  const handleCheckboxChange = (checkboxNumber: number) => {
    switch (checkboxNumber) {
      case 1:
        setIsUppercase(!isUppercase);
        break;
      case 2:
        setIsLowercase(!isLowercase);
        break;
      case 3:
        setIsNumber(!isNumber);
        break;
      case 4:
        setIsSymbol(!isSymbol);
        break;
      default:
        break;
    }
  };

  return (
    <div className="h-[100vh] w-[100vw] text-black flex flex-col justify-center items-center gap-y-5">
      {/* Title */}
      <h1>Password Generator</h1>

      {/* Input section */}
      <div className="flex flex-row items-center justify-center">
        <input type="text" className="border-2 rounded-xl" />

        <FaRegCopy />
      </div>

      {/* Main Form Section */}
      <form>
        {/* Password Length */}
        <div>
          <h3>Password Length</h3>
          <p>
            {passwordLength}
          </p>
        </div>

        {/* Input Slider */}
        <div>
          <input 
            type="range" 
            min="1" 
            max="20" 
            step="1" 
            value={passwordLength}
            onChange={handlePasswordLengthChange} />
        </div>

        {/* Four Checkboxes */}
        <div className="flex flex-col gap-y-3">
          <div className="flex gap-x-4">
            <input type="checkbox" id="uppercase" checked={isUppercase} onChange={() => handleCheckboxChange(1)}/>
            <label htmlFor="uppercase">Includes UpperCase Letters</label>
          </div>

          <div className="flex gap-x-4">
            <input type="checkbox" id="lowercase" checked={isLowercase} onChange={() => handleCheckboxChange(2)} />
            <label htmlFor="lowercase">Includes LowerCase Letters</label>
          </div>

          <div className="flex gap-x-4">
            <input type="checkbox" id="numbers" checked={isNumber} onChange={() => handleCheckboxChange(3)} />
            <label htmlFor="numbers">Includes Numbers</label>
          </div>

          <div className="flex gap-x-4">
            <input type="checkbox" id="symbols" checked={isSymbol} onChange={() => handleCheckboxChange(4)} />
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
}

export default App;
