import { useState } from "react";

import Button from "../Button";

const SpindleGroup = ({ onToggle }) => {
  const [rpms, setRpms] = useState(100);
  const reset = () => setRpms(100);
  const increase = () => setRpms(rpms + 10);
  const decrease = () => setRpms(rpms - 10);

  return (
    <div className="grid grid-cols-4 gap-1 p-1 place-items-center">
      <Button plain text="100%" onToggle={reset} />
      <div className="col-span-3">
        <div className="text-4xl text-red-600 font-mono-dro">{rpms}%</div>
      </div>
      <Button plain text="-" onToggle={decrease} />
      <Button plain text="+" onToggle={increase} />
      <Button plain text="O" color="red" onToggle={onToggle} />
      <Button text="|" onToggle={onToggle} />
    </div>
  );
};

export default SpindleGroup;
