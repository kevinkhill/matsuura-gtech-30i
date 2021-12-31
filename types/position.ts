export type AxisRecord<T extends string> = Record<T, number>;

export type Position = Partial<AxisRecord<"X" | "Y" | "Z" | "B">>;
