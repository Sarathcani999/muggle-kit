# Development Guide

This guide explains how to develop and test changes to the muggle-kit library using the todo application as a development environment.

## Prerequisites

- Node.js >= 18
- npm >= 8.19.4

## Project Structure

```
muggle-kit/
├── apps/
│   └── todo-app/        # Demo application for testing
├── packages/
│   └── core/           # Core library package
└── docs/
    └── DEVELOPMENT.md  # This file
```

## Development Workflow

### 1. Setup

First, install dependencies from the root directory:

```bash
npm install
```

### 2. Running in Development Mode

You'll need two terminal windows for the best development experience:

#### Terminal 1 - Core Library
```bash
cd packages/core
npm run dev
```
This starts the TypeScript compiler in watch mode, automatically rebuilding the core package when changes are made.

#### Terminal 2 - Todo App
```bash
cd apps/todo-app
npm run dev
```
This starts the Vite development server for the todo application.

### 3. Making Changes

1. Make changes to files in `packages/core/src`
2. The core package will automatically rebuild
3. The todo app will automatically reload with the new changes

### 4. Testing Changes

The todo app serves as a live testing environment. You can:
- Add new todos
- Toggle todo completion
- Delete todos
- Test any new features you add to the library

## Available Scripts

### Root Directory
- `npm run build` - Build all packages
- `npm run dev` - Run development mode
- `npm run lint` - Run linting
- `npm run format` - Format code
- `npm run check-types` - Check TypeScript types

### Core Package
- `npm run dev` - Watch mode for development
- `npm run build` - Build the package
- `npm run publish-dry` - Test package publishing

### Todo App
- `npm run dev` - Start development server
- `npm run build` - Build the application
- `npm run preview` - Preview the built application

## Best Practices

1. **Testing Changes**: Always test your changes in the todo app before committing
2. **Type Safety**: Ensure TypeScript types are properly defined and exported
3. **Documentation**: Update relevant documentation when adding new features
4. **Code Style**: Follow the project's code style and formatting rules

## Troubleshooting

If changes aren't reflecting in the todo app:
1. Check if the core package is rebuilding successfully
2. Ensure the todo app is running the latest version
3. Try restarting both development servers
4. Check the browser console for any errors

## Additional Resources

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/guide/)
- [npm Workspaces Documentation](https://docs.npmjs.com/cli/v7/using-npm/workspaces) 