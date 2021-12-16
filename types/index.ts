import { MouseEvent } from "react";
import { AppProps as NextAppProps } from "next/app";

export type ButtonStateMap = Record<string, boolean>;

export type OnClickEvent = MouseEvent<HTMLButtonElement, MouseEvent>;

export type AppProps<P = unknown> = {
  pageProps: P;
} & Omit<NextAppProps<P>, "pageProps">;
