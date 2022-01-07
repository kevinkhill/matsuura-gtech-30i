import React, { useState } from "react";

import SoftKeyContext from "@/core/context/SoftKeyContext";
import { useDataStore } from "@/core/store/context";

// eslint-disable-next-line import/no-named-default
import { default as Key } from "./SoftKey";
import TitleBar from "./TitleBar";

interface MonitorProps {
  content: JSX.Element;
  onSoftKey: (key: string) => void;
}

export default function Monitor({ content, onSoftKey }: MonitorProps) {
  // const { activateItem } = useDataStore();

  const handleSoftKey = (key: string) => {
    onSoftKey(key);
  };

  function SoftKey({
    value,
    group,
    index
  }: {
    value: string;
    group: "main" | "aux";
    index: number;
  }) {
    return (
      <SoftKeyContext.Consumer>
        {({ callMenuItem }) => (
          <Key onClick={() => callMenuItem(group, index)} value={value} />
        )}
      </SoftKeyContext.Consumer>
    );
  }

  return (
    <div className="px-5 py-2 panel-frame">
      <div className="flex flex-col gap-2">
        <div className="mb-8">
          <TitleBar />
        </div>
        <div className="flex flex-row h-[550px] gap-2">
          <div className="flex flex-grow ml-8 bg-black screen-border">
            {content}
          </div>
          <div className="flex flex-col justify-between py-2 px-1.5 well-border">
            <div className="flex flex-col gap-1">
              <SoftKey value="a1" group="aux" index={1} />
              <SoftKey value="a2" group="aux" index={2} />
              <SoftKey value="a3" group="aux" index={3} />
              <SoftKey value="a4" group="aux" index={4} />
            </div>
            <div className="flex flex-col gap-1">
              <SoftKey value="a5" group="aux" index={5} />
              <SoftKey value="a6" group="aux" index={6} />
              <SoftKey value="a7" group="aux" index={7} />
              <SoftKey value="a8" group="aux" index={8} />
            </div>
            <div>
              <SoftKey value="a9" group="aux" index={9} />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between px-2 py-1.5 mr-8 well-border">
          <div>
            <SoftKey group="main" value="<" index={0} />
          </div>
          <div className="flex flex-row gap-3">
            <SoftKey value="m1" group="main" index={1} />
            <SoftKey value="m2" group="main" index={2} />
            <SoftKey value="m3" group="main" index={3} />
            <SoftKey value="m4" group="main" index={4} />
            <SoftKey value="m5" group="main" index={5} />
          </div>
          <div className="flex flex-row gap-3">
            <SoftKey value="m6" group="main" index={6} />
            <SoftKey value="m7" group="main" index={7} />
            <SoftKey value="m8" group="main" index={8} />
            <SoftKey value="m9" group="main" index={9} />
            <SoftKey value="m10" group="main" index={10} />
          </div>
          <div>
            <SoftKey group="main" value=">" index={11} />
          </div>
        </div>
      </div>
    </div>
  );
}
