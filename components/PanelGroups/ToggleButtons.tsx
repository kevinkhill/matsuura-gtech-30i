import Button from "../Button";
import PanelGroup from "../PanelGroup";

export default function ToggleButtons() {
  return (
    <PanelGroup className="flex flex-row justify-evenly gap-1 p-1">
      <Button text="S/BLK" />
      <Button text="M01" />
      <Button text="BLK/SKP" />
      <Button text="DR/RUN" />
      <Button text="FN/SEL" />
      <Button text="____" />
    </PanelGroup>
  );
}
