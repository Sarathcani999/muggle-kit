import { h, hFragment } from "@repo/core/mugglekit";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

const App = (state: any, emit: any) => {
  const handleClick = () => {
    emit("add", "New todo");
  };

  return hFragment([
    h("h1", {}, ["My TODOs"]),
    CreateTodo(),
    TodoList(state),
    h("button", { onclick: handleClick }, ["Log State"]),
  ]);
};

export default App;
