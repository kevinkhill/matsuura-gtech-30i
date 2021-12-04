import Head from "next/head";

import Button from "../components/Button";
import PanelGroup from "../components/PanelGroup";
import GridContainer from "../components/GridContainer";
import StatusIndicators from "../components/PanelGroups/StatusIndicators";
import HandyButtons from "../components/PanelGroups/HandyButtons";
import CoolantButtons from "../components/PanelGroups/CoolantButtons";
import ModeButtons from "./../components/PanelGroups/ModeButtons";
import ToggleButtons from "../components/PanelGroups/ToggleButtons";

export default function Home() {
  return (
    <div className="m-auto container min-h-screen bg-black">
      <Head>
        <title>Matsuura Gtech 30i</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* === Container === */}
      <div className="grid grid-flow-row grid-rows-2 min-h-screen">
        {/* === Top Group === */}
        <div className="grid grid-flow-col grid-cols-12">
          <PanelGroup className="col-span-3">
            <StatusIndicators />
          </PanelGroup>
          <PanelGroup className="col-span-3 -ml-0.5">
            <HandyButtons />
          </PanelGroup>
          <PanelGroup className="col-span-3 -ml-0.5">
            <CoolantButtons />
          </PanelGroup>
          <PanelGroup className="col-span-3 -ml-0.5">
            <p>spindle</p>
          </PanelGroup>
        </div>
        {/* === Bottom Group === */}
        <div className="grid grid-flow-col col-span-full -mt-0.5">
          <PanelGroup>
            <div className="grid grid-cols-12">
              {/* === Left Section === */}
              <div className="col-span-7 flex justify-end">
                <PanelGroup className="bg-gray-400 bg-opacity-100 w-56">
                  <ModeButtons />
                </PanelGroup>
              </div>

              {/* === Right Section === */}
              <div className="col-span-5 row-span-2">
                <PanelGroup className="grid grid-flow-row grid-rows-3">
                  <PanelGroup className="flex flex-row justify-evenly gap-1 p-1">
                    <ToggleButtons />
                  </PanelGroup>
                  <PanelGroup className="">
                    <p>overrides</p>
                  </PanelGroup>
                  <PanelGroup className="">
                    <div className="flex flex-auto">
                      <p>feed hold / cycle start</p>
                    </div>
                  </PanelGroup>
                </PanelGroup>
              </div>
            </div>
          </PanelGroup>
        </div>
      </div>
    </div>
  );
}
