import React from "react";

// interface GreetingsProps {
//   name: string;
//   children: React.ReactNode;
// }

// type GreetingsProps = {
//   name: string;
// };

interface GreetingsProps {
  name: string;
  mark: string;
  optional?: string;
  onClick: (somthing: string) => void;
}

// const Greetings: React.FC<GreetingsProps> = ({ name, mark = "!" }) => {
//   return (
//     <div>
//       Hello {name} {mark}
//     </div>
//   );
// };

// Greetings.defaultProps = {
//   mark: "!",
// };

const Greetings = ({ name, mark, optional, onClick }: GreetingsProps) => {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello {name} {mark}
      {optional && <p>{optional}</p>}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

Greetings.defaultProps = {
  mark: "!",
};

export default Greetings;
