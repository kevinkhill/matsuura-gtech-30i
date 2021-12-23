import { useEffect } from "react";
import { ButtonStateMap } from "../types";

type BooleanStateSetter = React.Dispatch<React.SetStateAction<boolean>>;

export function rand(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

export function toggle(stateSetter: BooleanStateSetter) {
  return () => stateSetter(prev => !prev);
}

export function activateKey(
  obj: ButtonStateMap,
  keyToActivate: string
): ButtonStateMap {
  const newMap = { ...obj };

  const keys = Object.keys(obj);

  keys.forEach(key => {
    newMap[key] = key === keyToActivate;
  });

  return newMap;
}

export function useConsoleWatch(varToLog: unknown): void {
  useEffect(() => console.log(varToLog), [varToLog]);
}
