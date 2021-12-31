import React from "react";

interface BoxHeadingProps {
  text: string;
  subText?: string | JSX.Element;
}

export default function BoxHeading({ text, subText }: BoxHeadingProps) {
  const left = text;
  const right = subText;

  return (
    <div className="flex flex-row justify-between px-2 mx-1 mt-0.5 text-gray-300 bg-blue-800">
      <p className="text-white">{left}</p>
      <p className="text-white">{right}</p>
    </div>
  );
}
