import React from "react";

import PanelIndicator from "../PanelIndicator";

interface StatusIndicatorProps {
  M0_M1: boolean;
  ALARM: boolean;
  thing8: boolean;
  SENSOR_TOUCH: boolean;
  TC_IN_MOTION: boolean;
  TC_IN_POSITION: boolean;
  APC_IN_POSITION: boolean;
  SPINDLE_OVERLOAD: boolean;
}

const StatusIndicators = (props: StatusIndicatorProps) => {
  const {
    M0_M1 = false,
    ALARM = false,
    thing8 = false,
    SENSOR_TOUCH = false,
    TC_IN_MOTION = false,
    TC_IN_POSITION = false,
    SPINDLE_OVERLOAD = false,
    APC_IN_POSITION = false,
  } = props;

  return (
    <div className="grid grid-flow-row grid-cols-2">
      <PanelIndicator on={ALARM} label="ALARM" />
      <PanelIndicator on={SPINDLE_OVERLOAD} label="SP OVRLD" />
      <PanelIndicator on={TC_IN_POSITION} label="TC IN POS" />
      <PanelIndicator on={TC_IN_MOTION} label="TC ACTV" />
      <PanelIndicator on={APC_IN_POSITION} label="APC POS" />
      <PanelIndicator on={M0_M1} label="M0/M1" />
      <PanelIndicator on={SENSOR_TOUCH} label="thing7" />
      <PanelIndicator on={thing8} label="thing8" />
    </div>
  );
};

export default StatusIndicators;
