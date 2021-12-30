import React from "react";

import { ButtonProps } from "../Button";
import ButtonGroup from "../ButtonGroup";

const buttons: ButtonProps[] = [
  { text: "+", plain: true },
  { text: "~", plain: true },
  { text: "-", plain: true }
];

const DirectionButtons = ({ onToggle }) => {
  return (
    <div className="grid grid-cols-3 gap-1">
      <ButtonGroup
        buttons={buttons}
        onToggle={onToggle}
        groupLabel="Toggle Group"
      />
    </div>
  );
};

export default DirectionButtons;
