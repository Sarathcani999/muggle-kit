# Muggle Kit

A lightweight, reactive frontend framework for building dynamic web applications with a virtual DOM implementation and event-driven architecture.

## Features

### Virtual DOM Implementation
The framework implements a virtual DOM system that efficiently manages DOM updates. Instead of directly manipulating the browser's DOM (which can be expensive), changes are first made to a lightweight virtual representation and then efficiently applied to the actual DOM.

- **Virtual Node Types**: Supports text nodes, element nodes, and fragments
- **Efficient Rendering**: Only updates DOM elements that have changed
- **Clean Lifecycle**: Proper mounting and unmounting with resource cleanup

### Component-Based Architecture
Build your application through composable, reusable components with a clear separation of concerns:

- **State Management**: Maintain application state within component scope
- **View Functions**: Declarative UI representation based on state
- **Event Handling**: Intuitive event binding and propagation

### Reactive Event System
A reactive event dispatcher that enables seamless communication between components:

- **Command Pattern**: Dispatch and subscribe to events by name
- **Reducer Pattern**: Transform state predictably in response to events
- **Lifecycle Hooks**: Execute code at specific points in the application lifecycle

### Declarative DOM Creation
Create DOM structures using simple function calls with JSX-like syntax:

- **Element Creation**: Create DOM elements with the `h()` function
- **Fragment Support**: Group multiple elements without a wrapper node
- **Text Nodes**: Simple text content handling

### Attribute and Event Management
Comprehensive management of element attributes and event listeners:

- **Class Handling**: Support for both string and array class definitions
- **Style Management**: Inline style application with proper typing
- **Event Binding**: Clean API for attaching and removing event listeners
- **Data Attributes**: Support for custom data attributes

### Clean API Surface
A minimal, intuitive API that's easy to learn and apply:

- **Simple App Initialization**: Create apps with minimal boilerplate
- **Mount/Unmount**: Easy application lifecycle management
- **Typed Interface**: TypeScript support for better development experience

## Getting Started

### Basic Usage

```typescript
import { createApp, h } from './framework';

// Define initial state
const initialState = { count: 0 };

// Define view function
const view = (state, emit) => h('div', {}, [
  h('h1', {}, [`Count: ${state.count}`]),
  h('button', { 
    on: { 
      click: () => emit('INCREMENT') 
    } 
  }, ['Increment'])
]);

// Define reducers
const reducers = {
  INCREMENT: (state) => ({ ...state, count: state.count + 1 })
};

// Create and mount the app
const app = createApp({
  state: initialState,
  view,
  reducers
});

app.mount(document.getElementById('app'));
```

## Core Components

- **createApp**: Main entry point for creating application instances
- **h**: Function for creating virtual DOM elements
- **hFragment**: Create document fragments for grouped elements
- **Dispatcher**: Event system for communication between components
- **mountDOM/destroyDOM**: Functions for DOM manipulation

## Advanced Features

- **Automatic Cleanup**: Event listeners are automatically removed when elements are destroyed
- **Flexible Attribute Handling**: Support for complex attribute types
- **Performance Optimized**: Minimizes DOM operations for better performance

> Note: This Project was created as part of research purpose on breaking down the inner working of a Frontend Framework. It is not intended for production-grade usage.