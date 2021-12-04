import Button from "../Button";
import PanelGroup from "../PanelGroup";
import GridContainer from "../GridContainer";

export default function HandyButtons() {
  return (
    <PanelGroup className="col-span-3 -ml-0.5">
      <GridContainer rows={2} cols={3}>
        <Button text="handy" />
        <Button red text="stop" />
        <Button green text="action" />
        <Button text="gun" />
        <Button text="WOF" />
        <Button text="TLM" />
      </GridContainer>
    </PanelGroup>
  );
}
