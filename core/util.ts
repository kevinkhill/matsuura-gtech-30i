import { useEffect } from "react";
import { Position } from "@/types/Positioning";

import { ButtonStateMap } from "../types";

type BooleanStateSetter = React.Dispatch<React.SetStateAction<boolean>>;

export function toFixed(num: number, precision = 4): string {
  return (Math.round(num * 10000) / 10000).toFixed(precision);
}

export function rand(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

export function floatInRange(
  min: number,
  max: number,
  precision: number
): number {
  const cMin = Math.ceil(min);
  const fMax = Math.floor(max);
  const num = Math.random() * (fMax - cMin + 1) + cMin;

  return parseFloat(toFixed(num, precision));
}

export function positionGenerator(): Position {
  return {
    X: floatInRange(-19, 19, 4),
    Y: floatInRange(-16, 0, 4),
    Z: floatInRange(-20, 0, 4),
    B: floatInRange(-360, 360, 3)
  };
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
