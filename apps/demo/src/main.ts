import { hFragment, mountDOM } from "@repo/core/mugglekit";
import App from "./App";

const root = document.querySelector<HTMLDivElement>("#root");

if (root) {
  const app = App({ todos: [] });

  mountDOM(hFragment([app]), root);
}
