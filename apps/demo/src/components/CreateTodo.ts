import { h } from "@sarathcani999/mugglekit";
import { State } from "../store/state";

const CreateTodo = (state: State, emit: Function) => {
  const handleInputChange = (e: InputEvent) => {
    emit("updateNewTodo", (e.target as HTMLInputElement).value);
  };

  return h("input", {
    type: "text",
    onchange: handleInputChange,
    value: state.newTodo,
    placeholder: "Add a todo",
  });
};

export default CreateTodo;
