import React, { useEffect, useState } from "react";

import { useCurrentTime, usePosition } from "@/core/hooks";
import OffsetFactory from "@/core/OffsetFactory";
import { intRange, toFixed, zeroPad } from "@/core/util";
import { OffsetRegister } from "@/types/offsets";

import PositionReadout from "./Offsets/PositionReadout";
import MenuBar from "./Program/MenuBar";

interface OffsetsPageProps {
  machineMode: string;
}

interface OffsetGridRowProps {
  register: OffsetRegister;
  // lengthGeom?: number;
  // lengthWear?: number;
  // diamGeom?: number;
  // diamWear?: number;
}

export const border =
  "border-t border-b border-l border-r border-b-black border-r-black border-t-white border-l-white";

const OffsetGridRow = ({ register }: OffsetGridRowProps) => {
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

const OffsetsPage = ({ machineMode }: OffsetsPageProps) => {
  const [currentTime, setCurrentTime] = useCurrentTime({ seconds: true });

  const [machinePos, setMachinePos] = usePosition();
  const [relativePos, setRelativePos] = usePosition();
  const [absolutePos, setAbsolutePos] = usePosition();

  const [screenTitle, setScreenTitle] = useState("OFFSETS");
  const [programTitle, setProgramTitle] = useState("DAILY SPINDLE WAR~");
  const [programNumber, setProgramNumber] = useState(8100);
  const [nLine, setNline] = useState(zeroPad(0, 5));

  const [offsets, setOffsets] = useState(
    OffsetFactory.createRegisterRange(1, 16)
  );

  const [menuItems, setMenuItems] = useState([
    "",
    "",
    "",
    "",
    "",
    "OFFSET",
    "SETTING",
    " WORK ",
    "",
    "(OPRT)"
  ]);

  useEffect(() => {
    const id = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(id);
  });

  return (
    <div className="flex flex-col flex-grow text-sm text-black bg-gray-400 font-lcd">
      <div className="flex flex-row justify-between px-0.5 bg-cyan-700">
        <p className="">{screenTitle}</p>
        <p className="place-self-end">{programTitle}</p>
        <div className="grid grid-cols-2">
          <p className="text-3xl">O{programNumber}</p>
          <p className="text-3xl">N{nLine}</p>
        </div>
      </div>
      <div className={`flex flex-row flex-grow ${border}`}>
        <div className={`pr-8 flex-grow ${border}`}>
          <div className="flex flex-row justify-around ml-4">
            <div className="text-blue-700">(LENGTH)</div>
            <div className="text-blue-700">(RADIUS)</div>
          </div>
          <div className="flex flex-row justify-around ml-8 mr-4 text-center">
            <div className="text-blue-700">NO.</div>
            <div className="flex-grow text-blue-700">GEOM</div>
            <div className="flex-grow text-blue-700">WEAR</div>
            <div className="flex-grow text-blue-700">GEOM</div>
            <div className="flex-grow text-blue-700">WEAR</div>
          </div>
          <div className="flex flex-col px-4">
            {offsets.map(offset => (
              <OffsetGridRow key={zeroPad(offset.index, 3)} register={offset} />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <PositionReadout heading="RELATIVE" position={relativePos} />
          <PositionReadout heading="ABSOLUTE" position={absolutePos} />
          <PositionReadout heading="MACHINE" position={machinePos} />
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="flex flex-col justify-between gap-5">
          <div className="bg-cyan-500">
            <span className="pl-0.5 text-blue-900">A</span> &gt;_
          </div>

          <div className="flex flex-row pr-2">
            <div className={`px-2 flex flex-row gap-4 ${border}`}>
              <div>{machineMode}</div>
              <div>****</div>
              <div>***</div>
              <div>***</div>
            </div>
            <div className={`w-8 ${border}`} />
            <div className={`px-2 ${border}`}>{currentTime}</div>
            <div className={`w-16 ${border}`} />
          </div>
        </div>
      </div>
      <MenuBar menuItems={menuItems} />
    </div>
  );
};

export default OffsetsPage;
