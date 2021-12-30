import React from "react";

import { toFixed } from "@/core/util";
import { MachineAxis, TextSize } from "@/types/util";

interface AxisReadoutProps {
  axis: MachineAxis;
  value: number;
  textSize: TextSize;
  precision?: number;
}

export default function AxisReadout({
  textSize,
  axis,
  value,
  precision = 4
}: AxisReadoutProps) {
  return (
    <div className="flex">
      <div className={`text-${textSize} text-blue-800 grow`}>{axis}</div>
      <div className={`text-${textSize}`}>{toFixed(value, precision)}</div>
    </div>
  );
}
