# Vanilla JavaScript Projects 🚀

A curated collection of practical, interactive web applications built from scratch using pure **Vanilla JavaScript**, **HTML5**, and **CSS3**—without external libraries or frameworks. This repository showcases core JavaScript fundamentals, DOM manipulation, asynchronous programming, and event-driven architecture.

All projects are integrated into a centralized dashboard menu located at the root [`index.html`](./index.html), allowing the entire collection to be deployed and explored from a single live URL.

---

## 🌐 Live Deployment

> 🔗 **Live Demo:** `[Add Live Deployment Link Here]` <!-- Placeholder for deployment link -->

*All 7 projects are hosted together under the central hub interface above. Once deployed, each project can be launched directly from the main menu.*

---

## 📋 Projects Overview

| # | Project | Description | Key Concepts Learned | Directory |
|---|---------|-------------|----------------------|-----------|
| 1 | [Calculator](./Calculator) | A responsive on-screen calculator that performs fundamental arithmetic operations and displays expressions in real-time. | DOM manipulation, expression evaluation with error handling (`try...catch`), and event binding. | [`./Calculator`](./Calculator) |
| 2 | [Digital Clock](./Digital%20Clock) | A live digital clock that tracks and displays the user's current local time in 12-hour AM/PM format, updating every second. | `Date` object methods, recurring timers via `setInterval()`, and zero-padding with `padStart()`. | [`./Digital Clock`](./Digital%20Clock) |
| 3 | [Image Slider](./Image%20Slider) | An interactive photo carousel offering smooth automatic transitions alongside manual previous and next navigation controls. | Array indexing, cycling boundaries, `DOMContentLoaded` lifecycle, and dynamic CSS class toggling (`classList`). | [`./Image Slider`](./Image%20Slider) |
| 4 | [Quiz Game](./Quiz%20Game) | A dynamic multiple-choice quiz that tracks scores, shows visual feedback on selection, and displays an animated progress bar and final score evaluation. | State management, dynamic DOM creation (`createElement`), HTML5 `dataset` attributes, and asynchronous delays with `setTimeout()`. | [`./Quiz Game`](./Quiz%20Game) |
| 5 | [Rock Paper Scissors](./RockPaperScissor) | A classic hand-game played against the computer featuring randomized AI moves, real-time scorekeeping, and color-coded match results. | Pseudo-random generation via `Math.random()`, DOM tree traversal (`firstElementChild`, `nextElementSibling`), and conditional scoring logic. | [`./RockPaperScissor`](./RockPaperScissor) |
| 6 | [Stopwatch](./Stopwatch) | A high-precision stopwatch with Start, Stop, and Reset controls that accurately measures elapsed time down to centiseconds. | Millisecond timing with `Date.now()`, interval timer management (`setInterval` & `clearInterval`), and elapsed time calculation. | [`./Stopwatch`](./Stopwatch) |
| 7 | [Weather App](./Weather%20App) | A real-time weather forecasting tool that queries the OpenWeatherMap API for user-specified cities to show temperature, humidity, conditions, and contextual emojis. | Asynchronous JavaScript (`async`/`await`), Fetch API, JSON parsing, API error handling, and conditional emoji rendering. | [`./Weather App`](./Weather%20App) |

---

## 🛠️ Detailed Project Breakdown

### 1. 🧮 Calculator
- **Description:** A clean, functional calculator that evaluates mathematical expressions in real-time with support for standard arithmetic operations and error handling.
- **Key Concepts Learned:**
  - Querying and updating HTML input values via the DOM.
  - Parsing and calculating expressions using JavaScript functions.
  - Safe error handling using `try...catch` blocks to catch invalid mathematical syntax.
- **Directory:** [`./Calculator`](./Calculator)

---

### 2. ⏰ Digital Clock
- **Description:** A minimalist digital clock interface that renders the current hour, minute, and second in a 12-hour format with AM/PM indicators.
- **Key Concepts Learned:**
  - Utilizing the JavaScript `Date` API to extract hours, minutes, and seconds.
  - Implementing asynchronous intervals using `setInterval()` for second-by-second updates.
  - Formatting single-digit numbers into two-digit strings using `String.prototype.padStart()`.
  - Applying CSS backdrop filters and glassmorphism styling.
- **Directory:** [`./Digital Clock`](./Digital%20Clock)

---

### 3. 🖼️ Image Slider
- **Description:** An image slideshow carousel featuring automated slide intervals as well as manual next/previous navigation buttons.
- **Key Concepts Learned:**
  - Selecting and traversing node collections using `document.querySelectorAll()`.
  - Managing slide indices and circular boundary logic for wrapping around slide ends.
  - Managing timing events with `setInterval()` and pausing/clearing them with `clearInterval()`.
  - Controlling visual transitions via class manipulation (`classList.add()` / `classList.remove()`).
- **Directory:** [`./Image Slider`](./Image%20Slider)

---

### 4. 🧠 Quiz Game
- **Description:** An interactive trivia quiz that walks users through questions, provides instant color-coded answers feedback, tracks progress, and calculates an end-of-game summary score.
- **Key Concepts Learned:**
  - Structuring and consuming complex JavaScript object arrays representing question datasets.
  - Programmatic DOM element generation and injection using `document.createElement()` and `appendChild()`.
  - Storing and reading custom button metadata with HTML5 `data-*` attributes (`dataset.correct`).
  - Managing application state across multiple screens (Start, Quiz, Results) using CSS visibility classes.
  - Orchestrating question pacing with `setTimeout()`.
- **Directory:** [`./Quiz Game`](./Quiz%20Game)

---

### 5. ✊ Rock Paper Scissors
- **Description:** An interactive Rock-Paper-Scissors game against the computer with automatic outcome determination and persistent score counters.
- **Key Concepts Learned:**
  - Simulating computer decision-making using `Math.random()` and `Math.floor()`.
  - Utilizing DOM relationship traversal properties (`firstElementChild`, `nextElementSibling`, `lastElementChild`).
  - Implementing game outcome logic using JavaScript `switch` statements and conditional ternary operators.
  - Dynamically altering inline CSS styles and text content based on win/loss/tie outcomes.
- **Directory:** [`./RockPaperScissor`](./RockPaperScissor)

---

### 6. ⏱️ Stopwatch
- **Description:** A digital stopwatch with start, stop, and reset capabilities that accurately tracks elapsed time down to centiseconds (hundredths of a second).
- **Key Concepts Learned:**
  - Measuring true elapsed duration using delta timestamps with `Date.now()`.
  - Precise interval updating with `setInterval()` and state toggling using boolean flags (`isRunning`).
  - Mathematical breakdown of milliseconds into hours, minutes, seconds, and centiseconds.
  - Formatting time strings cleanly with pad operations.
- **Directory:** [`./Stopwatch`](./Stopwatch)

---

### 7. ⛅ Weather App
- **Description:** A weather forecast application that retrieves real-time weather data for any searched city via the OpenWeatherMap API and displays temperature, humidity, conditions, and dynamic weather emojis.
- **Key Concepts Learned:**
  - Consuming external RESTful web APIs using `fetch()` and `async`/`await`.
  - Object destructuring to extract nested JSON properties cleanly.
  - Converting temperature units (Kelvin to Celsius).
  - Robust client-side validation and HTTP error handling (`response.ok`).
  - Mapping numeric weather condition IDs to representative emoji icons using `switch(true)` pattern.
- **Directory:** [`./Weather App`](./Weather%20App)

---

## 🚀 Getting Started

To explore or run the project hub locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ArchitDash12/vanilla-js-projects.git
   ```

2. **Navigate to the repository:**
   ```bash
   cd vanilla-js-projects
   ```

3. **Open the central hub:**
   Open the root `index.html` file in your browser to view and navigate between all projects:
   ```bash
   # On Linux
   xdg-open index.html
   # On macOS
   open index.html
   # On Windows
   start index.html
   ```
   Or use VS Code's **Live Server** extension on the repository root.

---

## 👤 Author

**Archit Dash**
- GitHub: [@ArchitDash12](https://github.com/ArchitDash12)
