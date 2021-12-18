import React from "react";

const OffsetsPage = () => {
  // const [content, setContent] = useState([]);
  const content = [];

  return (
    <div className="bg-yellow-300">
      <h1>Offsets</h1>
      <ul className="list-none">
        {content.map(text => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    </div>
  );
};

export default OffsetsPage;
