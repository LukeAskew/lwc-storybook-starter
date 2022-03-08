import { html } from "lit-html";

export default {
  title: "my/my-button",
  parameters: {
    modules: ["/modules/my-button.js"],
  },
};

export const Base = () => html`
  <img src="/images/art-vandelay.jpg" alt="Art Vandelay" width="100" />
  <my-button>Hello, World!</my-button>
`;
