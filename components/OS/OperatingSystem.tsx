/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import { DisplayStateStrings } from "@/types/DisplayState";

import GraphPage from "./Pages/GraphPage";
import SystemPage from "./Pages/SystemPage";
import OffsetsPage from "./Pages/OffsetsPage";
import ProgramPage from "./Pages/ProgramPage";
import MessagesPage from "./Pages/MessagesPage";
import PositionPage from "./Pages/PositionPage";
import SettingsPage from "./Pages/SettingsPage";
import AppSettings from "./Pages/AppSettings";
import HandyManPage from "./Pages/HandyManPage";
import BootScreen from "./Screens/BootScreen";

interface OsProps {
  displayState: DisplayStateStrings;
}

interface OsState {
  messages: [];
}

class OperatingSystem extends Component<OsProps, OsState> {
  state: OsState = {
    messages: []
  };

  render() {
    const { messages } = this.state;
    const { displayState } = this.props;

    switch (displayState) {
      case "BOOTING":
        return <BootScreen />;
      case "PROGRAM":
        return <ProgramPage />;
      case "POSITION":
        return <PositionPage />;
      case "OFFSET":
        return <OffsetsPage />;
      case "SETTINGS":
        return <SettingsPage />;
      case "MESSAGES":
        return <MessagesPage messages={messages} />;
      case "SYSTEM":
        return <SystemPage />;
      case "GRAPH":
        return <GraphPage />;
      case "CUSTOM_1":
        return <HandyManPage />;
      case "CUSTOM_2":
        return <AppSettings messages={[]} />;
      case "POWER_OFF":
        return <h1>Power is off...</h1>;
      default:
        return <h1 className="text-red-600">EEEEEEEEERRRRRRRRoOOOR</h1>;
    }
  }
}

export default OperatingSystem;
