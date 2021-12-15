import React from "react";

const raisedBorder = [
  "border-l border-l-slate-400",
  "border-t border-t-slate-400",
  "border-r border-r-slate-800",
  "border-b border-b-slate-800"
].join(" ");

export default function TitleBar() {
  return (
    <div
      className={`w-3/4 pl-2 italic font-bold text-white bg-blue-800 ${raisedBorder}`}
    >
      Matsuura G-Tech 30i
    </div>
  );
}
