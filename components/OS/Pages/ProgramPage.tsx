import React, { useState } from "react";

import usePosition from "@/core/hooks/usePosition";
import { zeroPad } from "@/core/util";
import { Position } from "@/types/position";

import BoxHeading from "../Layout/BoxHeading";
import ActiveCodes from "./Program/ActiveCodes";
import CursorInputField from "./Program/CursorInputField";
import GenericReadout from "./Program/GenericReadout";
import LoadMeter from "./Program/LoadMeter";
import MenuBar from "./Program/MenuBar";
import ProgramDisplay from "./Program/ProgramDisplay";
import StatusBar from "./Program/StatusBar";
import WellSpacer from "./Program/WellSpacer";

interface ProgramPageProps {
  program: string[];
  machineMode: string;
  // cursorLine: number;
}

const ProgramPage = ({ program, machineMode }: ProgramPageProps) => {
  const cursorLine = 0;
  const [path, setPath] = useState("CNC_MEM/USER");
  const [title, setTitle] = useState(`MANUAL GUIDE (${path})`);
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

  const [feedrateMode, setFeedrateMode] = useState("INCH/MIN");
  const [programNum, setProgramNum] = useState(8100);
  const [currentTool, setCurrentTool] = useState(0);
  const [currentN, setCurrentN] = useState(zeroPad(0, 8));
  const [currentD, setCurrentD] = useState(178);
  const [currentH, setCurrentH] = useState(178);
  const [currentS, setCurrentS] = useState(15000);
  const [currentM, setCurrentM] = useState(5);
  const [currentFeedrate, setCurrentFeedrate] = useState(0.0);

  const [spindleRpms, setSpindleRpms] = useState(0);
  const [spindleRpmPercent, setSpindleRpmPercent] = useState(0);

  const [feedrate, setFeedrate] = useState(0);
  const [feedratePercent, setFeedratePercent] = useState(0);

  const [currentGcodes, setCurrentGcodes] = useState([
    1, 17, 40, 54, 80, 49, 90, 98, 69, 13.1
  ]);

  const [position, setPosition] = usePosition({
    X: 9.9137,
    Y: 15.9736,
    Z: 19.4815,
    B: 179.999
  });

  const [distToGo, setDistToGo] = usePosition();
  const [distToGoCmd, setDistToGoCmd] = useState(1);

  const [nextDist, setNextDist] = usePosition();
  const [nextDistCmd, setNextDistCmd] = useState(1);

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
      <StatusBar mode={machineMode} title={title} />
      <div id="program-screen" className="flex-grow">
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
          <ActiveCodes
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
          <ProgramDisplay cursorLine={cursorLine} lines={program} />
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
