import React, { useState } from "react";

const TextInput = ({ rows = 4, cols = 80, ...props }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      >
        {input}
      </textarea>
    </div>
  );
};

export default TextInput;
