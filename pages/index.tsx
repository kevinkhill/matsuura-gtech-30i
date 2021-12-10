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
import DirectionButtons from "../components/PanelGroups/DirectionButtons";
import AxisButtons from "../components/PanelGroups/AxisButtons";

export default function Home() {
  const [showBg, setShowBg] = useState(false);

  const buttonHandler: ButtonGroupProps["onToggle"] = (
    group,
    button,
    state
  ) => {
    if (button === "__") setShowBg(state);

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
        <div className="grid grid-flow-col">
          <PanelGroup className="col-span-4">
            <StatusIndicators
              ALARM={false}
              M0_M1={false}
              thing8={false}
              SENSOR_TOUCH={false}
              TC_IN_MOTION={false}
              TC_IN_POSITION={false}
              APC_IN_POSITION={false}
              SPINDLE_OVERLOAD={false}
            />
          </PanelGroup>
          <PanelGroup p={1} className="col-span-3 -ml-0.5">
            <HandyButtons onToggle={buttonHandler} />
          </PanelGroup>
          <PanelGroup p={1} className="col-span-3 -ml-0.5">
            <CoolantButtons onToggle={buttonHandler} />
          </PanelGroup>
          <PanelGroup className="col-span-4 -ml-0.5">
            <SpindleGroup onToggle={buttonHandler} />
          </PanelGroup>
        </div>
        {/* === Bottom Group === */}
        <div className="grid grid-cols-12 -mt-0.5">
          {/* === Left Section === */}
          <PanelGroup className="col-span-7 h-80">
            <div className="grid h-full grid-flow-col grid-cols-2">
              <div className="bg-yellow-100">1</div>
              <div className="flex flex-col bg-red-100">
                <div className="bg-red-100">
                  <ModeButtons onToggle={buttonHandler} />
                </div>
                <div>
                  <AxisButtons onToggle={buttonHandler} />
                </div>
                <div className="flex items-end justify-end h-full bg-blue-100">
                  <DirectionButtons onToggle={buttonHandler} />
                </div>
              </div>
            </div>
          </PanelGroup>

          {/* === Right Section === */}
          <div className="col-span-5 row-span-2">
            <div className="flex bg-green-300 h-full flex-col -ml-0.5">
              <PanelGroup p={1} className="">
                <ToggleButtons onToggle={buttonHandler} />
              </PanelGroup>
              <PanelGroup className="h-1/2 -mt-0.5">
                <p>overrides</p>
              </PanelGroup>
              <PanelGroup className="h-1/2 -mt-0.5">
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
