import { useEffect } from "react";

export default function useSetInterval(
  fn: () => unknown,
  interval: number
): void {
  useEffect(() => {
    const id = setInterval(fn, interval);

    return () => clearInterval(id);
  });
}
