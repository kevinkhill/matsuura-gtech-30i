import Button from "../Button";
import GridContainer from "../GridContainer";

export default function ModeButtons() {
  return (
    <GridContainer rows={2} cols={4}>
      <Button text="MEM" />
      <Button text="MDI" />
      <Button text="REMOTE" />
      <Button text="EDIT" />
      <Button text="H" />
      <Button text="6" />
      <Button text="7" />
      <Button text="[  ]" />
    </GridContainer>
  );
}
