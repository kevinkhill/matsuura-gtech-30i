import React, { useEffect, useState } from "react";

export default function BootScreen() {
  const [message, setMessage] = useState("Booting");
  useEffect(() => {
    const id = setInterval(() => {}, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="p-2 font-mono text-xl text-green-700 font">
      <h1>{message}</h1>
    </div>
  );
}
