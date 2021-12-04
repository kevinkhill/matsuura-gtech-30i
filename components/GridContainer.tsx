type GridContainerProps = {
  children?: React.ReactNode | React.ReactNode[];
  gap?: number;
  rows: number;
  cols: number;
};

const GridContainer: React.FC<GridContainerProps> = ({
  children,
  rows,
  cols,
  gap = 1,
}: GridContainerProps) => {
  return (
    <div
      className={`grid grid-flow-col grid-rows-${rows} grid-cols-${cols} place-items-center gap-${gap} bg-transparent`}
    >
      {children}
    </div>
  );
};

export default GridContainer;
