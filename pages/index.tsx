import { useState } from "react";
import Head from "next/head";

import Monitor from "../components/Monitor/Monitor";
import Keyboard from "../components/Keyboard/Keyboard";
import MachineControl from "../components/Control/MachineControl";
import KeyMap, { KeyValues } from "../components/Keyboard/KeyMap";

export default function Home() {
  const [machineMode, setMachineMode] = useState<KeyValues>(KeyMap.MESSAGES);

  const onKeyboardKey = (key: KeyValues) => {
    console.log("Key Pressed:", key);

    if (key.group === "MODE") setMachineMode(key);
  };

  const onModeChange = (mode: string) => {
    console.log("handle mode changed:", mode);
  };

  const onHandleIncrementChange = (selectedInc: string) => {
    console.log("handle increment changed:", selectedInc);
  };

  const onHandleAxisChange = (selectedAxis: string) => {
    console.log("handle axis changed:", selectedAxis);
  };

  return (
    <div className="container m-auto bg-black">
      <Head>
        <title>Matsuura Gtech 30i</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="pt-5">
        <Monitor machineMode={machineMode} />
        <Keyboard onKeypress={onKeyboardKey} />
        <MachineControl
          onModeChange={onModeChange}
          onHandleAxisChange={onHandleAxisChange}
          onHandleIncrementChange={onHandleIncrementChange}
        />
      </div>
    </div>
  );
}
