import React, { useState } from "react";
import "./App.css";
import MainPage from "./components/MainPage";

function App() {
  const [generatedPassword, setGeneratedPassword] = useState<string>("");
  const [passwordLength, setPasswordLength] = useState<number>(10);
  const [isUppercase, setIsUppercase] = useState<boolean>(false);
  const [isLowercase, setIsLowercase] = useState<boolean>(false);
  const [isNumber, setIsNumber] = useState<boolean>(false);
  const [isSymbol, setIsSymbol] = useState<boolean>(false);

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
    <div className="h-[100vh] w-[100vw] text-black flex flex-col justify-center items-center gap-y-5">
      {/* Title */}
      <h1>Password Generator</h1>

      <MainPage 
       passwordLength={passwordLength}
       isUppercase={isUppercase}
       isLowercase={isLowercase}
       isNumber={isNumber}
       isSymbol={isSymbol}
       generatedPassword={generatedPassword}
       handlePasswordLengthChange={handlePasswordLengthChange}
       handleCheckboxChange={handleCheckboxChange}
       handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
