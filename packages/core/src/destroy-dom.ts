import { removeEventListeners } from "./events";
import { DOM_TYPES } from "./h";

export function destroyDOM(vdom: any) {
  const { type } = vdom;
  switch (type) {
    case DOM_TYPES.TEXT: {
      removeTextNode(vdom);
      break;
    }
    case DOM_TYPES.ELEMENT: {
      removeElementNode(vdom);
      break;
    }
    case DOM_TYPES.FRAGMENT: {
      removeFragmentNodes(vdom);
      break;
    }
    default: {
      throw new Error(`Can't destroy DOM of type: ${type}`);
    }
  }
  delete vdom.el;
}

function removeTextNode(vdom: any) {
  const { el } = vdom;
  el.remove();
}

function removeFragmentNodes(vdom: any) {
  const { children } = vdom;
  children.forEach(destroyDOM);
}

function removeElementNode(vdom: any) {
  const { el, children, listeners } = vdom;
  el.remove();
  children.forEach(destroyDOM);
  if (listeners) {
    removeEventListeners(listeners, el);
    delete vdom.listeners;
  }
}
