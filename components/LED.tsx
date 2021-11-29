import clsx from 'clsx';

type LedProps = {
  on: boolean;
  size?: number;
};

const LED: React.FC<LedProps> = ({ on, size }: LedProps) => {
  const R = size ?? 4
  const D = R * 2

  return (
    <svg className={clsx(`h-${R}`, `w-${R}`, "p-0 m-0 ")}>
      <circle
        cx={D}
        cy={D}
        r={R}
        stroke={on ? "#0CCC40" : "#DDDDDD"}
        strokeWidth="1"
        fill={on ? "#7FFF00" : "black"}
      />
    </svg>
  )
}

export default LED;
