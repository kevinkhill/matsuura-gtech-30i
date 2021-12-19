import React from "react";

import TitleBar from "./TitleBar";
import SoftKey from "./SoftKey";
import { KeyValues } from "../Keyboard/KeyMap";

interface MonitorProps {
  machineMode: KeyValues;
}

export default function Monitor({ machineMode }: MonitorProps) {
  const handleSoftKey = (key: string) => {
    console.log(key);
  };

  const content = (
    <div className="w-full h-full bg-sky-200">Screen Content</div>
  );

  return (
    <div className="px-5 py-2 panel-frame">
      <div className="flex flex-col gap-2">
        <div className="mb-8">
          <TitleBar />
        </div>
        <div className="flex flex-row gap-1">
          <div className="flex-grow ml-5 bg-black screen-border">
            <div className="flex flex-grow-0 h-auto overflow-y-auto">
              {content}
            </div>
          </div>
          <div className="flex flex-col gap-3 py-4 px-1.5 well-border">
            <div className="flex flex-col gap-1">
              <SoftKey onClick={handleSoftKey} value="a1" />
              <SoftKey onClick={handleSoftKey} value="a2" />
              <SoftKey onClick={handleSoftKey} value="a3" />
              <SoftKey onClick={handleSoftKey} value="a4" />
            </div>
            <div className="flex flex-col gap-1">
              <SoftKey onClick={handleSoftKey} value="a5" />
              <SoftKey onClick={handleSoftKey} value="a6" />
              <SoftKey onClick={handleSoftKey} value="a7" />
              <SoftKey onClick={handleSoftKey} value="a8" />
            </div>
            <div>
              <SoftKey onClick={handleSoftKey} value="a9" />
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-3 px-4 py-1.5 well-border">
          <div>
            <SoftKey onClick={handleSoftKey} value="<" />
          </div>
          <div className="flex gap-1">
            <SoftKey onClick={handleSoftKey} value="m1" />
            <SoftKey onClick={handleSoftKey} value="m2" />
            <SoftKey onClick={handleSoftKey} value="m3" />
            <SoftKey onClick={handleSoftKey} value="m4" />
            <SoftKey onClick={handleSoftKey} value="m5" />
          </div>
          <div className="flex gap-1">
            <SoftKey onClick={handleSoftKey} value="m6" />
            <SoftKey onClick={handleSoftKey} value="m7" />
            <SoftKey onClick={handleSoftKey} value="m8" />
            <SoftKey onClick={handleSoftKey} value="m9" />
            <SoftKey onClick={handleSoftKey} value="m10" />
          </div>
          <div>
            <SoftKey onClick={handleSoftKey} value=">" />
          </div>
        </div>
      </div>
    </div>
  );
}
