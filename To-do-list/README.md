# To-Do List – React

A simple and interactive To-Do List application built with React. It allows users to add, delete, and rearrange tasks while automatically saving them in the browser's Local Storage, so tasks remain available after refreshing the page.

## Features

- **Add Tasks:** Add new tasks using the input field or Enter key.
- **Delete Tasks:** Remove tasks from the list.
- **Reorder Tasks:** Move tasks up or down using the arrow buttons.
- **Automatic Saving:** Tasks are saved in Local Storage whenever the list changes.
- **Persistent Data:** Previously saved tasks are loaded automatically when the application opens.
- **Input Formatting:** Automatically capitalizes the first letter of each task.
- **Input Validation:** Prevents empty or whitespace-only tasks from being added.

## Technologies Used

- React
- JavaScript (ES6+)
- HTML5
- CSS3
- Vite
- Browser Local Storage

## Concepts Used

- Functional Components
- JSX
- React Hooks (`useState` and `useEffect`)
- State Management
- Lazy State Initialization
- Event Handling (`onChange`, `onClick`, `onKeyDown`)
- Conditional Logic
- Array Methods (`map`, `filter`)
- Spread Operator
- Immutable State Updates
- Array Destructuring and Swapping
- Keyboard Events
- Local Storage (`getItem`, `setItem`)
- JSON (`JSON.parse`, `JSON.stringify`)
- Input Validation and String Manipulation
- Dynamic Rendering
- Component Export and Import

## How It Works

The application uses React state to manage the task list and input field. When a user adds, deletes, or reorders a task, the state is updated using immutable array operations.

The `useEffect` hook automatically saves the updated task list to Local Storage. When the application loads, lazy initialization retrieves previously saved tasks, allowing the list to persist even after the browser is refreshed.

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project folder:
   ```bash
   cd To-do-list
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the local URL provided by Vite in your browser.

## Purpose

This project was developed to practice React fundamentals, particularly state management, hooks, event handling, dynamic rendering, immutable array updates, and browser Local Storage.
