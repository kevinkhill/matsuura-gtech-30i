import React, { ReactNode } from "react";

import {
  GraphPage,
  MessagesPage,
  OffsetsPage,
  PositionPage,
  // SettingsPage,
  SystemPage
} from "./Pages";

import { ModeKeys } from "../Keyboard/KeyMap";

export default function PageFactory(label: string): ReactNode {
  const { GRAPH, SYSTEM, MESSAGES, POSITION, OFF_SET } = ModeKeys;

  const components = {
    [GRAPH.label]: GraphPage,
    [SYSTEM.label]: SystemPage,
    [MESSAGES.label]: MessagesPage,
    [POSITION.label]: PositionPage,
    [OFFSET_SETTINGS.label]: OffsetsPage
    // [OFFSET_SETTINGS.label]: SettingsPage
  };

  return <>{components[label] ?? <h1>Booting...</h1>}</>;
}
