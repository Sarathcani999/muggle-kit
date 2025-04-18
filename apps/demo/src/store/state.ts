export interface State {
  todos: string[];
}

export const reducers = {
  add: (state: State, payload: string) => {
    return { todos: [...state.todos, payload] };
  },
};

export const initialState = {
  todos: [],
};
