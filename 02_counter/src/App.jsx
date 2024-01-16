import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const remove = () => {
    setCounter(counter - 1)
  }

  const reset = () => {
    setCounter(counter = 0)
  }
  return (
    <>
      <h2>Counter value:{counter}</h2>

      <button onClick={addValue}>Add</button>
      <button onClick={remove}>Subtract</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
