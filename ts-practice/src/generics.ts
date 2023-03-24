//interface , type을 사용하게 될 때 여러 종류의 타입에 대해서 호환을 맞춰야하는 상황에서 사용하는 문법

function merge<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b,
  };
}

function wrap<T>(param: T) {
  return {
    param,
  };
}

// ? 이건 왜 안됌?
// https://joshua1988.github.io/ts/guide/generics.html#%EC%A0%9C%EB%84%A4%EB%A6%AD%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0
// function showName1<Person>(person: Person): void {
//   return console.log(person.name);
// }
function showName2<T extends Person>(person: T): void {
  return console.log(person.name);
}

//타입 제너릭을 사용하면 파라미터로 다양한 타입을 넣을 수 있고 타입 지원을 지켜낼 수 있다
const wrapped1 = wrap(10);
const wrapped2 = wrap("some");

// interface Items<T>{
//     list : T[];
// }

type Items<T> = {
  list: T[];
};

const itmes: Items<string> = {
  list: ["a", "b"],
};

class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;
  }

  enqueue(item: T) {
    this.list.push(item);
  }

  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
