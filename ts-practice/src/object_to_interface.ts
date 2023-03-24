interface Person {
  name: string;
  age?: number; //물음표 => 설정을 해도 안해도 되는값
}

interface Developer extends Person {
  skills: string[];
}

interface Korean extends Person {
  id: number;
}

// const person: Developer = {
//   name: "kim",
//   age: 20,
//   skills : ["react"]
// };

const fe: Developer = {
  name: "lee",
  skills: ["js"],
};
