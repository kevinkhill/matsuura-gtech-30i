/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";

import { toggle } from "../../core/util";
import Button from "./Button";
import PanelGroup from "./PanelGroup";
import {
  AxisButtons,
  CoolantButtons,
  DirectionButtons,
  HandleIncrementButtons,
  HandyButtons,
  ModeButtons,
  SpindleGroup,
  StatusIndicators,
  ToggleButtons
} from "./PanelGroups";

export default function MachineControl({
  onModeChange,
  onHandleAxisChange,
  onHandleIncrementChange
}) {
  // Status Indicator Group
  const [ALARM, setLed_ALARM] = useState(false);
  const [M0_M1, setLed_M0M1] = useState(false);
  const [thing8, setLed_thing8] = useState(false);
  const [TC_HOME, setLed_TC_HOME] = useState(false);
  const [APC_HOME, setLed_APC_HOME] = useState(false);
  const [TC_ACTIVITY, setLed_TC_ACTIVITY] = useState(false);
  const [SENSOR_TOUCH, setLed_SENSOR_TOUCH] = useState(false);
  const [SPINDLE_OVERLOAD, setLed_SPINDLE_OVERLOAD] = useState(false);

  // Axis Lock Buttons
  const [AXIS_LOCK_4TH, set4thAxisLock] = useState(true);
  const [AXIS_LOCK_5TH, set5thAxisLock] = useState(false);

  const [ATC_POS_RET, setAtcPosRet] = useState(false);

  const loggit = (...args) => {
    console.log(args);
  };

  const handleModeChange = (selectedAxis: string) => {
    onModeChange(selectedAxis);
  };

  return (
    <div className="">
      {/* === Top Group === */}
      <div className="grid grid-flow-col">
        <PanelGroup className="col-span-4">
          <StatusIndicators
            ALARM={ALARM}
            M0_M1={M0_M1}
            thing8={thing8}
            APC_HOME={APC_HOME}
            TC_HOME={TC_HOME}
            TC_ACTIVITY={TC_ACTIVITY}
            SENSOR_TOUCH={SENSOR_TOUCH}
            SPINDLE_OVERLOAD={SPINDLE_OVERLOAD}
          />
        </PanelGroup>
        <PanelGroup p={1} className="col-span-3 -ml-0.5">
          <HandyButtons onToggle={loggit} />
        </PanelGroup>
        <PanelGroup p={1} className="col-span-3 -ml-0.5">
          <CoolantButtons onToggle={loggit} />
        </PanelGroup>
        <PanelGroup className="col-span-4 -ml-0.5">
          <SpindleGroup handler={loggit} />
        </PanelGroup>
      </div>
      {/* === Bottom Group === */}
      <div className="grid grid-cols-12 -mt-0.5">
        {/* === Left Section === */}
        <PanelGroup className="col-span-7 h-80">
          <div className="grid h-full grid-flow-col grid-cols-2">
            <div className="pt-5">
              <div className="grid grid-cols-3 gap-1 place-items-center">
                <Button
                  text="4"
                  ledOn={AXIS_LOCK_4TH}
                  onClick={toggle(set4thAxisLock)}
                />
                <Button
                  text="5"
                  ledOn={AXIS_LOCK_5TH}
                  onClick={toggle(set5thAxisLock)}
                />
                <Button
                  text="ATC POS RET"
                  ledOn={ATC_POS_RET}
                  onClick={toggle(setAtcPosRet)}
                />
              </div>
              <div className="pt-5">
                <HandleIncrementButtons handler={onHandleIncrementChange} />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="">
                <ModeButtons handler={handleModeChange} />
              </div>
              <div>
                <AxisButtons handler={onHandleAxisChange} />
              </div>
              <div className="flex items-end justify-end h-full">
                <DirectionButtons onToggle={loggit} />
              </div>
            </div>
          </div>
        </PanelGroup>

        {/* === Right Section === */}
        <div className="col-span-5 row-span-2">
          <div className="flex h-full flex-col -ml-0.5">
            <PanelGroup p={1} className="">
              <ToggleButtons onToggle={loggit} />
            </PanelGroup>
            <PanelGroup className="h-1/2 -mt-0.5">
              <p>overrides</p>
            </PanelGroup>
            <PanelGroup className="h-1/2 -mt-0.5">
              <div className="flex flex-auto">
                <p>feed hold / cycle start</p>
              </div>
            </PanelGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
