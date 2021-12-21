const DisplayState = {
  GRAPH: "GRAPH",
  OFFSET: "OFFSET",
  SYSTEM: "SYSTEM",
  PROGRAM: "PROGRAM",
  BOOTING: "BOOTING",
  SETTINGS: "SETTINGS",
  MESSAGES: "MESSAGES",
  POSITION: "POSITION",
  CUSTOM_1: "CUSTOM_1",
  CUSTOM_2: "CUSTOM_2",
  POWER_OFF: "POWER_OFF"
};

type DisplayStateStrings = keyof typeof DisplayState;

export { DisplayState };
export type { DisplayStateStrings };
