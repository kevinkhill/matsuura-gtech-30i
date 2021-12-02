import { useState } from "react";
import clsx from "clsx";

import LED from "./LED";

type ButtonProps = {
  text: string;
  red?: boolean;
  green?: boolean;
};

const Button: React.FC<ButtonProps> = ({ text, red, green }) => {
  const [isActive, setOnOff] = useState(false);
  const toggle = () => setOnOff((prev) => !prev);
  const bgColor = clsx({
    "bg-red-600": red,
    "bg-green-400": green,
    "bg-white": !green && !red,
  });

  return (
    <button
      type="button"
      onClick={toggle}
      className={`h-12 w-12 rounded-md ${bgColor}`}
    >
      <LED classes="-mt-2 m-0.5" on={isActive} />
      <span className="text-xs text-black">{text}</span>
    </button>
  );
};

export default Button;
