import { useEffect, useState } from "react";
import clsx from "clsx";

import LED from "./LED";

type ButtonProps = {
  text: string;
  isActive?: boolean;
  color?: "white" | "red" | "green";
};

const Button: React.FC<ButtonProps> = ({
  text = "",
  isActive = false,
  color = "white"
}) => {
  const [isOn, setOnOff] = useState(false);
  const bgColor = clsx({
    "bg-red-600": color === "red",
    "bg-green-400": color === "green",
    "bg-white": color !== "green" && color !== "red"
  });

  useEffect(() => {
    setOnOff(isActive);
  }, [isActive]);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOnOff(prev => !prev)}
        className={`h-12 w-12 rounded-md ${bgColor}`}
      >
        <LED classes="-mt-2 m-0.5" on={isOn} />
        <span className="text-xs text-black">{text}</span>
      </button>
    </div>
  );
};

export default Button;
