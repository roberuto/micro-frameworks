import { BaseComponent } from "./baseComponent";

const remoteEntry = "http://localhost:8082/remoteEntry.js";
const scope = "vueSidebar";
const component = "Sidebar";

export class Sidebar extends BaseComponent {
  constructor() {
    super({ remoteEntry, scope, component });
  }
}

customElements.define("vue-sidebar", Sidebar);
