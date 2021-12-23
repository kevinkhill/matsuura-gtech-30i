import { useEffect, useState } from "react";
import { createContainer } from "unstated-next";

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#example
function useMachineMode() {
  const [time, setTime] = useState(new Date());
  const hour = time.getHours();
  const minute = time.getMinutes();
  // const second = time.getSeconds();

  let currentTime = `0${hour > 12 ? hour - 12 : hour}`;

  if (hour === 0) currentTime = "12";

  currentTime += (minute < 10 ? ":0" : ":") + minute;
  // currentTime += (second < 10 ? ":0" : ":") + second;
  // currentTime += hour >= 12 ? " P.M." : " A.M.";

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  return { currentTime, setTime };
}

const CurrentTime = createContainer(useMachineMode);

export default CurrentTime;
