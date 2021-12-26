import { useEffect } from "react";

export default function useConsoleWatch(varToLog: unknown): void {
  useEffect(() => console.log(varToLog), [varToLog]);
}
