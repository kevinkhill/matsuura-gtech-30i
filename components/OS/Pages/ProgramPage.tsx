import React, { useEffect, useState } from "react";

import MenuBar from "../MenuBar";
import TopBar from "../TopBar";
// import MenuContainer from "../MenuContainer";
import { toFixed, positionGenerator } from "@/core/util";
import { Position } from "@/types/Positioning";

const BoxHeading = ({ text }: { text: string }) => {
  return (
    <div className="px-2 mx-1 mt-0.5 text-gray-300 bg-blue-800">{text}</div>
  );
};

const AxisReadout = ({ textSize, axis, value, precision = 4 }) => {
  return (
    <div className="flex">
      <div className={`text-${textSize} text-blue-800 grow`}>{axis}</div>
      <div className={`text-${textSize}`}>{toFixed(value, precision)}</div>
    </div>
  );
};

const ProgramPage = () => {
  const [menuItems, setMenuItems] = useState([
    "REWIND",
    "O LIST",
    "GBEDIT",
    "N SRCH",
    "O SRCH",
    "ACTPOS",
    "PRESET",
    "......",
    "MCHDRW",
    "SIMLAT"
  ]);

  const [path, setPath] = useState("CNC_MEM/USER");
  const [title, setTitle] = useState("MANUAL GUIDE");
  const [curentMode, setCurrentMode] = useState("MEM");
  const [programNum, setProgramNum] = useState(8100);
  const [nLine, setNline] = useState("00000000");
  const [currentTool, setCurrentTool] = useState(0);
  const [currentD, setCurrentD] = useState(178);
  const [currentH, setCurrentH] = useState(178);
  const [currentS, setCurrentS] = useState(15000);
  const [currentM, setCurrentM] = useState(5);
  const [currentFeedrate, setCurrentFeedrate] = useState(0.0);

  const [position, setPosition] = useState<Position>({
    X: 9.9137,
    Y: 15.9736,
    Z: 19.4815,
    B: 179.999
  });

  const [distToGoCmd, setDistToGoCmd] = useState(1);
  const [distToGo, setDistToGo] = useState<Position>({
    X: 0.0,
    Y: 0.0,
    Z: 0.0,
    B: 0.0
  });

  const [nextDistCmd, setNextDistCmd] = useState(1);
  const [nextDist, setNextDist] = useState<Position>({
    X: 0.0,
    Y: 0.0,
    Z: 0.0,
    B: 0.0
  });

  useEffect(() => {
    const id = setInterval(() => {
      setPosition(nextDist);
      setNextDist(positionGenerator());
    }, 2000);

    return () => clearInterval(id);
  }, [nextDist]);

  return (
    <div className="flex flex-col text-black bg-gray-400 font-lcd grow">
      <TopBar mode={curentMode} title={title} path={path} />
      <div className="grid grid-flow-col grow">
        <div className="flex flex-col row-span-2 divide-y divide-black">
          <div className="flex divide-x divide-black grow">
            <div className="px-1">
              <BoxHeading text="ACTUAL POS. (ABS.)" />
              <div className="flex flex-col">
                <AxisReadout axis="X" value={position.X} textSize="4xl" />
                <AxisReadout axis="Y" value={position.Y} textSize="4xl" />
                <AxisReadout axis="Z" value={position.Z} textSize="4xl" />
                <AxisReadout
                  axis="B"
                  value={position.B}
                  textSize="4xl"
                  precision={3}
                />
              </div>
            </div>
            <div className="grid grid-flow-row divide-y divide-black">
              <div className="px-1">
                <BoxHeading text="DIST TO GO" />
                <div className="flex flex-col">
                  <div className="flex">
                    <div className="text-lg text-blue-800">G</div>
                    <div className="text-lg">0{distToGoCmd}</div>
                  </div>
                  <AxisReadout axis="X" value={distToGo.X} textSize="lg" />
                  <AxisReadout axis="Y" value={distToGo.Y} textSize="lg" />
                  <AxisReadout axis="Z" value={distToGo.Z} textSize="lg" />
                  <AxisReadout
                    axis="B"
                    textSize="lg"
                    precision={3}
                    value={distToGo.B}
                  />
                </div>
              </div>
              <div className="px-1">
                <BoxHeading text="NEXT DIST" />
                <div className="flex flex-col">
                  <div className="flex">
                    <div className="text-lg text-blue-800">G</div>
                    <div className="text-lg">0{nextDistCmd}</div>
                  </div>
                  <AxisReadout axis="X" value={nextDist.X} textSize="lg" />
                  <AxisReadout axis="Y" value={nextDist.Y} textSize="lg" />
                  <AxisReadout axis="Z" value={nextDist.Z} textSize="lg" />
                  <AxisReadout
                    axis="B"
                    textSize="lg"
                    precision={3}
                    value={nextDist.B}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <BoxHeading text="CURRENT MACHINING" />
            <div className="h-14" />
          </div>
        </div>

        <div className="border-l border-black">
          <div className="flex flex-col">
            <div className="flex">
              <div className="pr-2 text-lg text-blue-800">O</div>
              <div className="text-lg">{programNum}</div>
            </div>
            <div className="flex">
              <div className="pr-2 text-lg text-blue-800">N</div>
              <div className="text-lg">{nLine}</div>
            </div>
            <div className="flex">
              <div className="pr-16 text-lg text-blue-800">HD.T</div>
              <div className="text-lg">{currentTool}</div>
            </div>
            <div className="flex flex-row">
              <div className="flex pr-10">
                <div className="pr-2 text-lg text-blue-800">D</div>
                <div className="text-lg">{currentD}</div>
              </div>
              <div className="flex">
                <div className="pr-2 text-lg text-blue-800">H</div>
                <div className="text-lg">{currentH}</div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex pr-10">
                <div className="pr-8 text-lg text-blue-800">S</div>
                <div className="text-lg">{currentS}</div>
              </div>
              <div className="flex">
                <div className="text-lg text-blue-800">M</div>
                <div className="text-lg">{currentM}</div>
              </div>
            </div>
            <div className="flex">
              <div className="pr-16 text-lg text-blue-800">F</div>
              <div className="text-lg">{toFixed(currentFeedrate, 8)}</div>
            </div>
          </div>
        </div>
        <div className="bg-indigo-300">program</div>
      </div>
      <div className="grid grid-cols-2 text-gray-800 shrink">
        <div className="p-1">
          <div className="h-full border-t border-b border-l border-r border-l-neutral-700 border-t-neutral-700 border-r-neutral-300 border-b-neutral-300" />
        </div>
        <div className="p-1">
          <div className="h-full py-px bg-white">
            <div className="w-2 h-4 bg-blue-800" />
          </div>
        </div>
      </div>
      <div className="bg-gray-300">
        <MenuBar menuItems={menuItems} />
      </div>
    </div>
  );
};

export default ProgramPage;
