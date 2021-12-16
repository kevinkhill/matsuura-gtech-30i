import React from "react";
import Head from "next/head";
import Key from "../components/Keyboard/Key";

function handleKey(keycode: string) {
  console.log("keyboard:", keycode);
}

export default function Keyboard() {
  return (
    <div className="container m-auto bg-black">
      <Head>
        <title>Matsuura Gtech 30i - Keyboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="px-5 py-2 text-xs bg-panel-gray h-96">
        <div className="flex flex-row justify-around flex-1">
          <div className="flex flex-col gap-2">
            <div className="">
              <Key white onClick={handleKey} value="RESET" />
            </div>
            <div className="py-4">
              <Key onClick={handleKey} value="HELP" />
            </div>
            <div className="">
              <Key onClick={handleKey} value="ABC/abc" />
            </div>
            <div className="">
              <Key onClick={handleKey} value="SHIFT" />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-1">
            <div>
              <Key white onClick={handleKey} value="O" />
            </div>
            <div>
              <Key white onClick={handleKey} value="N" />
            </div>
            <div>
              <Key white onClick={handleKey} value="G" />
            </div>
            <div>
              <Key white onClick={handleKey} value="P" />
            </div>
            <div>
              <Key white onClick={handleKey} value="X" />
            </div>
            <div>
              <Key white onClick={handleKey} value="Y" />
            </div>
            <div>
              <Key white onClick={handleKey} value="Z" />
            </div>
            <div>
              <Key white onClick={handleKey} value="Q" />
            </div>
            <div>
              <Key white onClick={handleKey} value="I" />
            </div>
            <div>
              <Key white onClick={handleKey} value="J" />
            </div>
            <div>
              <Key white onClick={handleKey} value="K" />
            </div>
            <div>
              <Key white onClick={handleKey} value="R" />
            </div>
            <div>
              <Key white onClick={handleKey} value="M" />
            </div>
            <div>
              <Key white onClick={handleKey} value="S" />
            </div>
            <div>
              <Key white onClick={handleKey} value="T" />
            </div>
            <div>
              <Key white onClick={handleKey} value="L" />
            </div>
            <div>
              <Key white onClick={handleKey} value="F" />
            </div>
            <div>
              <Key white onClick={handleKey} value="D" />
            </div>
            <div>
              <Key white onClick={handleKey} value="H" />
            </div>
            <div>
              <Key white onClick={handleKey} value="B" />
            </div>
          </div>
          <div className="className">
            <div className="grid grid-cols-3 gap-1">
              <div>
                <Key white onClick={handleKey} value="7" />
              </div>
              <div>
                <Key white onClick={handleKey} value="8" />
              </div>
              <div>
                <Key white onClick={handleKey} value="9" />
              </div>
              <div>
                <Key white onClick={handleKey} value="4" />
              </div>
              <div>
                <Key white onClick={handleKey} value="5" />
              </div>
              <div>
                <Key white onClick={handleKey} value="6" />
              </div>
              <div>
                <Key white onClick={handleKey} value="1" />
              </div>
              <div>
                <Key white onClick={handleKey} value="2" />
              </div>
              <div>
                <Key white onClick={handleKey} value="3" />
              </div>
              <div>
                <Key white onClick={handleKey} value="-" />
              </div>
              <div>
                <Key white onClick={handleKey} value="0" />
              </div>
              <div>
                <Key white onClick={handleKey} value="." />
              </div>
              <div>
                <Key white onClick={handleKey} value="/" />
              </div>
              <div>
                <Key white onClick={handleKey} value="EOB" />
              </div>
              <div>
                <Key onClick={handleKey} value="//CAN" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <Key onClick={handleKey} value="ALTER" />
            </div>
            <div>
              <Key onClick={handleKey} value="INSERT" />
            </div>
            <div>
              <Key onClick={handleKey} value="DELETE" />
            </div>
            <div className="justify-self-end">
              <Key onClick={handleKey} value="INPUT" />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-around flex-1 mt-5">
          <div>
            <div className="grid grid-cols-2 grid-rows-2 gap-1">
              <Key onClick={handleKey} value="CTRL" />
              <Key onClick={handleKey} value="AUX" />
              <Key onClick={handleKey} value="ALT" />
              <Key onClick={handleKey} value="TAB" />
            </div>
          </div>

          <div className="grid grid-flow-col grid-cols-4 grid-rows-2 gap-1">
            <Key onClick={handleKey} value="PAGE^" />
            <Key onClick={handleKey} value="PAGEv" />
            <div className="row-span-2">
              <Key onClick={handleKey} value="<" />
            </div>
            <Key onClick={handleKey} value="^" />
            <Key onClick={handleKey} value="v" />
            <div className="row-span-2">
              <Key onClick={handleKey} value=">" />
            </div>
          </div>

          <div className="grid grid-cols-4 grid-rows-2 gap-1">
            <Key onClick={handleKey} value="POS" />
            <Key onClick={handleKey} value="PROG" />
            <Key onClick={handleKey} value="OFS/SET" />
            <Key onClick={handleKey} value="CUST1" />
            <Key onClick={handleKey} value="SYS" />
            <Key onClick={handleKey} value="MSG" />
            <Key onClick={handleKey} value="GRAPH" />
            <Key onClick={handleKey} value="CUST2" />
          </div>
        </div>
      </div>
    </div>
  );
}
