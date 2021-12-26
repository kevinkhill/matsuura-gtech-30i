import React from "react";

export default function BoxHeading({ text }: { text: string }) {
  return (
    <div className="px-2 mx-1 mt-0.5 text-gray-300 bg-blue-800">{text}</div>
  );
}
