import { DOM_TYPES } from "./h";
import { setAttributes } from "./attributes";
import { addEventListeners } from "./events";

// Types
type DOMType = keyof typeof DOM_TYPES;

interface VDOMNode {
  type: DOMType;
  el?: Node | HTMLElement;
  value?: string;
  tag?: string;
  props?: Props;
  children?: VDOMNode[];
  listeners?: { [key: string]: EventListener };
}

interface Props {
  on?: Record<string, EventListener>;
  [key: string]: any;
}

export function mountDOM(vdom: any, parentEl: HTMLElement): void {
  switch (vdom.type as any) {
    case DOM_TYPES.TEXT: {
      createTextNode(vdom, parentEl);
      break;
    }
    case DOM_TYPES.ELEMENT: {
      createElementNode(vdom, parentEl);
      break;
    }
    case DOM_TYPES.FRAGMENT: {
      createFragmentNodes(vdom, parentEl);
      break;
    }
    default: {
      throw new Error(`Can't mount DOM of type: ${vdom.type}`);
    }
  }
}

function createTextNode(vdom: VDOMNode, parentEl: HTMLElement): void {
  const { value = "" } = vdom;
  const textNode = document.createTextNode(value);
  vdom.el = textNode;
  parentEl.append(textNode);
}

function createElementNode(vdom: VDOMNode, parentEl: HTMLElement): void {
  const { tag = "", props = {}, children = [] } = vdom;
  const element = document.createElement(tag);
  addProps(element, props, vdom);
  vdom.el = element;
  children.forEach((child: VDOMNode) => mountDOM(child, element));
  parentEl.append(element);
}

function addProps(el: HTMLElement, props: Props, vdom: VDOMNode): void {
  const { on: events = {}, ...attrs } = props;
  vdom.listeners = addEventListeners(events, el);
  setAttributes(el, attrs);
}

function createFragmentNodes(vdom: VDOMNode, parentEl: HTMLElement): void {
  const { children = [] } = vdom;
  vdom.el = parentEl;
  children.forEach((child: VDOMNode) => mountDOM(child, parentEl));
}
