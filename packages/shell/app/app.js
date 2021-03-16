import { EventBus } from "./events/eventBus";

const template = document.createElement("template");
template.innerHTML = `
  <style>
    .main {
      padding: 24px
    }
    .content {
      display: flex
    }
  </style>
  <div>
    <div><slot name="header"></slot></div>
    <div class="main">
    <slot name="title"></slot>
      <div class="content">
        <slot name="content"></slot>
        <slot name="sidebar"></slot>
      </div>
    </div>
  </div>
`;

export class App extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    window.eventBus = new EventBus();
  }
}

customElements.define("main-app", App);
