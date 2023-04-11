import React from "react";

export const useInputState = (initialValue: string): [string, (e: React.ChangeEvent<HTMLInputElement>) => void, () => void] => {
  const [value, setValue] = React.useState(initialValue);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue(initialValue);
  };

  return [value, handleChange, reset];
};