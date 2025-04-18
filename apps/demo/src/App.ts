import { h, hFragment } from "@repo/core/mugglekit";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

const App = (state: any) => {
  return hFragment([h("h1", {}, ["My TODOs"]), CreateTodo(), TodoList(state)]);
};

export default App;
