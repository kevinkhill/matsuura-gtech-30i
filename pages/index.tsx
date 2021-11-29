import { useEffect } from "react";
import Head from "next/head";

import LED from "../components/LED";
import Button from "../components/Button";
import PanelGroup from "../components/PanelGroup";
import PanelIndicator from "../components/PanelIndicator";

export default function Home() {
  const leds = {
    thing1: false,
    thing2: true,
    thing3: false,
    thing4: false,
    thing5: true,
    thing6: false,
    thing7: true,
    thing8: true,
  };

  useEffect(() => {
    setInterval(() => {
      const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
      const n = rand(1, 8);
      const val = leds[`thing${n}`];
      console.log(n, val);
      leds[`thing${n}`] = !val;
    }, 1000);
    // console.log("useEffect");
  }, [""]);

  return (
    <div className="m-auto container w-full min-h-screen bg-black">
      <Head>
        <title>Matsuura Gtech 30i</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-rows-2 grid-cols-12">
        <PanelGroup className="col-span-3 h-28">
          <div className="grid grid-flow-row grid-cols-2">
            <PanelIndicator on={leds.thing1} label="thing1" />
            <PanelIndicator on={leds.thing2} label="thing2" />
            <PanelIndicator on={leds.thing3} label="thing3" />
            <PanelIndicator on={leds.thing4} label="thing4" />
            <PanelIndicator on={leds.thing5} label="thing5" />
            <PanelIndicator on={leds.thing6} label="thing6" />
            <PanelIndicator on={leds.thing7} label="thing7" />
            <PanelIndicator on={leds.thing8} label="thing8" />
          </div>
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
              <div>
                <p className="w-32">Things</p>
              </div>
            </PanelGroup>
            <PanelGroup className="col-span-4">
              <div className="grid grid-flow-row border-collapse">
                <PanelGroup className="flex flex-row justify-evenly space gap-1 p-1">
                  <Button text="" />
                  <Button text="" />
                  <Button text="" />
                  <Button text="" />
                  <Button text="" />
                  <Button text="" />
                </PanelGroup>
                <PanelGroup className="">
                  <p>overrides</p>
                </PanelGroup>
                <PanelGroup className="">
                  <div className="flex flex-auto">
                  {/* <LED size={6} /> */}
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
