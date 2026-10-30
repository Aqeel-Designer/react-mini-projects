# Stopwatch

A stopwatch application built with React that measures elapsed time with start, stop, and reset functionality. It displays minutes, seconds, and milliseconds, updating every 10 milliseconds.

## Features

- Start the stopwatch.
- Stop and pause the timer.
- Resume from the previously elapsed time.
- Reset the stopwatch to zero.
- Display time in minutes, seconds, and milliseconds.
- Update the display every 10 milliseconds.
- Maintain accurate elapsed time using JavaScript timestamps.

## Technologies

- React
- JavaScript
- HTML5
- CSS3
- Vite

## Concepts Used

- Functional Components
- JSX
- `useState`
- `useEffect`
- `useRef`
- State Management
- Conditional Rendering and Logic
- Event Handling
- `setInterval()`
- `clearInterval()`
- `Date.now()`
- JavaScript `Math` Methods
- String Formatting
- `String.padStart()`
- Component Lifecycle and Cleanup

## How It Works

The application uses `useState` to manage the stopwatch's running status and elapsed time.

The `useEffect` hook starts an interval when the stopwatch is running and cleans it up when stopped or when the component unmounts.

The `useRef` hook stores the interval ID and starting timestamp without triggering unnecessary re-renders. This also allows the stopwatch to resume from its previously elapsed time.

The `formatTime()` function converts the elapsed milliseconds into a readable minutes, seconds, and milliseconds format.

## Getting Started

1. Navigate to the project directory:

   ```bash
   cd Stopwatch
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL provided by Vite in your browser.
