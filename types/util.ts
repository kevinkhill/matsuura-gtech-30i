import React from "react";

export type MachineAxis = "X" | "Y" | "Z" | "B";

export type TextSize = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";

export type Tuple<T> = [T, T];

export interface WithChildren {
  children?: typeof React.Children;
}
