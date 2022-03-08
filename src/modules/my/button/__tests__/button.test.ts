import { html } from "lit-html";
import { fixture } from "~/.jest/helpers";

import Button from "my/button";

customElements.define("my-button", Button.CustomElementConstructor);

describe("my-button", () => {
  it("works", () => {
    const element = fixture(html` <my-button>Test</my-button> `);
    expect(element).toMatchSnapshot();
  });
});
