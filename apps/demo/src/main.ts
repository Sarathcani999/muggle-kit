import { createApp } from "@sarathcani999/mugglekit";
import view from "./App";
import { initialState as state, reducers } from "./store/state";

const root = document.querySelector<HTMLDivElement>("#root");

if (root) {
  const { mount } = createApp({ state, view, reducers });
  mount(root);
}
