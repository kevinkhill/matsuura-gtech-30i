import { useState } from "react";

import { Tuple } from "@/types/util";

export default function useTupleToggle<T>(values: Tuple<T>): [T, () => void] {
  const [index, setIndex] = useState(0);
  const toggler = () => setIndex(prev => (prev === 0 ? 1 : 0));

  return [values[index], toggler];
}
