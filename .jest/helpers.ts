import { render, TemplateResult } from "lit-html";

try {
  if ("afterEach" in window) {
    afterEach(() => {
      while (document.body.firstChild) {
        document.body.removeChild(document.body.firstChild);
      }
    });
  }
} catch (error) {
  console.error(error as string);
}

/**
 * Renders a template result into the document body
 */
export function fixture(template: TemplateResult) {
  const element = document.createElement("div");
  document.body.append(element);
  render(template, element);
  return element.children[0] as HTMLElement;
}

/**
 * Waits until the next event loop tick
 */
export function nextTick() {
  return new Promise((resolve) => {
    process.nextTick(resolve);
  });
}

/**
 * Waits until the current repaint is finished
 */
export function nextFrame() {
  return new Promise((resolve) => requestAnimationFrame(resolve));
}

/**
 * Waits for a number of milliseconds
 */
export function wait(ms: number = 200) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
