import { h, hFragment } from "@sarathcani999/mugglekit";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

const App = (state: any, emit: any) => {
  const handleClick = () => {
    emit("add", state.newTodo);
  };

  return hFragment([
    h("h1", {}, ["My TODOs"]),
    CreateTodo(state, emit),
    TodoList(state),
    h("button", { onclick: handleClick }, ["Add todo"]),
  ]);
};

export default App;
