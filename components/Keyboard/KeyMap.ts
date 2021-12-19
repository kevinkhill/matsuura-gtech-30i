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

export const SymbolKeys = {
  DASH: defineKey("SYMBOL", "-"),
  EOB: defineKey("SYMBOL", "EOB"),
  DECIMAL: defineKey("SYMBOL", "."),
  BLOCK_SKIP: defineKey("SYMBOL", "/")
};

export const EditKeys = {
  ALTER: defineKey("EDIT", "ALTER"),
  INPUT: defineKey("EDIT", "INPUT"),
  INSERT: defineKey("EDIT", "INSERT"),
  DELETE: defineKey("EDIT", "DELETE")
};

export const NavKeys = {
  UP: defineKey("NAV", "^"),
  DOWN: defineKey("NAV", "v"),
  LEFT: defineKey("NAV", "<"),
  RIGHT: defineKey("NAV", ">"),
  PAGE_UP: defineKey("NAV", "PAGE^"),
  PAGE_DOWN: defineKey("NAV", "PAGEv")
};

export const FuncKeys = {
  AUX: defineKey("FUNC", "AUX"),
  ALT: defineKey("FUNC", "ALT"),
  TAB: defineKey("FUNC", "TAB"),
  HELP: defineKey("FUNC", "HELP"),
  CTRL: defineKey("FUNC", "CTRL"),
  SHIFT: defineKey("FUNC", "SHIFT"),
  RESET: defineKey("FUNC", "RESET"),
  CAPS: defineKey("FUNC", "ABC/abc"),
  CANCEL: defineKey("FUNC", "//CAN")
};

export const ModeKeys = {
  SYSTEM: defineKey("MODE", "SYS"),
  GRAPH: defineKey("MODE", "GRAPH"),
  MESSAGES: defineKey("MODE", "MSG"),
  POSITION: defineKey("MODE", "POS"),
  PROGRAM: defineKey("MODE", "PROG"),
  CUSTOM_1: defineKey("MODE", "CUST1"),
  CUSTOM_2: defineKey("MODE", "CUST2"),
  OFFSET_SETTINGS: defineKey("MODE", "OFS/SET")
};

export const NumberKeys = {
  ZERO: defineKey("NUMBER", "0"),
  ONE: defineKey("NUMBER", "1"),
  TWO: defineKey("NUMBER", "2"),
  THREE: defineKey("NUMBER", "3"),
  FOUR: defineKey("NUMBER", "4"),
  FIVE: defineKey("NUMBER", "5"),
  SIX: defineKey("NUMBER", "6"),
  SEVEN: defineKey("NUMBER", "7"),
  EIGHT: defineKey("NUMBER", "8"),
  NINE: defineKey("NUMBER", "9")
};

export const AlphaKeys = {
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
  ...SymbolKeys,
  ...NumberKeys
};

export default KeyMap;
