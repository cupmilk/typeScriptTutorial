import React, { useState } from "react";

const Counter1 = () => {
  //1 useState의 경우 알아서 타입을 알아내기 때문에 필수가 아님
  const [count, setCount] = useState<number>(0);
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  //2 하지만 상태가 null일경우 넣어주면 좋음
  interface Information {
    name: string;
    description: string;
  }
  const [info, setInfo] = useState<Information | null>(null);

  //3  상태의 타입이 까다로운 경우
  interface Todo {
    id: number;
    text: string;
    done: boolean;
  }
  //빈 배열만 넣어줄 경우 어떤 타입으로 이루어진 배열인지 모를 수 있음
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div>
      <h1> {count} </h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
};

export default Counter1;
