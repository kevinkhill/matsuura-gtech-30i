import React, { useState } from "react";

import { toFixed } from "@/core/util";

import CurrentGcodes from "./CurrentGcodes";

const CurrentCommands = ({
  nLine,
  programNum,
  currentD,
  currentH,
  currentS,
  currentM,
  currentTool,
  currentGcodes,
  currentFeedrate
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="pr-2 text-blue-800 text-md">O</div>
        <div className="text-md">{programNum}</div>
      </div>
      <div className="flex">
        <div className="pr-2 text-blue-800 text-md">N</div>
        <div className="text-md">{nLine}</div>
      </div>
      <div className="flex">
        <div className="pr-16 text-blue-800 text-md">HD.T</div>
        <div className="text-md">{currentTool}</div>
      </div>
      <div className="flex flex-row">
        <div className="flex pr-10">
          <div className="pr-2 text-blue-800 text-md">D</div>
          <div className="text-md">{currentD}</div>
        </div>
        <div className="flex">
          <div className="pr-2 text-blue-800 text-md">H</div>
          <div className="text-md">{currentH}</div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex pr-10">
          <div className="pr-8 text-blue-800 text-md">S</div>
          <div className="text-md">{currentS}</div>
        </div>
        <div className="flex">
          <div className="text-blue-800 text-md">M</div>
          <div className="text-md">{currentM}</div>
        </div>
      </div>
      <div className="flex">
        <div className="pr-16 text-blue-800 text-md">F</div>
        <div className="text-md">{toFixed(currentFeedrate, 8)}</div>
      </div>
      <div className="">
        <CurrentGcodes gcodes={currentGcodes} />
      </div>
    </div>
  );
};

export default CurrentCommands;
