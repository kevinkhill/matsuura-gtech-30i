import Button from "../Button";
import GridContainer from "../GridContainer";

export default function CoolantButtons() {
  return (
    <GridContainer rows={2} cols={3}>
      <Button red text="c/ng" />
      <Button text="c/tg" />
      <Button text="tsc" />
      <Button text="oilshower" />
      <Button text="conveyor" />
      <Button text="chipwash" />
    </GridContainer>
  );
}
