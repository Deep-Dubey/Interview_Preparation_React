import React, { useState } from "react";
const isBrowser = typeof window !== "undefined";

const useLocalStorage = (key, initialValue) => {
  if (!isBrowser) {
    return [initialValue, () => {}, () => {}];
  }
  if (!key) {
    throw new Error("LocalStorage key may not be false");
  }
  const storedValue = localStorage.getItem(key);
  const initital = storedValue ? JSON.parse(storedValue) : initialValue;
  const [value, setValue] = useState(initital);

  const set = (newValue) => {
    try {
      const valueToStore =
        newValue instanceof Function ? newValue(value) : newValue;
      setValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };
  const remove = () => {
    try {
      localStorage.removeItem(key);
      setValue(undefined);
    } catch (error) {
      console.log(error);
    }
  };
  return [value, set, remove];
};

export default useLocalStorage;
