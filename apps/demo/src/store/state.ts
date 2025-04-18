export interface State {
  todos: string[];
  newTodo: string;
}

export const reducers = {
  add: (state: State, payload: string) => {
    return { ...state, todos: [...state.todos, payload], newTodo: "" };
  },

  updateNewTodo: (state: State, payload: string) => {
    return { ...state, newTodo: payload };
  },
};

export const initialState = {
  todos: [],
  newTodo: "Sample TODO",
};
