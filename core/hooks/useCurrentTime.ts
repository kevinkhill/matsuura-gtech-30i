import { useState } from "react";

export default function useCurrentTime({ ampm = false, seconds = false }) {
  const [time, setCurrentTime] = useState(new Date());
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  let currentTime = `${hour > 12 ? hour - 12 : `0${hour}`}`;

  if (hour === 0) currentTime = "12";

  currentTime += (minute < 10 ? ":0" : ":") + minute;
  if (seconds) currentTime += (second < 10 ? ":0" : ":") + second;
  if (ampm) currentTime += hour >= 12 ? " P.M." : " A.M.";

  return [currentTime, setCurrentTime] as const;
}
