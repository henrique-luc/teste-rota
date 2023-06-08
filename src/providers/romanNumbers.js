import { createContext, useState } from "react";

export const RomanContext = createContext([]);

export const RomanProvider = ({ children }) => {
  const [convertedValue, setConvertedValue] = useState(0);

  const romanToArabicMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const romanToArabic = (romanNumeral) => {
    let result = 0;

    for (let i = 0; i < romanNumeral.length; i++) {
      const currentValue = romanToArabicMap[romanNumeral[i]];
      const nextValue = romanToArabicMap[romanNumeral[i + 1]];

      if (nextValue && nextValue > currentValue) {
        result -= currentValue;
      } else {
        result += currentValue;
      }
    }

    setConvertedValue(result);
  };

  return (
    <RomanContext.Provider value={{ convertedValue, romanToArabic }}>
      {children}
    </RomanContext.Provider>
  );
};
