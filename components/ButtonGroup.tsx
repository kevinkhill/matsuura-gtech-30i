import Button, { ButtonProps } from "./Button";

type ButtonGroupProps = {
  buttons: ButtonProps[];
  groupLabel?: string;
};

export default function ButtonGroup({ buttons, groupLabel }: ButtonGroupProps) {
  const handleClick = (label: string, state: boolean) => {
    console.log(groupLabel, label, state);
  };

  return (
    <>
      {buttons.map((btn: ButtonProps) => {
        return (
          <Button text={btn.text} color={btn.color} onToggle={handleClick} />
        );
      })}
    </>
  );
}
