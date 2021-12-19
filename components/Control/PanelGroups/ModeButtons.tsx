import { ButtonProps } from "../Button";
import PanelGroup from "../PanelGroup";
import GridContainer from "../../GridContainer";
import RadioButtonGroup from "../RadioButtonGroup";

const buttons: ButtonProps[] = [
  { text: "MEM" },
  { text: "MDI" },
  { text: "REMOTE" },
  { text: "EDIT" },
  { text: "H" },
  { text: "6" },
  { text: "7" },
  { text: "[  ]" }
];

const ModeButtons = ({ handler }) => {
  return (
    <PanelGroup
      p={1}
      className="-mt-0.5 -mr-0.5 bg-gray-500 bg-opacity-100 h-28 w-56"
    >
      <GridContainer rows={2} cols={4}>
        <RadioButtonGroup
          label="Mode Group"
          initial="MEM"
          buttons={buttons}
          handler={handler}
        />
      </GridContainer>
    </PanelGroup>
  );
};

export default ModeButtons;
