import ButtonGroup from "../ButtonGroup";
import GridContainer from "../GridContainer";

export default function ToggleButtons() {
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
      <ButtonGroup buttons={buttons} groupLabel="Toggle Group" />
    </GridContainer>
  );
}
