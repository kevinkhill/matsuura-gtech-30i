import React from "react";

const Key = ({ onClick, value, white = false }) => {
  const keyColor = white ? "bg-white" : "bg-yellow-100";

  return (
    <button
      key={value}
      type="button"
      onClick={() => onClick(value)}
      className={`p-0.5 w-10 h-10 rounded-sm ${keyColor}`}
    >
      {value}
    </button>
  );
};

export default Key;
