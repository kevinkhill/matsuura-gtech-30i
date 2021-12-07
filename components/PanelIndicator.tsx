import LED from "./LED";

type PanelIndicatorProps = {
  on: boolean;
  label: string;
};

const PanelIndicator: React.FC<PanelIndicatorProps> = ({ on, label }) => {
  return (
    <div className="h-6 p-1 flex">
      <div className="p-2 flex-shrink">
        <LED on={on ?? false} />
      </div>
      <div className="flex-shrink">
        <span className="text-xs text-white">{label}</span>
      </div>
    </div>
  );
};

export default PanelIndicator;
