import React, { useEffect, useState } from "react";
import Head from "next/head";
import { match } from "ts-pattern";

import { useRouter } from "next/router";
import { KeyValues } from "@/types/keys";
import KeyMap from "@/components/Keyboard/KeyMap";
import Monitor from "@/components/Monitor/Monitor";
import Keyboard from "@/components/Keyboard/Keyboard";
import MachineControl from "@/components/Control/MachineControl";
import OperatingSystem from "@/components/OS/OperatingSystem";
import { DisplayState, DisplayStateStrings } from "@/types/DisplayState";

const onModeChange = (mode: string) => {
  console.log("handle mode changed:", mode);
};

const onHandleIncrementChange = (selectedInc: string) => {
  console.log("handle increment changed:", selectedInc);
};

const onHandleAxisChange = (selectedAxis: string) => {
  console.log("handle axis changed:", selectedAxis);
};

const onSoftKey = (key: string) => {
  console.log("softkey:", key);
};

export default function Home() {
  const [showControls, setShowControls] = useState(false);
  const [displayState, setDisplayState] =
    useState<DisplayStateStrings>("POWER_OFF");

  /**
   * If there route param `screen=PROGRAM` then set it as the initial screen
   */
  const router = useRouter();
  const initScreen = router.query?.screen as DisplayStateStrings;
  useEffect(() => {
    if (Object.keys(DisplayState).includes(initScreen)) {
      setDisplayState(initScreen);
    }
  }, [initScreen]);

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

      <div className="pt-1 divide-y-2 divide-black">
        <Monitor onSoftKey={onSoftKey} content={os} />
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
