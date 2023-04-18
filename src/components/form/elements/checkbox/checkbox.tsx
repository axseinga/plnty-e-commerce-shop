import React from "react";
import { CheckboxWrapper } from "./checkbox.styles";

type CheckboxProps = {
  label: string;
  name: string;
  value: number | string;
  isChecked: boolean;
  handleChange: any;
};

export const Checkbox = ({
  label,
  name,
  value,
  isChecked,
  handleChange,
}: CheckboxProps) => {
  return (
    <CheckboxWrapper isCheckedStyle={isChecked}>
      <label>
        <input
          type="checkbox"
          name={name}
          value={value}
          checked={isChecked}
          onChange={handleChange}
        />
        <span>{label}</span>
      </label>
    </CheckboxWrapper>
  );
};
