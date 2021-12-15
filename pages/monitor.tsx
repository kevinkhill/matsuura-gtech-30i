import React from "react";
import Head from "next/head";

import TitleBar from "../components/ScreenPanel/TitleBar";

const SoftKey = ({ onClick, value }) => {
  return (
    <button
      key={value}
      type="button"
      onClick={() => onClick(value)}
      className="p-0.5 w-10 h-10 rounded-sm bg-orange-50"
    >
      <div className="h-9 w-9"> {value}</div>
    </button>
  );
};

function handleSoftKey(key: string) {
  console.log("softkey", key);
}

const wellBorder = [
  "rounded",
  "border-l border-l-slate-800",
  "border-t border-t-slate-800",
  "border-r border-r-slate-400",
  "border-b border-b-slate-400"
].join(" ");

export default function Monitor() {
  return (
    <div className="container m-auto bg-black">
      <Head>
        <title>Matsuura Gtech 30i - Monitor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="p-10 m-10 bg-panel-gray border-">
        <div className="flex flex-col gap-2">
          <div className="mb-8">
            <TitleBar />
          </div>
          <div className="flex flex-row gap-1">
            <div className="flex-grow p-2 ml-5 bg-gray-500 border-2 border-black">
              s
            </div>
            <div className={`flex flex-col gap-3 py-4 px-1.5 ${wellBorder}`}>
              <div className="flex flex-col gap-1">
                <SoftKey onClick={handleSoftKey} value="a1" />
                <SoftKey onClick={handleSoftKey} value="a2" />
                <SoftKey onClick={handleSoftKey} value="a3" />
                <SoftKey onClick={handleSoftKey} value="a4" />
              </div>
              <div className="flex flex-col gap-1">
                <SoftKey onClick={handleSoftKey} value="a5" />
                <SoftKey onClick={handleSoftKey} value="a6" />
                <SoftKey onClick={handleSoftKey} value="a7" />
                <SoftKey onClick={handleSoftKey} value="a8" />
              </div>
              <div>
                <SoftKey onClick={handleSoftKey} value="a9" />
              </div>
            </div>
          </div>
          <div className={`flex flex-row gap-3 px-4 py-1.5 ${wellBorder}`}>
            <div>
              <SoftKey onClick={handleSoftKey} value="<" />
            </div>
            <div className="flex gap-1">
              <SoftKey onClick={handleSoftKey} value="m1" />
              <SoftKey onClick={handleSoftKey} value="m2" />
              <SoftKey onClick={handleSoftKey} value="m3" />
              <SoftKey onClick={handleSoftKey} value="m4" />
              <SoftKey onClick={handleSoftKey} value="m5" />
            </div>
            <div className="flex gap-1">
              <SoftKey onClick={handleSoftKey} value="m6" />
              <SoftKey onClick={handleSoftKey} value="m7" />
              <SoftKey onClick={handleSoftKey} value="m8" />
              <SoftKey onClick={handleSoftKey} value="m9" />
              <SoftKey onClick={handleSoftKey} value="m10" />
            </div>
            <div>
              <SoftKey onClick={handleSoftKey} value=">" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
