import { AppProps as NextAppProps } from "next/app";

export type AppProps<P = unknown> = {
  pageProps: P;
} & Omit<NextAppProps<P>, "pageProps">;
