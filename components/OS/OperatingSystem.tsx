/* eslint-disable react/destructuring-assignment */
import React, { Component, useState } from "react";
import { DisplayStateStrings } from "@/types/DisplayState";

import BootScreen from "./Screens/BootScreen";
import ProgramPage from "./Pages/ProgramPage";
import GraphPage from "./Pages/GraphPage";
import MessagesPage from "./Pages/MessagesPage";
import OffsetsPage from "./Pages/OffsetsPage";
import PositionPage from "./Pages/PositionPage";
import SettingsPage from "./Pages/SettingsPage";
import SystemPage from "./Pages/SystemPage";

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

  // constructor(props) {
  //   super(props);

  //   this.state.displayState = this.props.displayState;
  // }

  // componentDidMount(): void {
  //   console.log(this.props.router.query);
  // }

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
        return <h1>Custom 1</h1>;
      case "CUSTOM_2":
        return <h1>Custom 2</h1>;
      case "POWER_OFF":
        return <h1>Power is off...</h1>;
      default:
        return <h1>EEEEEEEEERRRRRRRRoOOOR</h1>;
    }
  }
}

export default OperatingSystem;
