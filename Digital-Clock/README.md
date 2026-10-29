# Digital Clock

A simple digital clock built with React that displays the current time in a 12-hour format, including hours, minutes, seconds, and AM/PM.

## Features

- Displays the current local time.
- Updates automatically every second.
- Uses a 12-hour time format with AM/PM.
- Adds leading zeros to single-digit hours, minutes, and seconds.
- Cleans up the interval when the component unmounts.

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
- State Updates and Re-rendering
- `setInterval()`
- `clearInterval()`
- JavaScript `Date` Object
- Conditional Expressions
- Template Literals
- String Formatting
- Component Export and Import

## How It Works

The application initializes its state with the current date and time using `useState`. The `useEffect` hook sets up an interval that updates the time every second, causing React to re-render the displayed clock.

The `formatTime()` function converts the time into a 12-hour format, while `padZero()` ensures that single-digit values display with a leading zero. The interval is cleared when the component unmounts to prevent unnecessary background updates.

## Getting Started

1. Navigate to the project directory:

   ```bash
   cd Digital-Clock
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
