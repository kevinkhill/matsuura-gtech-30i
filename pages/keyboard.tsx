import React from "react";
import Head from "next/head";
import styled from "styled-components";

const BgContainer = styled.div`
  background-image: url("img/keyboard.jpg");
  background-repeat: no-repeat;
`;

const Key = ({ onClick, value }) => {
  return (
    <button
      key={value}
      type="button"
      onClick={() => onClick(value)}
      className="p-0.5 w-10 h-10 rounded-sm bg-yellow-100"
    >
      {value}
    </button>
  );
};

function handleKey(keycode: string) {
  console.log("keyboard:", keycode);
}

export default function Keyboard() {
  return (
    <div className="container min-h-screen m-auto bg-black">
      <Head>
        <title>Matsuura Gtech 30i - Keyboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="p-10 m-10 text-xs bg-panel-gray h-96">
        <BgContainer className="h-full">
          <div className="flex flex-row justify-between flex-1 border-2 border-dashed">
            <div className="flex flex-col gap-2">
              <div className="">
                <Key onClick={handleKey} value="RESET" />
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
                <Key onClick={handleKey} value="O" />
              </div>
              <div>
                <Key onClick={handleKey} value="N" />
              </div>
              <div>
                <Key onClick={handleKey} value="G" />
              </div>
              <div>
                <Key onClick={handleKey} value="P" />
              </div>
              <div>
                <Key onClick={handleKey} value="X" />
              </div>
              <div>
                <Key onClick={handleKey} value="Y" />
              </div>
              <div>
                <Key onClick={handleKey} value="Z" />
              </div>
              <div>
                <Key onClick={handleKey} value="Q" />
              </div>
              <div>
                <Key onClick={handleKey} value="I" />
              </div>
              <div>
                <Key onClick={handleKey} value="J" />
              </div>
              <div>
                <Key onClick={handleKey} value="K" />
              </div>
              <div>
                <Key onClick={handleKey} value="R" />
              </div>
              <div>
                <Key onClick={handleKey} value="M" />
              </div>
              <div>
                <Key onClick={handleKey} value="S" />
              </div>
              <div>
                <Key onClick={handleKey} value="T" />
              </div>
              <div>
                <Key onClick={handleKey} value="L" />
              </div>
              <div>
                <Key onClick={handleKey} value="F" />
              </div>
              <div>
                <Key onClick={handleKey} value="D" />
              </div>
              <div>
                <Key onClick={handleKey} value="H" />
              </div>
              <div>
                <Key onClick={handleKey} value="B" />
              </div>
            </div>
            <div className="className">
              <div className="grid grid-cols-3 gap-1">
                <div>
                  <Key onClick={handleKey} value="7" />
                </div>
                <div>
                  <Key onClick={handleKey} value="8" />
                </div>
                <div>
                  <Key onClick={handleKey} value="9" />
                </div>
                <div>
                  <Key onClick={handleKey} value="4" />
                </div>
                <div>
                  <Key onClick={handleKey} value="5" />
                </div>
                <div>
                  <Key onClick={handleKey} value="6" />
                </div>
                <div>
                  <Key onClick={handleKey} value="1" />
                </div>
                <div>
                  <Key onClick={handleKey} value="2" />
                </div>
                <div>
                  <Key onClick={handleKey} value="3" />
                </div>
                <div>
                  <Key onClick={handleKey} value="-" />
                </div>
                <div>
                  <Key onClick={handleKey} value="0" />
                </div>
                <div>
                  <Key onClick={handleKey} value="." />
                </div>
                <div>
                  <Key onClick={handleKey} value="/" />
                </div>
                <div>
                  <Key onClick={handleKey} value="EOB" />
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
          <div className="flex flex-row justify-between flex-1 border-2 border-dashed">
            <div>
              <div className="grid grid-cols-2 grid-rows-2 gap-1">
                <div>
                  <Key onClick={handleKey} value="CTRL" />
                </div>
                <div>
                  <Key onClick={handleKey} value="AUX" />
                </div>
                <div>
                  <Key onClick={handleKey} value="ALT" />
                </div>
                <div>
                  <Key onClick={handleKey} value="TAB" />
                </div>
              </div>
            </div>

            <div className="grid grid-flow-col grid-cols-4 grid-rows-2 gap-1">
              <div>
                <Key onClick={handleKey} value="PAGE^" />
              </div>
              <div>
                <Key onClick={handleKey} value="PAGEv" />
              </div>
              <div className="row-span-2">
                <Key onClick={handleKey} value="<" />
              </div>
              <div>
                <Key onClick={handleKey} value="^" />
              </div>
              <div>
                <Key onClick={handleKey} value="v" />
              </div>
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
        </BgContainer>
      </div>
    </div>
  );
}
