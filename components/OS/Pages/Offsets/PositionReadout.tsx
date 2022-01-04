import React from "react";

import { toFixed } from "@/core/util";

const PositionReadout = ({ heading, position }) => {
  return (
    <div className="flex flex-col flex-grow border-t border-b border-l border-r border-b-black border-r-black border-t-white border-l-white">
      <p className="px-8">{heading}</p>
      <div className="flex">
        <div className="flex-grow pl-2">X</div>
        <div className="">{toFixed(position.X, 4)}</div>
      </div>
      <div className="flex">
        <div className="flex-grow pl-2">Y</div>
        <div className="">{toFixed(position.Y, 4)}</div>
      </div>
      <div className="flex">
        <div className="flex-grow pl-2">Z</div>
        <div className="">{toFixed(position.Z, 4)}</div>
      </div>
      <div className="flex">
        <div className="flex-grow">
          <p className="inline-flex pr-px bg-cyan-500">I</p>B
        </div>
        <div className="">{toFixed(position.B, 4)}</div>
      </div>
    </div>
  );
};

export default PositionReadout;
