import React from "react";

const PositionPage = () => {
  // const [content, setContent] = useState([]);
  const content = [];

  return (
    <div className="bg-indigo-700 grow">
      <h1>Position</h1>
      <ul className="list-none">
        {content.map(text => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    </div>
  );
};

export default PositionPage;
