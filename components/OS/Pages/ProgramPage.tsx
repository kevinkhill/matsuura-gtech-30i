import React, { useEffect, useState } from "react";

// const panelBlue =

const ProgramPage = () => {
  const now = () => new Date().toLocaleTimeString();
  const [time, setTime] = useState(now());

  useEffect(() => {
    setInterval(() => {
      setTime(now());
    });
  }, [time]);

  return (
    <div className="w-full h-full bg-neutral-400">
      <div className="flex flex-row bg-neutral-300">
        <div className="flex-grow px-2 text-black font-lcd">
          MANUAL GUIDE (CNC_MEM/USER)
        </div>
        <div className="px-2 text-green-700 bg-blue-900 font-lcd">MEM</div>
        <div className="px-2 text-black font-lcd">{time}</div>
      </div>
    </div>
  );
};

export default ProgramPage;
