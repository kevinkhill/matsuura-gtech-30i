import React from "react";

import { ButtonProps } from "../Button";
import ButtonGroup from "../ButtonGroup";

const buttons: ButtonProps[] = [
  { text: "handy" },
  { text: "gun" },
  { text: "stop", color: "red" },
  { text: "WOF" },
  { text: "action", color: "green" },
  { text: "TLM" }
];

const HandyButtons = ({ onToggle }) => {
  return (
    <div className="grid grid-cols-3 gap-1 place-items-center">
      <ButtonGroup
        buttons={buttons}
        onToggle={onToggle}
        groupLabel="Handy Group"
      />
    </div>
  );
};

export default HandyButtons;
