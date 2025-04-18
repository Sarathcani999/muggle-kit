export function addEventListener(
  eventName: string,
  handler: EventListener,
  el: HTMLElement,
): EventListener {
  el.addEventListener(eventName, handler);
  return handler;
}

export function addEventListeners(
  listeners: Record<string, EventListener> = {},
  el: HTMLElement,
): Record<string, EventListener> {
  const addedListeners: Record<string, EventListener> = {};
  Object.entries(listeners).forEach(([eventName, handler]) => {
    const listener = addEventListener(eventName, handler, el);
    addedListeners[eventName] = listener;
  });
  return addedListeners;
}

export function removeEventListeners(listeners = {}, el: any) {
  Object.entries(listeners).forEach(([eventName, handler]) => {
  el.removeEventListener(eventName, handler)
  })
}