import { BaseComponent } from "./baseComponent";

const remoteEntry = "http://localhost:8080/remoteEntry.js";
const scope = "reactHeader";
const component = "Header";

export class Header extends BaseComponent {
  constructor() {
    super({ remoteEntry, scope, component });
  }
}

customElements.define("react-header", Header);
