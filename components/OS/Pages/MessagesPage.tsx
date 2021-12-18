import React from "react";

const MessagesPage = ({ messages }) => {
  return (
    <div className="bg-cyan-300">
      <h1>Messages</h1>
      <ul className="list-none">
        {messages.map(text => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    </div>
  );
};

export default MessagesPage;
