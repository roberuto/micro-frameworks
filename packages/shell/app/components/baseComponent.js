import { Loader } from "../loader";
import { EVENTS } from "../events";

export class BaseComponent extends HTMLElement {
  constructor({ remoteEntry, scope, component }) {
    super();
    this.attachShadow({ mode: "open" });
    this.remoteEntry = remoteEntry;
    this.scope = scope;
    this.component = component;
    this.loader = new Loader(this.remoteEntry);
  }

  connectedCallback() {
    window.eventBus.on(EVENTS.scriptLoaded, ({ detail }) => {
      if (detail.remoteEntry === this.remoteEntry) {
        this.loader.init(this.scope, this.component).then((module) => {
          module.mount(this.shadowRoot);
        });
      }
    });

    window.eventBus.on(EVENTS.scriptError, ({ detail }) => {
      if (detail.remoteEntry === this.remoteEntry) {
        this.shadowRoot.innerHTML = "<div>Error</div>";
      }
    });
  }
}
