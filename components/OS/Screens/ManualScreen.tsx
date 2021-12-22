import React from "react";

const ManualScreen = () => {
  // const [content, setContent] = useState([]);
  const content = [];

  return (
    <div>
      <h1>Manual</h1>
      <ul className="list-none">
        {content.map(text => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    </div>
  );
};

export default ManualScreen;
