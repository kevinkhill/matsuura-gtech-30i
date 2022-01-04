import { Position } from "@/types/position";

import { floatInRange } from "./util";

export default class PositionFactory {
  static getRandomPosition(): Position {
    return {
      X: floatInRange(-19, 19, 4),
      Y: floatInRange(-16, 0, 4),
      Z: floatInRange(-20, 0, 4),
      B: floatInRange(-360, 360, 3)
    };
  }

  static getZeroPosition(): Position {
    return {
      X: 0.0,
      Y: 0.0,
      Z: 0.0,
      B: 0.0
    };
  }
}
