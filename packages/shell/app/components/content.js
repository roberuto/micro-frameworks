import { BaseComponent } from "./baseComponent";

const remoteEntry = "http://localhost:8081/remoteEntry.js";
const scope = "svelteContent";
const component = "Content";

export class Content extends BaseComponent {
  constructor() {
    super({ remoteEntry, scope, component });
  }
}

customElements.define("svelte-content", Content);
