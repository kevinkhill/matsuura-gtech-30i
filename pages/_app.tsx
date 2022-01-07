import "tailwindcss/tailwind.css";
import "../styles/fonts.css";
import "../styles/text.css";
import "../styles/globals.css";
import "../styles/program-screen.scss";

import React, { FC } from "react";

import { DataStoreProvider } from "@/core/store/context";
import { AppProps } from "@/types/app";

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <DataStoreProvider>
      <Component {...pageProps} />
    </DataStoreProvider>
  );
};

export default MyApp;
