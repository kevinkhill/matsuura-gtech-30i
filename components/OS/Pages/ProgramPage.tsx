import React, { useEffect, useState } from "react";
import CurrentTime from "@/core/context/CurrentTime";

// const panelBlue =

const ProgramPage = () => {
  const clock = CurrentTime.useContainer();
  // const now = () => new Date().toLocaleTimeString();
  // const [time, setTime] = useState(now());

  // useEffect(() => {
  //   setInterval(() => {
  //     setTime(now());
  //   }, 1000);
  // }, [time]);

  return (
    <div className="grow bg-neutral-400">
      <div className="flex flex-row bg-neutral-300">
        <div className="flex-grow px-2 text-black font-lcd">
          MANUAL GUIDE (CNC_MEM/USER)
        </div>
        <div className="px-2 text-green-700 bg-blue-900 font-lcd">MEM</div>
        <div className="px-2 text-black font-lcd">{clock.currentTime}</div>
      </div>
    </div>
  );
};

export default ProgramPage;
