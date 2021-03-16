import Vue from "vue";

import { prependStyle } from "./prependStyle";

export const withMount = (Component, styles) => (shadowRoot) => {
  const el = document.createElement("div");
  shadowRoot.appendChild(el);
  prependStyle(shadowRoot, styles);

  new Vue({ render: (h) => h(Component) }).$mount(el);
};
