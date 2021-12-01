import { useEffect, useState } from "react";
import Head from "next/head";

import { rand } from "../core/util";
import Button from "../components/Button";
import PanelGroup from "../components/PanelGroup";
import PanelIndicator from "../components/PanelIndicator";

export default function Home() {
  const [alarm, setAlarm] = useState(false);
  const [spOvrld, setSpOverload] = useState(true);
  const [tcInPos, setTcInPos] = useState(false);
  const [tcActvty, setTcActvty] = useState(false);
  const [apcPos, setApcPos] = useState(true);
  const [m0m1, setM0M1] = useState(false);
  const [thing7, setThing7] = useState(true);
  const [thing8, setThing8] = useState(false);

  const fns = [
    setAlarm,
    setSpOverload,
    setTcInPos,
    setTcActvty,
    setApcPos,
    setM0M1,
    setThing7,
    setThing8,
  ];

  useEffect(() => {
    setInterval(() => {
      const toggler = fns[rand(0, 7)];
      toggler((val) => !val);
    }, 1000);
  }, []);

  return (
    <div className="m-auto container min-h-screen bg-black">
      <Head>
        <title>Matsuura Gtech 30i</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-rows-2 grid-cols-12">
        <PanelGroup className="col-span-3 h-28">
          <div className="grid grid-flow-row grid-cols-2">
            <PanelIndicator on={alarm} label="ALARM" />
            <PanelIndicator on={spOvrld} label="SP OVRLD" />
            <PanelIndicator on={tcInPos} label="TC IN POS" />
            <PanelIndicator on={tcActvty} label="TC ACTV" />
            <PanelIndicator on={apcPos} label="APC POS" />
            <PanelIndicator on={m0m1} label="M0/M1" />
            <PanelIndicator on={thing7} label="thing7" />
            <PanelIndicator on={thing8} label="thing8" />
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
