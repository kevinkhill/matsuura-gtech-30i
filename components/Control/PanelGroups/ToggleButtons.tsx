import React from "react";

import ButtonGroup from "../ButtonGroup";
import { ButtonProps } from "../Button";

const buttons: ButtonProps[] = [
  { text: "S/BLK" },
  { text: "M01" },
  { text: "BLK/SKP" },
  { text: "DR/RUN" },
  { text: "FN/SEL" },
  { text: "__" }
];

const ToggleButtons = ({ onToggle }) => {
  return (
    <div className="grid grid-cols-6 gap-1 place-items-center">
      <ButtonGroup
        groupLabel="Toggle Group"
        buttons={buttons}
        onToggle={onToggle}
      />
    </div>
  );
};

export default ToggleButtons;
