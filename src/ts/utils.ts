import { IClasses } from "./types";

export function getElementOrThrow<T extends Element>(selector: string): T {
  const ELEMENT = document.querySelector<T>(selector);

  if (!ELEMENT) {
    throw new Error(`Element with ${selector} selector was not found!`);
  }

  return ELEMENT;
}

export function disableElement(element: Element, classes?: IClasses): void {
  element.setAttribute("disabled", "");

  if (classes) {
    const { toAdd, toRemove } = classes;

    if (toAdd) {
      element.classList.add(...toAdd);
    }

    if (toRemove) {
      element.classList.remove(...toRemove);
    }
  }
}

export function enableElement(element: Element, classes?: IClasses): void {
  element.removeAttribute("disabled");

  if (classes) {
    const { toAdd, toRemove } = classes;

    if (toAdd) {
      element.classList.add(...toAdd);
    }

    if (toRemove) {
      element.classList.remove(...toRemove);
    }
  }
}
