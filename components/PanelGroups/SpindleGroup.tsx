import { useState } from "react";

import Button from "../Button";

const SpindleGroup = ({ onToggle }) => {
  const [rpms, setRpms] = useState(100);

  const increase = () => setRpms(() => rpms + 10);
  const decrease = () => setRpms(() => rpms - 10);

  return (
    <div className="grid grid-cols-4 gap-1 p-1 place-items-center">
      <Button text="100%" onToggle={onToggle} />
      <div className="col-span-3 text-red-600">[ {rpms} % ]</div>
      <Button plain text="-" onToggle={decrease} />
      <Button plain text="+" onToggle={increase} />
      <Button text="O" color="red" onToggle={onToggle} />
      <Button text="|" onToggle={onToggle} />
    </div>
  );
};

export default SpindleGroup;
