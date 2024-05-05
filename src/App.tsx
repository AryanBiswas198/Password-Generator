import React, { useState } from "react";
import "./App.css";
import MainPage from "./components/MainPage";

function App() {
  const [generatedPassword, setGeneratedPassword] = useState<string>("");
  const [passwordLength, setPasswordLength] = useState<number>(10);
  const [isUppercase, setIsUppercase] = useState<boolean>(true);
  const [isLowercase, setIsLowercase] = useState<boolean>(false);
  const [isNumber, setIsNumber] = useState<boolean>(false);
  const [isSymbol, setIsSymbol] = useState<boolean>(false);
  const [color, setColor] = useState<string>("");

  function calculatePasswordStrength(){
    let hasUpper = isUppercase;
    let hasLower = isLowercase;
    let hasNum = isNumber;
    let hasSym = isSymbol;
    let passwordLengthValid = passwordLength >= 8; // Password length >= 8
  
    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLengthValid) {
      return 100; // Strong password
    } else if ((hasLower || hasUpper) && (hasNum || hasSym) && passwordLength >= 6) {
      return 50; // Medium password
    } else {
      return 0; // Weak password
    }
  };

  function getColor(){
    const strength = calculatePasswordStrength();

    if(strength < 50){
      return "#f00";
    }
    else if(strength >= 50 && strength <= 75){
      return "#ff0";
    }
    else{
      return "#0f0";
    }
  }

  const generatePassword = (
    length: number,
    useUppercase: boolean,
    useLowercase: boolean,
    useNumber: boolean,
    useSymbol: boolean
  ) => {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+{}[]";

    let chars = "";

    if (useUppercase) {
      chars += uppercaseChars;
    }

    if (useLowercase) {
      chars += lowercaseChars;
    }

    if (useNumber) {
      chars += numberChars;
    }

    if (useSymbol) {
      chars += symbolChars;
    }

    let password = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }

    return password;
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newPassword = generatePassword(
      passwordLength,
      isUppercase,
      isLowercase,
      isNumber,
      isSymbol
    );
    setGeneratedPassword(newPassword);
    setColor(getColor());
  }

  const handlePasswordLengthChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordLength(parseInt(e.target.value));
  };

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
    <div className="min-h-screen w-[100%] flex flex-col gap-y-4 justify-center items-center bg-gradient-to-br from-purple-900 via-purple-700 to-purple-900">
      {/* Title */}
      <h1 className="text-3xl uppercase font-bold text-white tracking-wider">Password Generator</h1>

      <MainPage 
       passwordLength={passwordLength}
       isUppercase={isUppercase}
       isLowercase={isLowercase}
       isNumber={isNumber}
       isSymbol={isSymbol}
       color={color}
       generatedPassword={generatedPassword}
       handlePasswordLengthChange={handlePasswordLengthChange}
       handleCheckboxChange={handleCheckboxChange}
       handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
