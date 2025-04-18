import { createApp } from "@repo/core/mugglekit";
import App from "./App";

const root = document.querySelector<HTMLDivElement>("#root");

if (root) {
  const { mount } = createApp({state: { todos: ["Clean the room"] }, view: App})
  mount(root);
}
