/* eslint-disable no-param-reassign */
import React from "react";

import { Position } from "@/types/position";
import { TextSize } from "@/types/util";

import AxisReadout from "../../Layout/AxisReadout";
import BoxHeading from "../../Layout/BoxHeading";

interface ReadoutProps extends Position {
  title: string;
  size: TextSize;
  G?: number;
  position?: Position;
}

export default function GenericReadout({
  G,
  position,
  title = "",
  size = "md",
  X = 0,
  Y = 0,
  Z = 0,
  B = 0
}: ReadoutProps) {
  if (position) {
    X = position.X;
    Y = position.Y;
    Z = position.Z;
    B = position.B;
  }

  return (
    <div className="flex flex-col flex-shrink px-1">
      <BoxHeading text={title} />
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
  );
}
