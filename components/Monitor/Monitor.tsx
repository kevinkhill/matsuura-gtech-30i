import React from "react";

// eslint-disable-next-line import/no-named-default
import { default as Key } from "./SoftKey";
import TitleBar from "./TitleBar";

interface MonitorProps {
  content: JSX.Element;
  onSoftKey: (key: string) => void;
}

export default function Monitor({ content, onSoftKey }: MonitorProps) {
  // This could be removed if nothing needs to be added from monitor handler
  const handleSoftKey = (key: string) => {
    onSoftKey(key);
  };

  const SoftKey = ({ value }) => <Key onClick={handleSoftKey} value={value} />;

  return (
    <div className="px-5 py-2 panel-frame">
      <div className="flex flex-col gap-2">
        <div className="mb-8">
          <TitleBar />
        </div>
        <div className="flex flex-row gap-1">
          <div className="ml-5 bg-black grow screen-border">
            <div className="flex h-full">{content}</div>
          </div>
          <div className="flex flex-col gap-3 py-4 px-1.5 well-border">
            <div className="flex flex-col gap-1">
              <SoftKey value="a1" />
              <SoftKey value="a2" />
              <SoftKey value="a3" />
              <SoftKey value="a4" />
            </div>
            <div className="flex flex-col gap-1">
              <SoftKey value="a5" />
              <SoftKey value="a6" />
              <SoftKey value="a7" />
              <SoftKey value="a8" />
            </div>
            <div>
              <SoftKey value="a9" />
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-3 px-4 py-1.5 well-border">
          <div>
            <SoftKey value="<" />
          </div>
          <div className="flex gap-1">
            <SoftKey value="m1" />
            <SoftKey value="m2" />
            <SoftKey value="m3" />
            <SoftKey value="m4" />
            <SoftKey value="m5" />
          </div>
          <div className="flex gap-1">
            <SoftKey value="m6" />
            <SoftKey value="m7" />
            <SoftKey value="m8" />
            <SoftKey value="m9" />
            <SoftKey value="m10" />
          </div>
          <div>
            <SoftKey value=">" />
          </div>
        </div>
      </div>
    </div>
  );
}
