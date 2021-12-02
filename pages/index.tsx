import Head from "next/head";

import Button from "../components/Button";
import PanelGroup from "../components/PanelGroup";
import StatusIndicators from "./StatusIndicators";

export default function Home() {
  return (
    <div className="m-auto container min-h-screen bg-black">
      <Head>
        <title>Matsuura Gtech 30i</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-rows-2 grid-cols-12">
        <PanelGroup className="col-span-3 h-28">
          <StatusIndicators />
        </PanelGroup>
        <PanelGroup className="h-28 p-1 col-span-3">
          <div className="grid grid-rows-2 grid-cols-3 gap-1">
            <Button text="handy" />
            <Button red text="stop" />
            <Button green text="action" />
            <Button text="gun" />
            <Button text="WOF" />
            <Button text="TLM" />
          </div>
        </PanelGroup>
        <PanelGroup className="h-28 p-1 col-span-3">
          <div className="grid grid-rows-2 grid-cols-3 gap-1">
            <Button red text="c/ng" />
            <Button text="c/tg" />
            <Button text="tsc" />
            <Button text="oilshower" />
            <Button text="conveyor" />
            <Button text="chipwash" />
          </div>
        </PanelGroup>
        <PanelGroup className="h-28 col-span-3">
          <p>spindle</p>
        </PanelGroup>
        <PanelGroup className="col-span-full">
          <div className="grid grid-flow-col">
            <PanelGroup className="col-span-8">
              <div className="flex flex-row justify-evenly gap-1 p-1">
                <Button text="1" />
                <Button text="2" />
                <Button text="3" />
                <Button text="4" />
                <Button text="5" />
                <Button text="6" />
                <Button text="7" />
                <Button text="8" />
              </div>
            </PanelGroup>
            <PanelGroup className="col-span-4">
              <div className="grid grid-flow-row">
                <PanelGroup className="flex flex-row justify-evenly gap-1 p-1">
                  <Button text="S/BLK" />
                  <Button text="M01" />
                  <Button text="BLK/SKP" />
                  <Button text="DR/RUN" />
                  <Button text="FN/SEL" />
                  <Button text="____" />
                </PanelGroup>
                <PanelGroup className="">
                  <p>overrides</p>
                </PanelGroup>
                <PanelGroup className="">
                  <div className="flex flex-auto">
                    <p>feed hold / cycle start</p>
                  </div>
                </PanelGroup>
              </div>
            </PanelGroup>
          </div>
        </PanelGroup>
      </div>
    </div>
  );
}
