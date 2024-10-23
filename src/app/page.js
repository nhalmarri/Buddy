"use client";

import React, { useState } from "react";
import Input from "./Components/inputs";

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="bg-cyan-50 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-4  text-black ">
        <label htmlFor="inputField" className="block text-black mb-2">
          Enter something:
        </label>
        <Input
          id="inputField"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type here..."
        />
      </div>
    </div>
  );
}
