type PanelGroupProps = {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
};

const PanelGroup: React.FC<PanelGroupProps> = ({
  children,
  className,
}: PanelGroupProps) => {
  return (
    <div
      className={`${className} text-white border-collapse bg-opacity-0 rounded-md border-white border-2`}
    >
      {children}
    </div>
  );
};

export default PanelGroup;
