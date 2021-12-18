import React from "react";
import Head from "next/head";

import KeyboardKey from "../components/Keyboard/KeyboardKey";
import KeyMap, { KeyValues, kv } from "../components/Keyboard/KeyMap";

export default function Keyboard({ onKeypress }) {
  const handler = (key: KeyValues) => {
    onKeypress(key);
  };

  const PlainKey = ({ value }) => (
    <KeyboardKey onClick={handler} value={value} />
  );

  const WhiteKey = ({ value }) => (
    <KeyboardKey white onClick={handler} value={value} />
  );

  return (
    <div className="container m-auto bg-black">
      <Head>
        <title>Matsuura Gtech 30i - Keyboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="px-5 py-2 text-xs bg-panel-gray h-96">
        <div className="flex flex-row justify-around flex-1">
          <div className="flex flex-col gap-2">
            <div className="">
              <WhiteKey value={kv("RESET")} />
            </div>
            <div className="py-4">
              <PlainKey value={kv("HELP")} />
            </div>
            <div className="">
              <PlainKey value={kv("ABC/abc")} />
            </div>
            <div className="">
              <PlainKey value={kv("SHIFT")} />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-1">
            <WhiteKey value={KeyMap.O} />
            <WhiteKey value={KeyMap.N} />
            <WhiteKey value={KeyMap.G} />
            <WhiteKey value={KeyMap.P} />
            <WhiteKey value={KeyMap.X} />
            <WhiteKey value={KeyMap.Y} />
            <WhiteKey value={KeyMap.Z} />
            <WhiteKey value={KeyMap.Q} />
            <WhiteKey value={KeyMap.I} />
            <WhiteKey value={KeyMap.J} />
            <WhiteKey value={KeyMap.K} />
            <WhiteKey value={KeyMap.R} />
            <WhiteKey value={KeyMap.M} />
            <WhiteKey value={KeyMap.S} />
            <WhiteKey value={KeyMap.T} />
            <WhiteKey value={KeyMap.L} />
            <WhiteKey value={KeyMap.F} />
            <WhiteKey value={KeyMap.D} />
            <WhiteKey value={KeyMap.H} />
            <WhiteKey value={KeyMap.B} />
          </div>
          <div className="className">
            <div className="grid grid-cols-3 gap-1">
              <WhiteKey value={kv("7")} />
              <WhiteKey value={kv("8")} />
              <WhiteKey value={kv("9")} />
              <WhiteKey value={kv("4")} />
              <WhiteKey value={kv("5")} />
              <WhiteKey value={kv("6")} />
              <WhiteKey value={kv("1")} />
              <WhiteKey value={kv("2")} />
              <WhiteKey value={kv("3")} />
              <WhiteKey value={kv("-")} />
              <WhiteKey value={kv("0")} />
              <WhiteKey value={kv(".")} />
              <WhiteKey value={kv("/")} />
              <WhiteKey value={kv("EOB")} />
              <PlainKey value={kv("//CAN")} />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <PlainKey value={KeyMap.ALTER} />
            <PlainKey value={KeyMap.INSERT} />
            <PlainKey value={KeyMap.DELETE} />
            <div className="justify-self-end">
              <PlainKey value={KeyMap.INPUT} />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-around flex-1 mt-5">
          <div>
            <div className="grid grid-cols-2 grid-rows-2 gap-1">
              <PlainKey value={KeyMap.CTRL} />
              <PlainKey value={KeyMap.AUX} />
              <PlainKey value={KeyMap.ALT} />
              <PlainKey value={KeyMap.TAB} />
            </div>
          </div>

          <div className="grid grid-flow-col grid-cols-4 grid-rows-2 gap-1">
            <PlainKey value={KeyMap.PAGE_UP} />
            <PlainKey value={KeyMap.PAGE_DOWN} />
            <div className="row-span-2">
              <PlainKey value={KeyMap.LEFT} />
            </div>
            <PlainKey value={KeyMap.UP} />
            <PlainKey value={KeyMap.DOWN} />
            <div className="row-span-2">
              <PlainKey value={KeyMap.RIGHT} />
            </div>
          </div>

          <div className="grid grid-cols-4 grid-rows-2 gap-1">
            <PlainKey value={KeyMap.POSITION} />
            <PlainKey value={KeyMap.PROGRAM} />
            <PlainKey value={KeyMap.OFFSET_SETTINGS} />
            <PlainKey value={KeyMap.CUSTOM_1} />
            <PlainKey value={KeyMap.SYSTEM} />
            <PlainKey value={KeyMap.MESSAGES} />
            <PlainKey value={KeyMap.GRAPH} />
            <PlainKey value={KeyMap.CUSTOM_2} />
          </div>
        </div>
      </div>
    </div>
  );
}
