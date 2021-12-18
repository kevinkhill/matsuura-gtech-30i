import { useState } from "react";
import Head from "next/head";

import Panel from "./panel";
import Monitor from "./monitor";
import Keyboard from "./keyboard";
import { KeyValues } from "../components/Keyboard/KeyMap";

interface DefaultProps {
  pageOnBoot: string;
  modeOnBoot: string;
}

const bootOptions = {
  pageOnBoot: "MSG",
  modeOnBoot: "PRG"
};

export default function Home({
  pageOnBoot,
  modeOnBoot
}: DefaultProps = bootOptions) {
  const [currentPage, setCurrentPage] = useState(pageOnBoot);
  const [currentMode, setCurrentMode] = useState(modeOnBoot);

  const keyHandler = (key: KeyValues) => {
    console.log("Key Pressed:", key);
    if (key.label === "") {
    }
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
        <Monitor controlPage={currentPage} machineMode={currentMode} />
        <Keyboard onKeypress={keyHandler} />
        <Panel
          onModeChange={onModeChange}
          onHandleAxisChange={onHandleAxisChange}
          onHandleIncrementChange={onHandleIncrementChange}
        />
      </div>
    </div>
  );
}
