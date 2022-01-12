import { useState } from "react";

const useLocalStorage = (key, initialValue) => {

    const [modeValue, setModeValue] = useState(()=> {
      if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
      }
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    });

    const setStoredValue = (value) => {
      localStorage.setItem(key, JSON.stringify(value));
      setModeValue(value);
    }

    return [modeValue, setStoredValue];
}

export default useLocalStorage;