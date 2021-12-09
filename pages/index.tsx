import { useState } from "react";
import Head from "next/head";

import TextInput from "../components/TextInput";
import PanelGroup from "../components/PanelGroup";
import { ButtonGroupProps } from "../components/ButtonGroup";
import ModeButtons from "../components/PanelGroups/ModeButtons";
import HandyButtons from "../components/PanelGroups/HandyButtons";
import SpindleGroup from "../components/PanelGroups/SpindleGroup";
import ToggleButtons from "../components/PanelGroups/ToggleButtons";
import CoolantButtons from "../components/PanelGroups/CoolantButtons";
import StatusIndicators from "../components/PanelGroups/StatusIndicators";

export default function Home() {
  const [showBg, setShowBg] = useState(false);

  const handleButton: ButtonGroupProps["onToggle"] = (group, button, state) => {
    if (button === "__") {
      setShowBg(state);
    }
    console.log(group, button, state);
  };

  return (
    <div className="container min-h-screen m-auto bg-black">
      <Head>
        <title>Matsuura Gtech 30i</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-32">
        <TextInput />
      </div>
      {/* === Container === */}
      <div className={`min-h-screen ${showBg ? "machine-panel" : ""}`}>
        {/* === Top Group === */}
        <div className="grid grid-flow-col h-28">
          <PanelGroup className="col-span-4">
            <StatusIndicators
              ALARM={false}
              SPINDLE_OVERLOAD={false}
              TC_IN_POSITION={false}
              TC_IN_MOTION={false}
              APC_IN_POSITION={false}
              M0_M1={false}
              SENSOR_TOUCH={false}
              thing8={false}
            />
          </PanelGroup>
          <PanelGroup p={1} className="col-span-3 -ml-0.5">
            <HandyButtons onToggle={handleButton} />
          </PanelGroup>
          <PanelGroup p={1} className="col-span-3 -ml-0.5">
            <CoolantButtons onToggle={handleButton} />
          </PanelGroup>
          <PanelGroup className="col-span-4 -ml-0.5">
            <SpindleGroup onToggle={handleButton} />
          </PanelGroup>
        </div>
        {/* === Bottom Group === */}
        <div className="grid grid-cols-12 -mt-0.5">
          {/* === Left Section === */}
          <PanelGroup className="flex justify-end h-48 col-span-7">
            <ModeButtons onToggle={handleButton} />
          </PanelGroup>

          {/* === Right Section === */}
          <div className="col-span-5 row-span-2">
            <div className="grid grid-flow-row grid-rows-3 -ml-0.5">
              <PanelGroup p={1} className="">
                <ToggleButtons onToggle={handleButton} />
              </PanelGroup>
              <PanelGroup className="-mt-0.5">
                <p>overrides</p>
              </PanelGroup>
              <PanelGroup className="-mt-0.5">
                <div className="flex flex-auto">
                  <p>feed hold / cycle start</p>
                </div>
              </PanelGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
