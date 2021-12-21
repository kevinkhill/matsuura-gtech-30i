import React, { useEffect, useState } from "react";
import { createContainer } from "unstated-next";
import { match } from "ts-pattern";
import Head from "next/head";

import { KeyValues } from "@/types/keys";
import KeyMap from "@/components/Keyboard/KeyMap";
import Monitor from "@/components/Monitor/Monitor";
import Keyboard from "@/components/Keyboard/Keyboard";
import MachineControl from "@/components/Control/MachineControl";
import OperatingSystem from "@/components/OS/OperatingSystem";
import { DisplayStateStrings } from "@/types/DisplayState";

const onModeChange = (mode: string) => {
  console.log("handle mode changed:", mode);
};

const onHandleIncrementChange = (selectedInc: string) => {
  console.log("handle increment changed:", selectedInc);
};

const onHandleAxisChange = (selectedAxis: string) => {
  console.log("handle axis changed:", selectedAxis);
};

export default function Home() {
  const [showControls, setShowControls] = useState(false);
  const [displayState, setDisplayState] =
    useState<DisplayStateStrings>("BOOTING");

  const onKeyboardKey = (key: KeyValues) => {
    console.log("Keyboard Key Pressed:", key);

    if (key.group === "MODE") {
      setDisplayState(prevState => {
        return match<string, DisplayStateStrings>(key.label)
          .with(KeyMap.GRAPH.label, () => "GRAPH")
          .with(KeyMap.SYSTEM.label, () => "SYSTEM")
          .with(KeyMap.PROGRAM.label, () => "PROGRAM")
          .with(KeyMap.CUSTOM_1.label, () => "CUSTOM_1")
          .with(KeyMap.CUSTOM_2.label, () => "CUSTOM_2")
          .with(KeyMap.POSITION.label, () => "POSITION")
          .with(KeyMap.MESSAGES.label, () => "MESSAGES")
          .with(KeyMap.OFF_SET.label, () => {
            return prevState === "OFFSET" ? "SETTINGS" : "OFFSET";
          })
          .run();
      });
    }
  };

  useEffect(() => {
    console.log({ displayState });
  }, [displayState]);

  const os = <OperatingSystem displayState={displayState} />;

  return (
    <div className="container m-auto bg-black">
      <Head>
        <title>Matsuura Gtech 30i</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="pt-5">
        <Monitor content={os} />
        <Keyboard onKeypress={onKeyboardKey} />
        {showControls && (
          <MachineControl
            onModeChange={onModeChange}
            onHandleAxisChange={onHandleAxisChange}
            onHandleIncrementChange={onHandleIncrementChange}
          />
        )}
      </div>
    </div>
  );
}
