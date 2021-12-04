import Button from "../Button";
import PanelGroup from "../PanelGroup";
import GridContainer from "../GridContainer";

export default function Home() {
  return (
    <PanelGroup p={1} className="-mt-0.5 bg-gray-500 bg-opacity-100 h-28 w-56">
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
    </PanelGroup>
  );
}
