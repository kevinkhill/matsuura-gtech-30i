import React, { useCallback, useEffect, useState } from "react";

interface ClockProps {
  ampm?: boolean;
  seconds?: boolean;
}

function getCurrentTime({ seconds = false, ampm = false }) {
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  let currentTime = `${hour > 12 ? hour - 12 : `0${hour}`}`;

  if (hour === 0) currentTime = "12";

  currentTime += (minute < 10 ? ":0" : ":") + minute;
  if (seconds) currentTime += (second < 10 ? ":0" : ":") + second;
  if (ampm) currentTime += hour >= 12 ? " P.M." : " A.M.";

  return currentTime;
}

const Clock = ({ seconds = false, ampm = false }: ClockProps) => {
  const now = useCallback(
    () => getCurrentTime({ seconds, ampm }),
    [seconds, ampm]
  );
  const [time, setTime] = useState(now());

  useEffect(() => {
    const id = setInterval(() => setTime(now()), 1000);
    return () => clearInterval(id);
  }, [now]);

  return <>{time}</>;
};

export default Clock;
