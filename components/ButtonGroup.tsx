import Button, { ButtonProps } from "./Button";

export interface ButtonGroupProps {
  groupLabel?: string;
  buttons: ButtonProps[];
  onToggle: (groupLabel: string, label: string, state: boolean) => unknown;
}

const ButtonGroup = ({ buttons, onToggle, groupLabel }: ButtonGroupProps) => {
  const handleClick = (label: string, state: boolean) => {
    // console.log(groupLabel, label, state);
    onToggle(groupLabel, label, state);
  };

  return (
    <>
      {buttons.map((btn: ButtonProps) => {
        return (
          <Button
            plain={btn.plain}
            key={btn.text}
            text={btn.text}
            color={btn.color}
            onToggle={handleClick}
          />
        );
      })}
    </>
  );
};

export default ButtonGroup;
