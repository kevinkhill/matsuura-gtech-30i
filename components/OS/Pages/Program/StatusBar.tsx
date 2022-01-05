import React from "react";

import Clock from "@/components/OS/Layout/Clock";

interface StatusBarProps {
  mode: string;
  title: string;
  showClockSeconds?: boolean;
}

const StatusBar = ({
  title,
  mode,
  showClockSeconds = true
}: StatusBarProps) => {
  return (
    <div className="flex flex-row bg-gray-100">
      <div className="px-2 text-black grow font-lcd">{title}</div>
      <div className="pr-2 text-green-500 bg-blue-800 font-lcd">{mode}</div>
      <div className="px-2 text-black font-lcd">
        <Clock seconds={showClockSeconds} />
      </div>
    </div>
  );
};

export default StatusBar;
