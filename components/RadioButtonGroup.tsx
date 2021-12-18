import React, { useState } from "react";

import { activateKey } from "../core/util";
import { ButtonStateMap } from "../types";

import Button, { ButtonProps } from "./Button";

export interface RadioButtonGroupProps {
  label?: string;
  initial: string;
  buttons: ButtonProps[];
  handler: (btnClicked: string, groupState: ButtonStateMap) => void;
}

const RadioButtonGroup = ({
  initial,
  buttons,
  handler
}: RadioButtonGroupProps) => {
  const buttonStates = Object.fromEntries(
    buttons.map(btn => [btn.text, btn.text === initial])
  );

  const [ledStates, setButtonState] = useState(buttonStates);

  const handleButton = (btnClicked: string) => {
    const groupState = activateKey(buttonStates, btnClicked);
    // console.log(label, groupState);
    setButtonState(groupState);
    handler(btnClicked, groupState);
  };

  return (
    <>
      {buttons.map((btn: ButtonProps) => {
        return (
          <Button
            key={btn.text}
            text={btn.text}
            color={btn.color}
            plain={btn.plain}
            onClick={() => handleButton(btn.text)}
            ledOn={ledStates[btn.text]}
          />
        );
      })}
    </>
  );
};

export default RadioButtonGroup;
