import React from "react";

type PanelGroupProps = {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  p?: number;
};

const PanelGroup: React.FC<PanelGroupProps> = ({
  children,
  className,
  p = 0
}: PanelGroupProps) => {
  return (
    <div
      className={`${className} p-${p} text-white rounded-lg border-white border-2`}
    >
      {children}
    </div>
  );
};

export default PanelGroup;
