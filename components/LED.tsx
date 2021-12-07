// import clsx from "clsx";

type LedProps = {
  on: boolean;
  classes?: string;

  size?: number;
};

const LED: React.FC<LedProps> = ({ on, size, classes }: LedProps) => {
  const R = size ?? 4;
  const D = R * 2;

  return (
    <svg width={D + 2} height={D + 2} className={classes}>
      <circle
        cx={R + 1}
        cy={R + 1}
        r={R}
        stroke={on ? "#0CCC40" : "#DDDDDD"}
        strokeWidth="1"
        fill={on ? "#7FFF00" : "black"}
      />
    </svg>
  );
};

export default LED;
