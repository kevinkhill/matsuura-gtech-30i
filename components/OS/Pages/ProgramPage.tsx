import React, { useEffect, useState } from "react";

import { Position } from "@/types/Positioning";

import MenuBar from "../MenuBar";
import TopBar from "../TopBar";
// import MenuContainer from "../MenuContainer";
import CurrentCommands from "./Program/CurrentCommands";
import AxisReadout from "../Layout/AxisReadout";
import BoxHeading from "../Layout/BoxHeading";
import SmallDro from "./Program/GenericReadout";
import GenericReadout from "./Program/GenericReadout";

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

  const [currentGcodes, setCurrentGcodes] = useState([
    1, 17, 40, 54, 80, 49, 90, 98, 69, 13.1
  ]);

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

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setPosition(nextDist);
  //     setNextDist(positionGenerator());
  //   }, 2000);
  //   return () => clearInterval(id);
  // }, [nextDist]);

  return (
    <div className="flex flex-col text-black bg-gray-400 font-lcd grow">
      <TopBar mode={curentMode} title={title} path={path} />
      <div className="grid grid-flow-col grow">
        <div className="flex flex-col row-span-2 divide-y divide-black">
          <div className="flex divide-x divide-black grow">
            <GenericReadout
              title="ACTUAL POS. (ABS.)"
              size="4xl"
              X={position.X}
              Y={position.Y}
              Z={position.Z}
              B={position.B}
            />
            <div className="grid grid-flow-row divide-y divide-black">
              <GenericReadout
                title="DIST TO GO"
                size="md"
                X={distToGo.X}
                Y={distToGo.Y}
                Z={distToGo.Z}
                B={distToGo.B}
                G={distToGoCmd}
              />
              <GenericReadout
                title="NEXT DIST"
                size="md"
                X={nextDist.X}
                Y={nextDist.Y}
                Z={nextDist.Z}
                B={nextDist.B}
                G={nextDistCmd}
              />
            </div>
          </div>
          <div>
            <BoxHeading text="CURRENT MACHINING" />
            <div className="h-14" />
          </div>
        </div>

        <div className="border-l border-black">
          <CurrentCommands
            nLine={nLine}
            programNum={programNum}
            currentD={currentD}
            currentH={currentH}
            currentS={currentS}
            currentM={currentM}
            currentTool={currentTool}
            currentGcodes={currentGcodes}
            currentFeedrate={currentFeedrate}
          />
        </div>
        <div className="bg-indigo-100">program</div>
      </div>
      <div className="grid grid-cols-2 text-gray-800 shrink">
        <div className="p-1">
          <div className="h-full border-t border-b border-l border-r border-l-neutral-700 border-t-neutral-700 border-r-neutral-300 border-b-neutral-300" />
        </div>
        <div className="p-1">
          <div className="h-full py-px bg-white border-t border-b border-l border-r border-l-neutral-700 border-t-neutral-700 border-r-neutral-300 border-b-neutral-300">
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
