export default class EventBus {
  listeners: Record<string, Function[]> = {};

  on(event: string, callback: (...args: any[]) => any): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: (...args: any[]) => any): void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      listener => listener !== callback,
    );
  }

  emit(event: string, ...args: any[]): void {
    if (!this.listeners[event]) {
      return;
    }

    this.listeners[event].forEach(listener => {
      listener(...args);
    });
  }

  destroy() {
    this.listeners = {};
  }
}
