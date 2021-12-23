/* eslint-disable react/destructuring-assignment */
import React, { Component, useState } from "react";
import { DisplayStateStrings } from "@/types/DisplayState";
import CurrentTime from "@/core/context/CurrentTime";

import GraphPage from "./Pages/GraphPage";
import SystemPage from "./Pages/SystemPage";
import OffsetsPage from "./Pages/OffsetsPage";
import ProgramPage from "./Pages/ProgramPage";
import MessagesPage from "./Pages/MessagesPage";
import PositionPage from "./Pages/PositionPage";
import SettingsPage from "./Pages/SettingsPage";
import BootScreen from "./Screens/BootScreen";
import AppSettings from "./Pages/AppSettings";
import HandyManPage from "./Pages/HandyManPage";

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

  constructor(props) {
    super(props);

    // this.state.displayState = this.props.displayState;
    this.getActivePage.bind(this);
  }

  // componentDidMount(): void {
  //   console.log(this.props.router.query);
  // }

  private getActivePage() {
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

  render() {
    return <CurrentTime.Provider>{this.getActivePage()}</CurrentTime.Provider>;
  }
}

export default OperatingSystem;
