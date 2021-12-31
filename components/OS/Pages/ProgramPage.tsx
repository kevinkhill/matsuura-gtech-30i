import clsx from "clsx";
import React, { useState } from "react";

import { nLine, zeroPad } from "@/core/util";
import { Position } from "@/types/position";

import BoxHeading from "../Layout/BoxHeading";
import MenuBar from "../MenuBar";
import TopBar from "../TopBar";
// import MenuContainer from "../MenuContainer";
import CurrentCommands from "./Program/CurrentCommands";
import CursorInputField from "./Program/CursorInputField";
import GenericReadout from "./Program/GenericReadout";
import LoadMeter from "./Program/LoadMeter";
import WellSpacer from "./Program/WellSpacer";

const ProgramDisplay = ({ lines }: { lines: string[] }) => {
  return (
    <div className="p-1 border-t border-b border-l border-r border-l-gray-600 border-t-gray-600 border-r-gray-300 border-b-gray-300">
      {lines.map((line, i) => {
        const classes = [];

        if (i === 0) {
          classes.push("bg-yellow-300");
        }

        return (
          <p className={clsx(classes)} key={nLine(i)}>
            {line}
          </p>
        );
      })}
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
  const [feedrateMode, setFeedrateMode] = useState("INCH/MIN");
  const [programNum, setProgramNum] = useState(8100);
  const [currentTool, setCurrentTool] = useState(0);
  const [currentN, setCurrentN] = useState(zeroPad(0, 8));
  const [currentD, setCurrentD] = useState(178);
  const [currentH, setCurrentH] = useState(178);
  const [currentS, setCurrentS] = useState(15000);
  const [currentM, setCurrentM] = useState(5);
  const [currentFeedrate, setCurrentFeedrate] = useState(0.0);
  const [loadedProgram, setLoadedProgram] = useState<string[]>([
    "G0 G90 G54",
    "X1.2 Y3.4",
    "G43 H12 Z1.0",
    "Z1.0"
  ]);

  const [spindleRpms, setSpindleRpms] = useState(0);
  const [spindleRpmPercent, setSpindleRpmPercent] = useState(0);

  const [feedrate, setFeedrate] = useState(0);
  const [feedratePercent, setFeedratePercent] = useState(0);

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

  const charArrows = <div className="bg-blue-500">CHAR←→</div>;

  return (
    <div className="flex flex-col flex-grow text-sm text-black bg-gray-300 font-lcd">
      <TopBar mode={curentMode} title={title} path={path} />
      <div id="display-container" className="flex-grow">
        <div className="flex flex-col border-r border-black main-pos">
          <GenericReadout
            title="ACTUAL POS. (ABS.)"
            size="3xl"
            position={position}
          />
        </div>
        <div className="flex flex-col border-b border-r border-black dist-2-go">
          <GenericReadout
            title="DIST TO GO"
            size="md"
            G={distToGoCmd}
            position={distToGo}
          />
        </div>
        <div className="flex flex-col next-dist">
          <GenericReadout
            title="NEXT DIST"
            size="md"
            G={nextDistCmd}
            position={nextDist}
          />
        </div>
        <div className="flex flex-col speed-feed">
          <div className="flex flex-col">
            <BoxHeading text="SPINDLE" subText="S1" />
            <div className="flex flex-row">
              <div className="pr-5 text-3xl text-blue-800 grow">S</div>
              <div className="flex flex-col">
                <div className="self-end text-3xl">{spindleRpms}</div>
                <LoadMeter />
              </div>
              <div className="self-end pl-5">{spindleRpmPercent}%</div>
            </div>
          </div>
          <div className="flex flex-col">
            <BoxHeading text="FEED" subText={feedrateMode} />
            <div className="flex flex-row">
              <div className="pr-5 text-3xl text-blue-800 grow">S</div>
              <div className="flex flex-col">
                <div className="self-end text-3xl">{feedrate}</div>
                <LoadMeter />
              </div>
              <div className="self-end pl-5">{feedratePercent}%</div>
            </div>
          </div>
        </div>
        <div className="flex w-4 border-t border-l border-black spacer" />
        <div className="flex border-l border-black commands">
          <CurrentCommands
            nLine={currentN}
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
        <div className="bg-gray-400 program">
          <BoxHeading text={`O${programNum}`} subText={charArrows} />
          <ProgramDisplay lines={loadedProgram} />
        </div>
        <div className="flex flex-col border-t border-black curr-mach">
          <BoxHeading text="CURRENT MACHINING" />
          <div className="h-14" />
        </div>
      </div>
      <div className="grid grid-flow-col grid-cols-2 bg-gray-400">
        <WellSpacer />
        <CursorInputField />
      </div>
      <MenuBar menuItems={menuItems} />
    </div>
  );
};

export default ProgramPage;
