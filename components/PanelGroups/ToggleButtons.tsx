import Button from "../Button";
import ButtonGroup from "../ButtonGroup";
import GridContainer from "../GridContainer";

type ButtonHandler = () => void;

type ButtonStates = {
  SINGLE_BLOCK: boolean;
  M01: boolean;
  BLOCK_SKIP: boolean;
  DRY_RUN: boolean;
  FN_SELECT: boolean;
  __: boolean;
};

export default function ToggleButtons({
  SINGLE_BLOCK,
  M01,
  BLOCK_SKIP,
  DRY_RUN,
  FN_SELECT,
  __,
}: {
  state: ButtonStates;
  onToggle: any;
}) {
  const buttons = [
    { text: "S/BLK" },
    { text: "M01" },
    { text: "BLK/SKP" },
    { text: "DR/RUN" },
    { text: "FN/SEL" },
    { text: "__" },
  ];

  return (
    <GridContainer rows={1} cols={6}>
      <ButtonGroup groupLabel="ToggleButtons" buttons={buttons} />
    </GridContainer>
  );
}
