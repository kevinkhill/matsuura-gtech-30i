import React, { useState } from "react";
import { createContainer } from "unstated-next";

function useCounter() {
  const [count, setCount] = useState(0);
  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);
  return { count, decrement, increment };
}

const Counter = createContainer(useCounter);

function CounterDisplay() {
  const counter = Counter.useContainer();
  return (
    <div>
      <button type="button" onClick={counter.decrement}>
        -
      </button>
      <p>You clicked {counter.count} times</p>
      <button type="button" onClick={counter.increment}>
        +
      </button>
    </div>
  );
}

const MessagesPage = ({ messages }) => {
  return (
    <div className="p-5 bg-cyan-900">
      <h1>Messages</h1>
      <ul className="list-none">
        {messages.map(text => (
          <li key={text}>{text}</li>
        ))}
      </ul>
      <Counter.Provider>
        <CounterDisplay />
      </Counter.Provider>
    </div>
  );
};

export default MessagesPage;
