type KeyGroup =
  | "MODE"
  | "EDIT"
  | "NAV"
  | "ALPHA"
  | "NUMBER"
  | "SYMBOL"
  | "FUNC";

export interface KeyValues {
  group: KeyGroup;
  label: string;
  shftLabel?: string;
}

function defineKey(group: KeyGroup, label = "", shftLabel = "") {
  return { group, label, shftLabel };
}

const SymbolKeys = {
  CTRL: defineKey("SYMBOL", "EOB"),
  CTRL: defineKey("SYMBOL", "/")
};

const FuncKeys = {
  CTRL: defineKey("FUNC", "CTRL"),
  AUX: defineKey("FUNC", "AUX"),
  ALT: defineKey("FUNC", "ALT"),
  TAB: defineKey("FUNC", "TAB")
};

const EditKeys = {
  ALTER: defineKey("EDIT", "ALTER"),
  INPUT: defineKey("EDIT", "INPUT"),
  INSERT: defineKey("EDIT", "INSERT"),
  DELETE: defineKey("EDIT", "DELETE")
};

const NavKeys = {
  UP: defineKey("NAV", "^"),
  DOWN: defineKey("NAV", "v"),
  LEFT: defineKey("NAV", "<"),
  RIGHT: defineKey("NAV", ">"),
  PAGE_UP: defineKey("NAV", "PAGE^"),
  PAGE_DOWN: defineKey("NAV", "PAGEv")
};

const ModeKeys = {
  SYSTEM: defineKey("MODE", "SYS"),
  GRAPH: defineKey("MODE", "GRAPH"),
  MESSAGES: defineKey("MODE", "MSG"),
  POSITION: defineKey("MODE", "POS"),
  PROGRAM: defineKey("MODE", "PROG"),
  CUSTOM_1: defineKey("MODE", "CUST1"),
  CUSTOM_2: defineKey("MODE", "CUST2"),
  OFFSET_SETTINGS: defineKey("MODE", "OFS/SET")
};

const AlphaKeys = {
  B: defineKey("ALPHA", "B"),
  D: defineKey("ALPHA", "D"),
  F: defineKey("ALPHA", "F"),
  G: defineKey("ALPHA", "G"),
  H: defineKey("ALPHA", "H"),
  I: defineKey("ALPHA", "I"),
  J: defineKey("ALPHA", "J"),
  K: defineKey("ALPHA", "K"),
  L: defineKey("ALPHA", "L"),
  M: defineKey("ALPHA", "M"),
  N: defineKey("ALPHA", "N"),
  O: defineKey("ALPHA", "O"),
  P: defineKey("ALPHA", "P"),
  Q: defineKey("ALPHA", "Q"),
  R: defineKey("ALPHA", "R"),
  S: defineKey("ALPHA", "S"),
  T: defineKey("ALPHA", "T"),
  X: defineKey("ALPHA", "X"),
  Y: defineKey("ALPHA", "Y"),
  Z: defineKey("ALPHA", "Z")
};

const KeyMap = {
  ...NavKeys,
  ...FuncKeys,
  ...EditKeys,
  ...ModeKeys,
  ...AlphaKeys,
  ...SymbolKeys
};

export default KeyMap;
