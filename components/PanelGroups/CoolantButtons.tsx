import Button from "../Button";
import GridContainer from "../GridContainer";

export default function CoolantButtons() {
  return (
    <GridContainer rows={2} cols={3}>
      <Button color="red" text="c/ng" />
      <Button text="oilshower" />
      <Button text="c/tgl" />
      <Button text="conveyor" />
      <Button text="tsc" />
      <Button text="chipwash" />
    </GridContainer>
  );
}
