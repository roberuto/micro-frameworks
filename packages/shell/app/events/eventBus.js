export class EventBus {
  constructor() {
    this.eventBus = document.createElement("event-bus");
  }

  on(type, listener) {
    this.eventBus.addEventListener(type, listener);
  }

  once(type, listener) {
    this.eventBus.addEventListener(type, listener, { once: true });
  }

  off(type, listener) {
    this.eventBus.removeEventListener(type, listener);
  }

  emit(type, detail) {
    this.eventBus.dispatchEvent(new CustomEvent(type, { detail }));
  }
}
