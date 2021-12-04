import React, { useState } from "react";

const TextInput = ({ rows = 4, cols = 80, ...props }) => {
  const [input, setInput] = useState({
    input: "React"
  });

  return (
    <div>
      <textarea
        name="gcode"
        rows={rows}
        cols={cols}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default TextInput;
