import GridContainer from "../GridContainer";
import ButtonGroup from "../ButtonGroup";

export default function HandyButtons() {
  const buttons = [
    { text: "handy" },
    { text: "gun" },
    { text: "stop", color: "red" },
    { text: "WOF" },
    { text: "action", color: "green" },
    { text: "TLM" },
  ];
  return (
    <GridContainer rows={2} cols={3}>
      <ButtonGroup buttons={buttons} groupLabel="Handy Group" />
    </GridContainer>
  );
}
