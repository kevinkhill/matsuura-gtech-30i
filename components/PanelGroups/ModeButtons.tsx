import PanelGroup from "../PanelGroup";
import ButtonGroup from "../ButtonGroup";
import GridContainer from "../GridContainer";
import { ButtonProps } from "../Button";

const buttons: ButtonProps[] = [
  { text: "MEM" },
  { text: "MDI" },
  { text: "REMOTE" },
  { text: "EDIT" },
  { text: "H" },
  { text: "6" },
  { text: "7" },
  { text: "[  ]" },
];

const ModeButtons = ({ onToggle }) => {
  return (
    <PanelGroup
      p={1}
      className="-mt-0.5 -mr-0.5 bg-gray-500 bg-opacity-100 h-28 w-56"
    >
      <GridContainer rows={2} cols={4}>
        <ButtonGroup
          buttons={buttons}
          onToggle={onToggle}
          groupLabel="Mode Group"
        />
      </GridContainer>
    </PanelGroup>
  );
};

export default ModeButtons;
