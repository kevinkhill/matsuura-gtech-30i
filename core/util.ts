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
    // eslint-disable-next-line no-param-reassign
    newMap[key] = key === keyToActivate;
  });

  return newMap;
}
