import Button from "../Button";
import GridContainer from "../GridContainer";

export default function ToggleButtons({
  SINGLE_BLOCK = false,
  M01 = false,
  BLOCK_SKIP = false,
  DRY_RUN = false,
  FN_SELECT = false,
  __ = false
}) {
  return (
    <GridContainer rows={1} cols={6}>
      <Button isActive={SINGLE_BLOCK} text="S/BLK" />
      <Button isActive={M01} text="M01" />
      <Button isActive={BLOCK_SKIP} text="BLK/SKP" />
      <Button isActive={DRY_RUN} text="DR/RUN" />
      <Button isActive={FN_SELECT} text="FN/SEL" />
      <Button isActive={__[0]} handler={__[1]} text="____" />
    </GridContainer>
  );
}
