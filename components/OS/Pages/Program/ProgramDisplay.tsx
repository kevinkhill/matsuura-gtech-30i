import clsx from "clsx";
import React from "react";

import { nLine } from "@/core/util";

interface ProgramDisplayProps {
  lines: string[];
  cursorLine: number;
}

const ProgramDisplay = ({ lines, cursorLine = 0 }: ProgramDisplayProps) => {
  return (
    <div className="p-1 border-t border-b border-l border-r border-l-gray-600 border-t-gray-600 border-r-gray-300 border-b-gray-300">
      {lines.map((line, i) => {
        const classes = [];

        if (i === cursorLine) {
          classes.push("bg-yellow-300");
        }

        return (
          <p className={clsx(classes)} key={nLine(i)}>
            {line}
          </p>
        );
      })}
    </div>
  );
};

export default ProgramDisplay;
