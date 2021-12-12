import { useReducer } from "react";

import Button from "../Button";

function reducer(_state, action) {
  const resetState = {
    X1: false,
    X10: false,
    X100: false
  };

  return { ...resetState, [action.type]: true };
}

const HandleIncrementButtons = ({
  handler
}: {
  handler: (label: string) => void;
}) => {
  const [ledStates, dispatch] = useReducer(reducer, {
    X1: true,
    X10: false,
    X100: false
  });

  const handleButton = (btnClicked: string) => {
    dispatch({ type: btnClicked });
    handler(btnClicked);
  };

  return (
    <div className="grid grid-cols-3 gap-1 p-1">
      <Button ledOn={ledStates.X1} text="X1" onToggle={handleButton} />
      <Button ledOn={ledStates.X10} text="X10" onToggle={handleButton} />
      <Button ledOn={ledStates.X100} text="X100" onToggle={handleButton} />
    </div>
  );
};

export default HandleIncrementButtons;
