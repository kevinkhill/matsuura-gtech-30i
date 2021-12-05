import Button from "../Button";
import PanelGroup from "../PanelGroup";
import GridContainer from "../GridContainer";

export default function HandyButtons() {
  return (
    <GridContainer rows={2} cols={3}>
      <Button text="handy" />
      <Button text="gun" />
      <Button color="red" text="stop" />
      <Button text="WOF" />
      <Button color="green" text="action" />
      <Button text="TLM" />
    </GridContainer>
  );
}
