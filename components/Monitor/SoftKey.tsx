import React from "react";

const SoftKey = ({ onClick, value }) => {
  return (
    <button
      key={value}
      type="button"
      onClick={() => onClick(value)}
      className="p-0.5 w-10 h-10 rounded-sm bg-yellow-50"
    >
      <div className="h-9 w-9"> {value}</div>
    </button>
  );
};

export default SoftKey;
