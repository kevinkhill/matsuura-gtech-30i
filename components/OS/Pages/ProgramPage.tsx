import React from "react";

const ProgramPage = () => {
  // const [content, setContent] = useState([]);
  const content = [];

  return (
    <div className="bg-orange-300">
      <h1>Program</h1>
      <ul className="list-none">
        {content.map(text => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramPage;
