import Button, { ButtonProps } from "./Button";

type ButtonGroupProps = {
  buttons: ButtonProps[];
  groupLabel?: string;
};

export default function ButtonGroup({ buttons, groupLabel }: ButtonGroupProps) {
  const handleClick = ({ label, state }: { label: string; state: string }) => {
    console.log(groupLabel, label, state);
  };

  return (
    <>
      {buttons.map((btn: ButtonProps) => {
        return (
          <Button
            text={btn.text}
            color={btn.color}
            isActive={btn.isActive}
            onClick={handleClick}
          />
        );
      })}
    </>
  );
}
