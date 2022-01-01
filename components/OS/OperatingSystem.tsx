import React, { useState } from "react";
import { match } from "ts-pattern";

import { DisplayStateStrings } from "@/types/DisplayState";

import AppSettings from "./Pages/AppSettings";
import GraphPage from "./Pages/GraphPage";
import HandyManPage from "./Pages/HandyManPage";
import MessagesPage from "./Pages/MessagesPage";
import OffsetsPage from "./Pages/OffsetsPage";
import PositionPage from "./Pages/PositionPage";
import ProgramPage from "./Pages/ProgramPage";
import SettingsPage from "./Pages/SettingsPage";
import SystemPage from "./Pages/SystemPage";
import BootScreen from "./Screens/BootScreen";

interface OsProps {
  machineMode: string;
  displayState: DisplayStateStrings;
}

const OperatingSystem = ({ displayState, machineMode }: OsProps) => {
  const [messages, setMessages] = useState(["Testing", "Hi!", "Tacos"]);
  const [program, setProgram] = useState([
    "%",
    "O1234 (SIMPLE)",
    "",
    `N43 ( #14 - .182" DRILL, CARB, TSC )`,
    "T43 M6",
    `M01 ( #14 - .182" DRILL, CARB, TSC )`,
    "G0 G90 G55",
    "X1.75 Y.19 S10495 M3",
    "M50 (TSC COOLANT ON)",
    "G4 X2.",
    "G43 H43 Z1. T44",
    "G98 G81 Z-.5631 R.1 F83.96",
    "X.75",
    "Y1.81",
    "X1.75",
    "G80",
    "M5",
    "G91 G28 Z0.",
    "M30",
    "%"
  ]);

  return match(displayState)
    .with("BOOTING", () => <BootScreen />)
    .with("PROGRAM", () => (
      <ProgramPage program={program} machineMode={machineMode} />
    ))
    .with("POSITION", () => <PositionPage />)
    .with("OFFSET", () => <OffsetsPage />)
    .with("SETTINGS", () => <SettingsPage />)
    .with("MESSAGES", () => <MessagesPage messages={messages} />)
    .with("SYSTEM", () => <SystemPage />)
    .with("GRAPH", () => <GraphPage />)
    .with("CUSTOM_1", () => <HandyManPage />)
    .with("CUSTOM_2", () => <AppSettings messages={[]} />)
    .with("POWER_OFF", () => <h1>Power is off...</h1>)
    .exhaustive();
};

export default OperatingSystem;
