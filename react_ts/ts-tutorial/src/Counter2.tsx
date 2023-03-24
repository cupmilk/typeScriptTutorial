import React, { useEffect, useReducer, useRef, useState } from "react";

type Action = { type: "INCREASE" } | { type: "DECREASE" };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      throw new Error("unhandled action");
  }
}

const Counter2 = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => dispatch({ type: "INCREASE" });
  const onDecrease = () => dispatch({ type: "DECREASE" });

  const id = useRef<number>(0);
  const increaseId = (): void => {
    id.current += 1;
  };
  useEffect(() => {
    console.log({ id });
  }, []);

  return (
    <div>
      <h1> {count} </h1>
      {/* <h1> {id} </h1> */}

      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
        <button onClick={increaseId}>current + 1</button>
      </div>
    </div>
  );
};

export default Counter2;
