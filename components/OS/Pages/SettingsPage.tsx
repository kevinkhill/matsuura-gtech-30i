import React from "react";

const SettingsPage = () => {
  // const [content, setContent] = useState([]);
  const content = [];

  return (
    <div className="bg-fuchsia-700 grow">
      <h1>Settings</h1>
      <ul className="list-none">
        {content.map(text => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    </div>
  );
};

export default SettingsPage;
