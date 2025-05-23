export type DOMType = (typeof DOM_TYPES)[keyof typeof DOM_TYPES];

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

/**
 * Main JSX factory function - handles both elements and components
 * This is what Vite calls when it encounters JSX
 */
export function h(
  tag: string | Function,
  props: Props | null,
  ...children: (VNode | string | number | boolean | null | undefined)[]
): ElementVNode | FragmentVNode | VNode | VNode[] {
  // Handle null props
  const normalizedProps = props || {};
  
  // Handle function components
  if (typeof tag === 'function') {
    // Add children to props for component
    const propsWithChildren = {
      ...normalizedProps,
      children: children.length === 0 ? undefined : 
                children.length === 1 ? children[0] : children
    };
    
    // Call the component function and return its result
    return tag(propsWithChildren);
  }
  
  // Handle DOM elements
  return {
    type: DOM_TYPES.ELEMENT,
    tag,
    props: normalizedProps,
    children: normalizeChildren(children),
  };
}

/**
 * Fragment factory function
 */
export function hFragment(
  ...children: (VNode | string | number | boolean | null | undefined)[]
): FragmentVNode {
  return {
    type: DOM_TYPES.FRAGMENT,
    children: normalizeChildren(children),
  };
}

/**
 * Create text node
 */
export function hString(str: string | number): TextVNode {
  return { 
    type: DOM_TYPES.TEXT, 
    value: String(str) 
  };
}

/**
 * Normalize children - handle all JSX child types
 */
function normalizeChildren(children: (VNode | string | number | boolean | null | undefined)[]): VNode[] {
  const normalized: VNode[] = [];
  
  for (const child of children) {
    if (child === null || child === undefined || typeof child === 'boolean') {
      // Skip falsy values (except 0)
      continue;
    } else if (Array.isArray(child)) {
      // Flatten arrays (from map operations)
      normalized.push(...normalizeChildren(child));
    } else if (typeof child === 'string' || typeof child === 'number') {
      // Convert primitives to text nodes
      normalized.push(hString(child));
    } else if (isVNode(child)) {
      // Already a VNode
      normalized.push(child);
    }
  }
  
  return normalized;
}

/**
 * Type guard to check if something is a VNode
 */
function isVNode(value: any): value is VNode {
  return value && 
         typeof value === 'object' && 
         'type' in value && 
         Object.values(DOM_TYPES).includes(value.type);
}

/**
 * Utility function to map text nodes (keeping for backward compatibility)
 */
export function mapTextNodes(children: (VNode | string)[]): VNode[] {
  return children.map(
    (child): VNode => (typeof child === "string" ? hString(child) : child),
  );
}