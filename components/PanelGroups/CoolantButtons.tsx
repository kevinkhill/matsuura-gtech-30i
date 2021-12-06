import ButtonGroup from "../ButtonGroup";
import GridContainer from "../GridContainer";

export default function CoolantButtons() {
  const buttons = [
    { color: "red", text: "c/ng" },
    { text: "oilshower" },
    { text: "c/tgl" },
    { text: "conveyor" },
    { text: "tsc" },
    { text: "chipwash" },
  ];

  return (
    <GridContainer rows={2} cols={3}>
      <ButtonGroup buttons={buttons} groupLabel="Coolant Group" />
    </GridContainer>
  );
}
