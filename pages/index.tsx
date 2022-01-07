import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { match } from "ts-pattern";

import MachineControl from "@/components/Control/MachineControl";
import Keyboard from "@/components/Keyboard/Keyboard";
import KeyMap from "@/components/Keyboard/KeyMap";
import Monitor from "@/components/Monitor/Monitor";
import OperatingSystem from "@/components/OS/OperatingSystem";
import useToggle from "@/core/hooks/useToggle";
import { DisplayState, DisplayStateStrings } from "@/types/DisplayState";
import { KeyValues } from "@/types/keys";

const onHandleIncrementChange = (selectedInc: string) => {
  console.log("handle increment changed:", selectedInc);
};

const onHandleAxisChange = (selectedAxis: string) => {
  console.log("handle axis changed:", selectedAxis);
};

export default function Home() {
  const router = useRouter();

  const [machineMode, setMachineMode] = useState("MEM");
  const [showControls, toggleShowControls] = useToggle(false);
  const [displayState, setDisplayState] =
    useState<DisplayStateStrings>("POWER_OFF");

  const initScreen = router.query?.screen as DisplayStateStrings;

  const onModeChange = (mode: string) => {
    setMachineMode(mode);
  };

  const onSoftKey = (key: string) => {
    if (key === "a9") {
      toggleShowControls();
    }

    console.log("softkey:", key);
  };

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
    if (Object.keys(DisplayState).includes(initScreen)) {
      setDisplayState(initScreen);
    }
  }, [initScreen]);

  // useEffect(() => {
  //   router.push(`?screen=${displayState}`);
  // }, [displayState, router]);

  return (
    <div className="container m-auto bg-black">
      <Head>
        <title>Matsuura Gtech 30i</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="pt-1 divide-y-2 divide-black">
        <Monitor
          onSoftKey={onSoftKey}
          content={
            <OperatingSystem
              machineMode={machineMode}
              displayState={displayState}
            />
          }
        />
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
