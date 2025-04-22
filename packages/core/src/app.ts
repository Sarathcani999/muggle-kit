import { destroyDOM } from "./destroy-dom";
import { Dispatcher } from "./dispatcher";
import { mountDOM } from "./mount-dom";

// Type for a reducer function
type Reducer<T> = (state: T, payload: any) => T;

// Map of reducer functions
type ReducersMap<T> = {
  [action: string]: Reducer<T>;
};

// Type for the view function
type ViewFunction<T> = (
  state: T,
  emit: (eventName: string, payload?: any) => void,
) => any;

interface CreateAppOptions<T> {
  state: T;
  view: ViewFunction<T>;
  reducers?: ReducersMap<T>;
}

/**
 * Creates a lightweight app instance with a reactive event system and virtual DOM rendering.
 */
export function createApp<T>({
  state,
  view,
  reducers = {},
}: CreateAppOptions<T>) {
  let parentEl: HTMLElement | null = null;
  let vdom: any = null;

  const dispatcher = new Dispatcher();
  const subscriptions: Array<() => void> = [
    dispatcher.afterEveryCommand(renderApp),
  ];

  /**
   * Emits an event to the internal dispatcher with an optional payload.
   */
  function emit(eventName: string, payload?: any) {
    dispatcher.dispatch(eventName, payload);
  }

  // Register reducers to handle dispatched actions
  for (const actionName in reducers) {
    const reducer = reducers[actionName] as Reducer<T>;
    const subs = dispatcher.subscribe(actionName, (payload: any) => {
      state = reducer(state, payload);
    });
    subscriptions.push(subs);
  }

  /**
   * Renders the virtual DOM using the current state.
   */
  function renderApp() {
    console.log("rendering app (3)");
    if (vdom) {
      destroyDOM(vdom);
    }
    vdom = view(state, emit);
    if (parentEl) {
      mountDOM(vdom, parentEl);
    }
  }

  return {
    /**
     * Mounts the app to the provided DOM element.
     * @param _parentEl The DOM element where the app should be mounted.
     */
    mount(_parentEl: HTMLElement) {
      parentEl = _parentEl;
      renderApp();
    },

    /**
     * Unmounts the app and cleans up subscriptions and virtual DOM.
     */
    unmount() {
      if (vdom) {
        destroyDOM(vdom);
        vdom = null;
      }
      subscriptions.forEach((unsubscribe) => unsubscribe());
    },
  };
}
