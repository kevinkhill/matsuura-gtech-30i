type GridContainerProps = {
  children?: React.ReactNode | React.ReactNode[];
  gap?: number;
  rows: number;
  cols: number;
};

const GridContainer: React.FC<GridContainerProps> = ({
  children,
  gap = 1,
  rows = 2,
  cols = 3,
}: GridContainerProps) => {
  return (
    <div className={`grid grid-cols-${cols} place-items-center gap-${gap}`}>
      {children}
    </div>
  );
};

export default GridContainer;
