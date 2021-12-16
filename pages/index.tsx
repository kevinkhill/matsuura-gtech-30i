import Head from "next/head";

import Panel from "./panel";
import Monitor from "./monitor";
import Keyboard from "./keyboard";

export default function Home() {
  return (
    <div className="container m-auto bg-black">
      <Head>
        <title>Matsuura Gtech 30i</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="pt-5">
        <Monitor />
        <Keyboard />
        <Panel />
      </div>
    </div>
  );
}
