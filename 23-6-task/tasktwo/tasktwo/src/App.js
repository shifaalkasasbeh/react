import "./App.css";
import { useState } from "react";
import ChildComponent from "./ChildComponent";

export default function App() {
  const [count, setCount] = useState(0);
  const defaultCount = 0;

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const reset = () => {
    setCount(defaultCount);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <p>{count}</p>
      <ChildComponent
        incrementHandler={increment}
        decrementHandler={decrement}
        resetHandler={reset}
      />
    </div>
  );
}
