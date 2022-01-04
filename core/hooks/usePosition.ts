import { useState } from "react";

import { Position } from "@/types/position";

import PositionFactory from "../PositionFactory";

export default function usePosition(position?: Position) {
  const [currentPosition, setCurrentPosition] = useState<Position>(
    position ?? PositionFactory.getZeroPosition()
  );

  return [currentPosition, setCurrentPosition] as const;
}
