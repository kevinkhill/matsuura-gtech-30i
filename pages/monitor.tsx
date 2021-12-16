import { useState } from "react";
import Head from "next/head";

import TitleBar from "../components/Monitor/TitleBar";
import SoftKey from "../components/Monitor/SoftKey";

export default function Monitor() {
  const [content, setContent] = useState([]);

  const handleSoftKey = (key: string) => {
    setContent(prev => {
      console.log("softkey", key);
      return [...prev, `softkey pressed: ${key}`];
    });
  };

  return (
    <div className="container m-auto bg-black">
      <Head>
        <title>Matsuura Gtech 30i - Monitor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="px-5 py-2 bg-panel-gray border-">
        <div className="flex flex-col gap-2">
          <div className="mb-8">
            <TitleBar />
          </div>
          <div className="flex flex-row gap-1">
            <div className="flex-grow p-2 ml-5 bg-gray-500 border-2 border-black">
              <ul className="list-none">
                {content.map(text => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 py-4 px-1.5 well-border">
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
          <div className="flex flex-row gap-3 px-4 py-1.5 well-border">
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
