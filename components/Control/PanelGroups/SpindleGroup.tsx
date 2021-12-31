import React, { useState } from "react";

import Button from "../Button";

const SpindleGroup = ({ handler }) => {
  const [rpms, setRpms] = useState(100);

  const reset = () => setRpms(100);

  const increase = () =>
    setRpms(() => {
      const newSpeed = rpms + 10;
      return newSpeed >= 120 ? 120 : newSpeed;
    });

  const decrease = () =>
    setRpms(() => {
      const newSpeed = rpms - 10;
      return newSpeed <= 0 ? 0 : newSpeed;
    });

  return (
    <div className="grid grid-cols-4 gap-1 p-1 place-items-center">
      <Button plain text="100%" onClick={reset} />
      <div className="col-span-3">
        <div className="text-3xl text-red-glow font-mono-dro">{rpms}%</div>
      </div>
      <Button plain text="-" onClick={decrease} />
      <Button plain text="+" onClick={increase} />
      <Button plain text="O" color="red" onClick={() => handler("O")} />
      <Button text="|" onClick={() => handler("|")} />
    </div>
  );
};

export default SpindleGroup;
