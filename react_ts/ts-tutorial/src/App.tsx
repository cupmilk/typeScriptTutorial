import Greetings from "./Greetings";
import Counter1 from "./Counter1";
import MyForm from "./MyForm";
import Counter2 from "./Counter2";
import ReducerSample from "./ReducerSample";

function App() {
  const onClick = (something: string) => {
    console.log(`${something} says hello`);
  };

  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };

  return (
    <div>
      <Greetings name="raect" onClick={onClick} />
      <Counter1 />
      <Counter2 />
      <MyForm onSubmit={onSubmit} />
      <ReducerSample />
    </div>
  );
}

export default App;
