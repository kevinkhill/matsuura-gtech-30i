import React from "react";

import LED from "./LED";

type PanelIndicatorProps = {
  on: boolean;
  label: string;
};

const PanelIndicator: React.FC<PanelIndicatorProps> = ({ on, label }) => {
  return (
    <div className="flex h-6 p-1">
      <div className="flex-shrink p-2">
        <LED on={on ?? false} />
      </div>
      <div className="flex-shrink">
        <span className="text-xs text-white">{label}</span>
      </div>
    </div>
  );
};

export default PanelIndicator;
