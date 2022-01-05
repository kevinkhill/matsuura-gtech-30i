import { observer } from "mobx-react-lite";
import React, { ChangeEvent, FC, useState } from "react";

import { useDataStore } from "../store/context";

const MobxButton: FC = observer(() => {
  const store = useDataStore();
  const { data, addData, removeData } = store;

  const [query, setQuery] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  return (
    <div className="bg-white">
      <div>
        <input
          type="text"
          className="p-2 ml-5 bg-cyan-100"
          value={query}
          onChange={handleChange}
        />
        <button
          type="button"
          className="p-2 m-2 bg-green-800 border-2 border-white"
          onClick={() => addData(query)}
        >
          Add data
        </button>
      </div>
      <ul>
        {data.map(value => (
          <li key={value}>
            <span>{value}</span>
            <button
              type="button"
              className="p-2 m-2 bg-red-800 border-2 border-white"
              onClick={() => removeData(value)}
            >
              Remove data
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default MobxButton;
