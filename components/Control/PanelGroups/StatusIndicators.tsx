import React from "react";

import PanelIndicator from "../PanelIndicator";

interface StatusIndicatorProps {
  M0_M1: boolean;
  ALARM: boolean;
  thing8: boolean;
  APC_HOME: boolean;
  TC_HOME: boolean;
  TC_ACTIVITY: boolean;
  SENSOR_TOUCH: boolean;
  SPINDLE_OVERLOAD: boolean;
}

const StatusIndicators = (props: StatusIndicatorProps) => {
  const {
    M0_M1 = false,
    ALARM = false,
    thing8 = false,
    TC_HOME = false,
    APC_HOME = false,
    TC_ACTIVITY = false,
    SENSOR_TOUCH = false,
    SPINDLE_OVERLOAD = false
  } = props;

  return (
    <div className="grid grid-flow-row grid-cols-2">
      <PanelIndicator on={ALARM} label="ALARM" />
      <PanelIndicator on={SPINDLE_OVERLOAD} label="SP OVRLD" />
      <PanelIndicator on={TC_HOME} label="TC IN POS" />
      <PanelIndicator on={TC_ACTIVITY} label="TC ACTV" />
      <PanelIndicator on={APC_HOME} label="APC POS" />
      <PanelIndicator on={M0_M1} label="M0/M1" />
      <PanelIndicator on={SENSOR_TOUCH} label="thing7" />
      <PanelIndicator on={thing8} label="thing8" />
    </div>
  );
};

export default StatusIndicators;
