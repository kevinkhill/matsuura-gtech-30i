import "tailwindcss/tailwind.css";
import "../styles/globals.css";

import React from "react";

import { AppProps } from "../types";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
