import React from "react";
import { KeyValues } from "@/types/keys";

import KeyMap from "./KeyMap";
import KeyboardKey from "./KeyboardKey";

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

  // const padding = "px-32 py-24";
  const padding = "p-2";

  return (
    <div className={`${padding} text-xs panel-frame`}>
      <div className="flex flex-row justify-around flex-1">
        <div className="flex flex-col gap-2">
          <WhiteKey value={KeyMap.RESET} />
          <div className="py-4">
            <PlainKey value={KeyMap.HELP} />
          </div>
          <PlainKey value={KeyMap.CAPS} />
          <PlainKey value={KeyMap.SHIFT} />
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
            <WhiteKey value={KeyMap.SEVEN} />
            <WhiteKey value={KeyMap.EIGHT} />
            <WhiteKey value={KeyMap.NINE} />
            <WhiteKey value={KeyMap.FOUR} />
            <WhiteKey value={KeyMap.FIVE} />
            <WhiteKey value={KeyMap.SIX} />
            <WhiteKey value={KeyMap.ONE} />
            <WhiteKey value={KeyMap.TWO} />
            <WhiteKey value={KeyMap.THREE} />
            <WhiteKey value={KeyMap.DASH} />
            <WhiteKey value={KeyMap.ZERO} />
            <WhiteKey value={KeyMap.DECIMAL} />
            <WhiteKey value={KeyMap.BLOCK_SKIP} />
            <WhiteKey value={KeyMap.EOB} />
            <PlainKey value={KeyMap.CANCEL} />
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
          <PlainKey value={KeyMap.OFF_SET} />
          <PlainKey value={KeyMap.CUSTOM_1} />
          <PlainKey value={KeyMap.SYSTEM} />
          <PlainKey value={KeyMap.MESSAGES} />
          <PlainKey value={KeyMap.GRAPH} />
          <PlainKey value={KeyMap.CUSTOM_2} />
        </div>
      </div>
    </div>
  );
}
