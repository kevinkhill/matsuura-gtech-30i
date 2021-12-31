import React from "react";

const LoadMeter = () => (
  <div className="flex flex-col pb-1">
    <div className="flex flex-row">
      <div className="w-10 h-1 bg-green-500" />
      <div className="w-8 h-1 bg-yellow-500" />
      <div className="w-6 h-1 bg-red-500" />
    </div>
    <div className="w-24 h-4 bg-black" />
  </div>
);

export default LoadMeter;
