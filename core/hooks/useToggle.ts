import { useState } from "react";

export default function useToggle(init222: boolean) {
  const [value, setValue] = useState(init222);

  const toggleValue = () => setValue(!value);
  // here, we freeze the array to a tuple
  return [value, toggleValue] as const;
}
