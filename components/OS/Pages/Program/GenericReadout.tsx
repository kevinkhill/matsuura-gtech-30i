import React from "react";

import { AxisRecord, TextSize } from "@/types/util";

import AxisReadout from "../../Layout/AxisReadout";
import BoxHeading from "../../Layout/BoxHeading";

type DistanceToGoProps = AxisRecord<"X" | "Y" | "Z" | "B"> & {
  title: string;
  size: TextSize;
  G?: number;
};

export default function GenericReadout({
  title = "",
  size = "md",
  X = 0,
  Y = 0,
  Z = 0,
  B = 0,
  G
}: DistanceToGoProps) {
  return (
    <div className="px-1">
      <BoxHeading text={title} />
      <div className="flex flex-col">
        {G && (
          <div className="flex">
            <div className={`text-blue-800 text-${size}`}>G</div>
            <div className={`text-${size}`}>0{G}</div>
          </div>
        )}
        <AxisReadout axis="X" value={X} textSize={size} />
        <AxisReadout axis="Y" value={Y} textSize={size} />
        <AxisReadout axis="Z" value={Z} textSize={size} />
        <AxisReadout axis="B" value={B} textSize={size} precision={3} />
      </div>
    </div>
  );
}
