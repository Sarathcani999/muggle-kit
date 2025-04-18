import { destroyDOM } from "./destroy-dom";
import { Dispatcher } from "./dispatcher";
import { mountDOM } from "./mount-dom";

type State = Record<string, any>;
type Payload = any;
type Reducer = (state: State, payload: Payload) => State;
type ViewFunction = (state: State) => any;

interface AppConfig {
  state: State;
  view: ViewFunction;
}

interface App {
  mount: (parentEl: HTMLElement) => void;
}

// Assuming reducers is a global or imported object
declare const reducers: Record<string, Reducer>;

/**
 * Creates an application instance with reactive rendering and command dispatching.
 * 
 * @param config - Object containing initial state and view function.
 * @returns An object with a `mount` method to mount the app to a DOM element.
 */
export function createApp({ state, view }: AppConfig): App {
  let parentEl: HTMLElement | null = null;
  let vdom: any = null;

  const dispatcher = new Dispatcher();
  const subscriptions = [dispatcher.afterEveryCommand(renderApp)];

  // Subscribe all reducer functions to their corresponding action names
  for (const actionName in reducers) {
    const reducer = reducers[actionName] as Reducer;
    const subs = dispatcher.subscribe(actionName, (payload: Payload) => {
      state = reducer(state, payload);
    });
    subscriptions.push(subs);
  }

  /**
   * Renders the current state to the DOM by destroying the old virtual DOM and mounting the new one.
   */
  function renderApp(): void {
    if (vdom) {
      destroyDOM(vdom);
    }
    vdom = view(state);
    if (parentEl) {
      mountDOM(vdom, parentEl);
    }
  }

  return {
    /**
     * Mounts the application to the given DOM element and triggers the initial render.
     *
     * @param _parentEl - The parent DOM element where the app will be rendered.
     */
    mount(_parentEl: HTMLElement): void {
      parentEl = _parentEl;
      renderApp();
    },
  };
}
