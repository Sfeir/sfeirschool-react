import React, { useState } from "react";

export function App() {
  const [times, setTimes] = useState(0);
  return (
    <button onClick={() => setTimes(c => c + 1)}>
      I've been clicked {times} times
    </button>
  );
}
