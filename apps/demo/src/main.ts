import { h } from "@repo/core/mugglekit";

const root = document.querySelector<HTMLDivElement>("#root");

if (root) {
  const form = h("form", { class: "login-form", action: "login" }, [
    h("input", { type: "text", name: "username" }),
    h("input", { type: "password", name: "password" }),
    h("button", { type: "submit" }, ["Login"]),
  ]);

  console.log(form);
}
