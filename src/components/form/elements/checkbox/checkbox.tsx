import React from "react";
import { CheckboxWrapper } from "./checkbox.styles";

type CheckboxProps = {
  label: string;
  name: string;
  value: number;
};

export const Checkbox = ({ label, name, value }: CheckboxProps) => {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <CheckboxWrapper isCheckedStyle={isChecked}>
      <label>
        <input
          type="checkbox"
          name={name}
          value={value}
          checked={isChecked}
          onChange={() => setIsChecked((prevState) => !prevState)}
        />
        <span>{label}</span>
      </label>
    </CheckboxWrapper>
  );
};
