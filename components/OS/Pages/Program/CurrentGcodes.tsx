import React from "react";
import { chunk } from "lodash";

const GcodeRow = ({ codes }) => {
  return (
    <div className="flex flex-row">
      <div className="text-blue-800 text-md shrink">G</div>
      <div className="grid grid-cols-4 grow">
        {codes.map(code => (
          <div key={code} className="text-md">
            {code}
          </div>
        ))}
      </div>
    </div>
  );
};

const CurrentGcodes = ({ gcodes }) => {
  const [p1, p2, p3] = chunk(gcodes, 4);

  return (
    <div className="">
      <GcodeRow codes={p1} />
      <GcodeRow codes={p2} />
      <GcodeRow codes={p3} />
    </div>
  );
};

export default CurrentGcodes;
