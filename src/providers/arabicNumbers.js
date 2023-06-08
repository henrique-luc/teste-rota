import { createContext, useState } from "react";

export const ArabicContext = createContext([]);

export const ArabicProvider = ({ children }) => {
  const [convertedArabic, setConvertedArabic] = useState("");

  const arabicToRomanMap = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };

  const arabicToRoman = (arabicNumeral) => {
    let result = "";

    for (let arabicValue of Object.keys(arabicToRomanMap).reverse()) {
      console.log(arabicValue);
      arabicValue = parseInt(arabicValue);
      while (arabicNumeral >= arabicValue) {
        result += arabicToRomanMap[arabicValue];
        arabicNumeral -= arabicValue;
      }
    }

    setConvertedArabic(result);
  };

  return (
    <ArabicContext.Provider value={{ convertedArabic, arabicToRoman }}>
      {children}
    </ArabicContext.Provider>
  );
};
