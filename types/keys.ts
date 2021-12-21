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

export interface ModeKey extends KeyValues {
  group: Extract<KeyGroup, "MODE">;
}
