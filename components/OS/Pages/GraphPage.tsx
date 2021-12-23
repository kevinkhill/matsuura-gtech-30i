import React from "react";

const GraphPage = () => {
  // const [content, setContent] = useState([]);
  const content = [];

  return (
    <div className="bg-red-300 grow">
      <h1>Graph</h1>
      <ul className="list-none">
        {content.map(text => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    </div>
  );
};

export default GraphPage;
