import { ButtonProps } from "../Button";
import ButtonGroup from "../ButtonGroup";

const buttons: ButtonProps[] = [
  { text: "X" },
  { text: "Y" },
  { text: "Z" },
  { text: "4" },
  { text: "5" },
  { text: "." }
];

const AxisButtons = ({ onToggle }) => {
  return (
    <div className="grid grid-cols-3 gap-1 p-5 place-items-center">
      <ButtonGroup
        buttons={buttons}
        onToggle={onToggle}
        groupLabel="Axis Group"
      />
    </div>
  );
};

export default AxisButtons;
