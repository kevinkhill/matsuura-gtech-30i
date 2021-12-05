import { useState } from "react";
import Head from "next/head";

import PanelGroup from "../components/PanelGroup";
import ModeButtons from "../components/PanelGroups/ModeButtons";
import HandyButtons from "../components/PanelGroups/HandyButtons";
import ToggleButtons from "../components/PanelGroups/ToggleButtons";
import CoolantButtons from "../components/PanelGroups/CoolantButtons";
import StatusIndicators from "../components/PanelGroups/StatusIndicators";
import TextInput from "../components/TextInput";

export default function Home() {
  const [showBg, setShowBg] = useState(false);

  return (
    <div className="m-auto container min-h-screen bg-black">
      <Head>
        <title>Matsuura Gtech 30i</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-40">
        <TextInput />
      </div>
      {/* === Container === */}
      <div className={`min-h-screen ${showBg ? "machine-panel" : ""}`}>
        {/* === Top Group === */}
        <div className="grid grid-flow-col grid-cols-4 h-28">
          <PanelGroup className="">
            <StatusIndicators />
          </PanelGroup>
          <PanelGroup p={1} className="-ml-0.5">
            <HandyButtons />
          </PanelGroup>
          <PanelGroup p={1} className="-ml-0.5">
            <CoolantButtons />
          </PanelGroup>
          <PanelGroup className="-ml-0.5">
            <p>spindle</p>
          </PanelGroup>
        </div>
        {/* === Bottom Group === */}
        <div className="grid grid-cols-12 -mt-0.5">
          {/* === Left Section === */}
          <PanelGroup className="flex justify-end col-span-7 h-48">
            <ModeButtons />
          </PanelGroup>

          {/* === Right Section === */}
          <div className="col-span-5 row-span-2">
            <div className="grid grid-flow-row grid-rows-3 -ml-0.5">
              <PanelGroup p={1} className="">
                <ToggleButtons __={[showBg, setShowBg]} />
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
