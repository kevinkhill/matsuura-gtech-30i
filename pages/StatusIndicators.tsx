import React, { Component } from "react";

import PanelIndicator from "../components/PanelIndicator";

interface State {
  ALARM: boolean;
  SPINDLE_OVERLOAD: boolean;
  TC_IN_POSITION: boolean;
  TC_IN_MOTION: boolean;
  APC_IN_POSITION: boolean;
  M0_M1: boolean;
  thing7: boolean;
  thing8: boolean;
}

interface Props {
  ALARM: boolean;
  SPINDLE_OVERLOAD: boolean;
  TC_IN_POSITION: boolean;
  TC_IN_MOTION: boolean;
  APC_IN_POSITION: boolean;
  M0_M1: boolean;
  thing7: boolean;
  thing8: boolean;
}

export default class StatusIndicators extends Component<Props, State> {
  // eslint-disable-next-line react/static-property-placement
  static defaultProps = {
    ALARM: false,
    SPINDLE_OVERLOAD: false,
    TC_IN_POSITION: false,
    TC_IN_MOTION: false,
    APC_IN_POSITION: false,
    M0_M1: false,
    thing7: false,
    thing8: false,
  };

  state: State = StatusIndicators.defaultProps;

  getIndicatorState(indicator: keyof State): boolean {
    // eslint-disable-next-line react/destructuring-assignment
    return this.state[indicator];
  }

  toggleLED(indicator: keyof State) {
    this.setState({
      indicator: !this.getIndicatorState(indicator),
    });
  }

  render() {
    const {
      ALARM,
      SPINDLE_OVERLOAD,
      TC_IN_POSITION,
      TC_IN_MOTION,
      APC_IN_POSITION,
      M0_M1,
      thing7,
      thing8,
    } = this.state;

    return (
      <div className="grid grid-flow-row grid-cols-2">

        <PanelIndicator on={ALARM} label="ALARM" />

        <PanelIndicator on={SPINDLE_OVERLOAD} label="SP OVRLD" />
        <PanelIndicator on={TC_IN_POSITION} label="TC IN POS" />
        <PanelIndicator on={TC_IN_MOTION} label="TC ACTV" />
        <PanelIndicator on={APC_IN_POSITION} label="APC POS" />
        <PanelIndicator on={M0_M1} label="M0/M1" />
        <PanelIndicator on={thing7} label="thing7" />
        <PanelIndicator on={thing8} label="thing8" />
      </div>
    );
  }
}
