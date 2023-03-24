// type은 특정 타입에 별칭을 붙이는 용도

type typePerson = {
  name: string;
  age?: number;
};

type typeDeveloper = Person & {
  skills: string[];
};

const person: typePerson = {
  name: "lee",
  age: 20,
};
