import React from "react";

import { KeyValues } from "./KeyMap";

interface KeyProps {
  white?: boolean;
  value: KeyValues;
  onClick: (value: KeyValues) => unknown;
}

const KeyboardKey = ({ onClick, value, white = false }: KeyProps) => {
  const keyColor = white ? "bg-white" : "bg-yellow-100";

  const { label, shftLabel } = value;

  return (
    <button
      key={label}
      type="button"
      onClick={() => onClick(value)}
      className={`p-0.5 w-10 h-10 rounded-sm ${keyColor}`}
    >
      {label}
    </button>
  );
};

export default KeyboardKey;
