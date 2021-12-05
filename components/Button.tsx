// import { useEffect, useState } from "react";
import clsx from "clsx";
import { useState, useEffect } from "react";

import LED from "./LED";

export type ButtonProps = {
  text: string;
  isActive: boolean;
  onClick: () => unknown;
  color?: "red" | "green";
};

const Button: React.FC<ButtonProps> = ({ text, isActive, color, onClick }) => {
  const [ledState, setLedState] = useState(false);

  const bgColor = clsx({
    "bg-red-600": color === "red",
    "bg-green-400": color === "green",
    "bg-white": color !== "green" && color !== "red",
  });

  const handleClick = (event, label: string) => {
    setLedState((prev) => {
      const newState = !prev;

      // console.log(label, newState);
      onClick({ label, state: newState });

      return newState;
    });
  };

  return (
    <div>
      <button
        key={text}
        type="button"
        onClick={(event) => handleClick(event, text)}
        className={`h-12 w-12 rounded-md ${bgColor}`}
      >
        <LED classes="-mt-2 m-0.5" on={ledState} />
        <span className="text-xs text-black">{text}</span>
      </button>
    </div>
  );
};

export default Button;
