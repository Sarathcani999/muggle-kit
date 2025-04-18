import { h } from "@repo/core/mugglekit";

const CreateTodo = () => {
  return h("input", { type: "text", placeholder: "Add a todo" });
};

export default CreateTodo;
