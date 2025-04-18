import { withoutNulls } from "./utils/array";

export const DOM_TYPES = {
  TEXT: "text",
  ELEMENT: "element",
  FRAGMENT: "fragment",
} as const;

type Props = Record<string, any>;

export interface TextVNode {
  type: typeof DOM_TYPES.TEXT;
  value: string;
}

export interface ElementVNode {
  type: typeof DOM_TYPES.ELEMENT;
  tag: string;
  props: Props;
  children: VNode[];
}

export interface FragmentVNode {
  type: typeof DOM_TYPES.FRAGMENT;
  children: VNode[];
}

export type VNode = TextVNode | ElementVNode | FragmentVNode;

export function h(
  tag: string,
  props: Props = {},
  children: (VNode | string | null)[] = [],
): ElementVNode {
  return {
    tag,
    props,
    children: mapTextNodes(withoutNulls(children)),
    type: DOM_TYPES.ELEMENT,
  };
}

export function hString(str: string): TextVNode {
  return { type: DOM_TYPES.TEXT, value: str };
}

export function hFragment(vNodes: (VNode | string | null)[]): FragmentVNode {
  return {
    type: DOM_TYPES.FRAGMENT,
    children: mapTextNodes(withoutNulls(vNodes)),
  };
}

export function mapTextNodes(children: (VNode | string)[]): VNode[] {
  return children.map(
    (child): VNode => (typeof child === "string" ? hString(child) : child),
  );
}
