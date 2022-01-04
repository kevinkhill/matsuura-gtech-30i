import { OffsetRegister } from "@/types/offsets";

import { intRange } from "./util";

export default class OffsetFactory {
  static createRegister(index: number): OffsetRegister {
    return {
      index,
      lengthGeom: 0,
      lengthWear: 0,
      diamGeom: 0,
      diamWear: 0
    };
  }

  static createRegisterRange(start: number, end: number): OffsetRegister[] {
    return intRange(start, end).map(i => OffsetFactory.createRegister(i));
  }
}
