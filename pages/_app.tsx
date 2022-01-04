import "tailwindcss/tailwind.css";
import "../styles/fonts.css";
import "../styles/text.css";
import "../styles/globals.css";
import "../styles/program-screen.scss";

import React from "react";

import { AppProps } from "../types";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
