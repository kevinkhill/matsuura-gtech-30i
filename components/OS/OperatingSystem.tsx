/* eslint-disable react/destructuring-assignment */
import React, { Component, useState } from "react";

import {
  GraphPage,
  MessagesPage,
  OffsetsPage,
  PositionPage,
  SettingsPage,
  // SettingsPage,
  SystemPage
} from "./Pages";

import BootScreen from "./Screens/BootScreen";
import { DisplayStateStrings } from "@/types/DisplayState";
import ProgramPage from "./Pages/ProgramPage";

interface OsProps {
  displayState: DisplayStateStrings;
}

interface OsState {
  messages: [];
  displayState: DisplayStateStrings;
}

export default class OperatingSystem extends Component<OsProps, OsState> {
  state: OsState = {
    messages: [],
    displayState: "POWER_OFF"
  };

  constructor(props) {
    super(props);

    // const { initialState, displayState } = this.props;

    this.state.displayState = this.props.displayState;
  }

  // updateDisplay(displayState: DisplayStateStrings) {
  //   this.setState(state => {});
  // }

  render() {
    const { displayState, messages } = this.state;

    switch (displayState) {
      case "BOOTING":
        return <BootScreen />;
      case "GRAPH":
        return <GraphPage />;
      case "SYSTEM":
        return <SystemPage />;
      case "MESSAGES":
        return <MessagesPage messages={messages} />;
      case "POSITION":
        return <PositionPage />;
      case "PROGRAM":
        return <ProgramPage />;
      case "OFFSET":
        return <OffsetsPage />;
      case "SETTINGS":
        return <SettingsPage />;
      case "POWER_OFF":
      default:
        return <h1>Power is off...</h1>;
    }
  }
}
