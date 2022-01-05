import React from "react";

import { toFixed, zeroPad } from "@/core/util";
import { OffsetRegister } from "@/types/offsets";

export interface OffsetGridRowProps {
  register: OffsetRegister;
  // lengthGeom?: number;
  // lengthWear?: number;
  // diamGeom?: number;
  // diamWear?: number;
}

export const OffsetGridRow = ({ register }: OffsetGridRowProps) => {
  const { index, lengthGeom, lengthWear, diamGeom, diamWear } = register;

  const ValueDisplay = ({ value = 0, precision = 4 }) => (
    <div className="pl-5 pr-0.5 text-right bg-white border-t border-l justif border-t-gray-700 border-l-gray-700">
      {toFixed(value, precision)}
    </div>
  );

  return (
    <div className="flex flex-row justify-around flex-grow gap-1 place-items-center">
      <div className="flex-shrink text-blue-700">{zeroPad(index, 3)}</div>
      <ValueDisplay value={lengthGeom} />
      <ValueDisplay value={lengthWear} />
      <ValueDisplay value={diamGeom} />
      <ValueDisplay value={diamWear} />
    </div>
  );
};

export default OffsetGridRow;
