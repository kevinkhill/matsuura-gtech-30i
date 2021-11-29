import LED from "./LED";

type PanelIndicator = {
  on: boolean;
  label: string;
};

const PanelIndicator: React.FC<PanelIndicator> = ({ on, label }) => {
  return (
    <div className="flex justify-evenly items-baseline">
      <LED on={on ?? false} />
      <span className="h-2 text-white">{label}</span>
    </div>
  );
};

export default PanelIndicator;
