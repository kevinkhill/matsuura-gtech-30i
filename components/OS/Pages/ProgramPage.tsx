import React, { useState } from "react";

import MenuBar from "../MenuBar";
import TopBar from "./TopBar";
import MenuContainer from "../MenuContainer";

const BoxHeading = ({ text }: { text: string }) => {
  return (
    <div className="px-2 mx-1 mt-0.5 text-gray-300 bg-blue-800">{text}</div>
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
    "&nbsp;",
    "MCHDRW",
    "SIMLAT"
  ]);

  const [path, setPath] = useState("CNC_MEM/USER");
  const [title, setTitle] = useState("MANUAL GUIDE");
  const [curentMode, setCurrentMode] = useState("MEM");
  const [position, setPosition] = useState({
    X: 9.9137,
    Y: 15.9736,
    Z: 19.4815,
    B: 179.999
  });

  return (
    <div className="flex flex-col text-black bg-gray-400 font-lcd grow">
      <TopBar mode={curentMode} title={title} path={path} />
      <div className="grid grid-flow-col grow">
        <div className="flex flex-col row-span-2 divide-y divide-black">
          <div className="flex-grow">
            <div className="px-1">
              <BoxHeading text="ACTUAL POS. (ABS.)" />
              <div className="flex flex-col">
                <div className="flex">
                  <div className="text-4xl text-blue-800 grow">X</div>
                  <div className="text-4xl">{position.X}</div>
                </div>
                <div className="flex">
                  <div className="text-4xl text-blue-800 grow">Y</div>
                  <div className="text-4xl">{position.Y}</div>
                </div>
                <div className="flex">
                  <div className="text-4xl text-blue-800 grow">Z</div>
                  <div className="text-4xl">{position.Z}</div>
                </div>
                <div className="flex">
                  <div className="text-4xl text-blue-800 grow">B</div>
                  <div className="text-4xl">{position.B}</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <BoxHeading text="CURRENT MACHINING" />
            <div className="h-14" />
          </div>
        </div>

        <div className="bg-indigo-300" />
        <div className="bg-orange-300">program</div>
      </div>
      <div className="grid grid-cols-2 text-gray-800 bg-pink-200 shrink">
        <div>spacer</div>
        <div>
          <div className="h-full m-1 bg-white">
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
