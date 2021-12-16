import { ButtonProps } from "../Button";
import ButtonGroup from "../ButtonGroup";

const buttons: ButtonProps[] = [
  { text: "c/ng", color: "red" },
  { text: "oilshower" },
  { text: "c/tgl" },
  { text: "conveyor" },
  { text: "tsc" },
  { text: "chipwash" }
];

const CoolantButtons = ({ onToggle }) => {
  return (
    <div className="grid grid-cols-3 gap-1 place-items-center">
      <ButtonGroup
        buttons={buttons}
        onToggle={onToggle}
        groupLabel="Coolant Group"
      />
    </div>
  );
};

export default CoolantButtons;
