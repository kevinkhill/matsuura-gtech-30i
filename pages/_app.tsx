import "tailwindcss/tailwind.css";
import "../styles/fonts.css";
import "../styles/text.css";
import "../styles/globals.css";
import "../styles/program-screen.css";

import { AppProps } from "next/app";
import React, { FC } from "react";

import { DataStoreProvider } from "@/core/store/context";

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <DataStoreProvider>
      <Component {...pageProps} />
    </DataStoreProvider>
  );
};

export default MyApp;
