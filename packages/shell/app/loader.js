import { EVENTS } from "./events";

const loadScript = Symbol("loadScript");
export class Loader {
  constructor(remoteEntry) {
    this.remoteEntry = remoteEntry;
    this[loadScript]();
  }

  [loadScript]() {
    const remoteScript = document.createElement("script");
    remoteScript.setAttribute("src", this.remoteEntry);
    document.head.appendChild(remoteScript);

    remoteScript.addEventListener("load", () => {
      window.eventBus.emit(EVENTS.scriptLoaded, { remoteEntry: this.remoteEntry });
    });

    remoteScript.addEventListener("error", () => {
      window.eventBus.emit(EVENTS.scriptError, { remoteEntry: this.remoteEntry });
    });
  }

  async init(scope, component) {
    await __webpack_init_sharing__("default");

    const container = window[scope];
    await container.init(__webpack_share_scopes__.default);

    const factoryFn = await container.get(`./${component}`);
    const module = factoryFn();

    return module;
  }
}
