import React from "react";

import { ButtonProps } from "../Button";
import RadioButtonGroup from "../RadioButtonGroup";

const buttons: ButtonProps[] = [
  { text: "X" },
  { text: "Y" },
  { text: "Z" },
  { text: "4" },
  { text: "5" },
  { text: "." }
];

const AxisButtons = ({ handler }) => {
  return (
    <div className="grid grid-cols-3 gap-1 p-5 place-items-center">
      <RadioButtonGroup
        initial="X"
        label="Axis Group"
        buttons={buttons}
        handler={handler}
      />
    </div>
  );
};

export default AxisButtons;
