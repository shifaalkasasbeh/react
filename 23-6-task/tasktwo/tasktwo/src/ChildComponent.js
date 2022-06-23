import react from "react";

function ChildComponent(props) {
  return (
    <>
      <button onClick={props.incrementHandler}>increment</button>
      <button onClick={props.decrementHandler}>decrement</button>
      <button onClick={props.resetHandler}> reset</button>
    </>
  );
}

export default ChildComponent;