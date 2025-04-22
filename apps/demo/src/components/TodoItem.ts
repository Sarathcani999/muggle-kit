import { h } from "@sarathcani999/mugglekit";

const TodoItem = (todo: string, idxInList: number) => {
  return h("li", {}, [`No. ${idxInList}: ${todo}`]);
};

export default TodoItem;
