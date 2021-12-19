import React from "react";

import Button, { ButtonProps } from "./Button";

export interface ButtonGroupProps {
  groupLabel?: string;
  buttons: ButtonProps[];
  onToggle: (groupLabel: string, label: string) => unknown;
}

const ButtonGroup = ({ buttons, onToggle, groupLabel }: ButtonGroupProps) => {
  const handleClick = (label: string) => {
    onToggle(groupLabel, label);
  };

  return (
    <>
      {buttons.map((btn: ButtonProps) => {
        return (
          <Button
            key={btn.text}
            text={btn.text}
            color={btn.color}
            ledOn={btn.ledOn}
            plain={btn.plain}
            onClick={handleClick}
          />
        );
      })}
    </>
  );
};

export default ButtonGroup;
