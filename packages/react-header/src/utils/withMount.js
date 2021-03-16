import React from "react";
import ReactDOM from "react-dom";

import { prependStyle } from "./prependStyle";

export const withMount = (Component, styles) => (shadowRoot) => {
  ReactDOM.render(<Component />, shadowRoot);
  prependStyle(shadowRoot, styles);
};
