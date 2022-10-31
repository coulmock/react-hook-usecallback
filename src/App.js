import React, { useState, useCallback } from "react";
import List from "./List.js";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  // Unlike useMemo, useCallback return the entire function passed, not only the value returned
  const getItems = useCallback(
    (incre) => {
      return [number + incre, number + 1 + incre, number + 2 + incre];
    },
    [number]
  );

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle Theme
      </button>
      <List getItems={getItems} />
    </div>
  );
}

export default App;
