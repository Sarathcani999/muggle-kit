import { h } from "@repo/core/mugglekit";
import TodoItem from "./TodoItem";

const TodoList = (state: any) => {
  return h(
    "ul",
    {},
    state.todos.map((item: string, index: number) => TodoItem(item, index)),
  );
};

export default TodoList;
