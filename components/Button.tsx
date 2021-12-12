import clsx from "clsx";

import LED from "./LED";

export interface ButtonProps {
  text: string;
  plain?: boolean;
  ledOn?: boolean;
  color?: "red" | "green";
  onClick?: (label?: string) => unknown;
  onToggle?: (label?: string, state?: boolean) => void;
}

const Button: React.FC<ButtonProps> = ({
  plain,
  text,
  color,
  onToggle,
  onClick,
  ledOn = false
}) => {
  // const [ledState, setLedState] = useState(ledOn);
  let ledState = ledOn;

  const bgColor = clsx({
    "bg-red-600": color === "red",
    "bg-green-400": color === "green",
    "bg-white": color !== "green" && color !== "red"
  });

  const handleClick = (event, label: string) => {
    // setLedState(prev => {
    // const newState = !prev;
    const newState = !ledState;
    if (onToggle) onToggle(label, newState);
    if (onClick) onClick(label, event);
    ledState = newState;
    // return newState;
    // });
  };

  return (
    <div>
      <button
        key={text}
        type="button"
        onClick={event => handleClick(event, text)}
        className={`h-12 w-12 rounded-md ${bgColor}`}
      >
        {!plain ? <LED classes="-mt-2 m-0.5" on={ledState} /> : <></>}
        <span className="text-xs text-black">{text}</span>
      </button>
    </div>
  );
};

export default Button;
