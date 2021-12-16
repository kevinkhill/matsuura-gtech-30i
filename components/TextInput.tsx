import React, { useState } from "react";

interface Props {
  rows: number;
  cols: number;
  onChange: () => unknown;
}

const TextInput = ({ rows = 4, cols = 80, onChange }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [input, setInput] = useState({
    input: "React"
  });

  return (
    <div>
      <textarea name="gcode" rows={rows} cols={cols} onChange={onChange}>
        {input}
      </textarea>
    </div>
  );
};

export default TextInput;
