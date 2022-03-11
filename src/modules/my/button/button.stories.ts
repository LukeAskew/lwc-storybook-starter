import { html } from "lit-html";

export default {
  title: "my/my-button",
  parameters: {
    modules: ["/modules/my-button.js"],
  },
};

export const Base = () => html` <my-button>Hello, World!</my-button> `;
