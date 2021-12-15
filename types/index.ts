import { MouseEvent } from "react";

export type ButtonStateMap = Record<string, boolean>;

export type OnClickEvent = MouseEvent<HTMLButtonElement, MouseEvent>;
