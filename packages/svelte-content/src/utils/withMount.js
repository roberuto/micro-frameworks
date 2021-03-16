import { prependStyle } from "./prependStyle";

export const withMount = (Component, styles) => (shadowRoot) => {
  new Component({ target: shadowRoot });
  prependStyle(shadowRoot, styles);
};
