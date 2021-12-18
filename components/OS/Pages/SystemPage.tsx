import React from "react";

const SystemPage = () => {
  // const [content, setContent] = useState([]);
  const content = [];

  return (
    <div className="bg-cyan-300">
      <h1>System</h1>
      <ul className="list-none">
        {content.map(text => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    </div>
  );
};

export default SystemPage;
