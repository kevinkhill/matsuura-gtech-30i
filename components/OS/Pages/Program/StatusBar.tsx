import React, { useEffect, useState } from "react";

interface StatusBarProps {
  mode: string;
  title: string;
}

const StatusBar = ({ title, mode }: StatusBarProps) => {
  const [time, setTime] = useState(new Date());
  const hour = time.getHours();
  const minute = time.getMinutes();
  // const second = time.getSeconds();

  let currentTime = `${hour > 12 ? hour - 12 : `0${hour}`}`;

  if (hour === 0) currentTime = "12";

  currentTime += (minute < 10 ? ":0" : ":") + minute;
  // currentTime += (second < 10 ? ":0" : ":") + second;
  // currentTime += hour >= 12 ? " P.M." : " A.M.";

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-row bg-gray-100">
      <div className="px-2 text-black grow font-lcd">{title}</div>
      <div className="pr-2 text-green-500 bg-blue-800 font-lcd">{mode}</div>
      <div className="px-2 text-black font-lcd">{currentTime}</div>
    </div>
  );
};

export default StatusBar;
