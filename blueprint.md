# Lotto Number Generator

This is a simple web application that generates 6 random lotto numbers between 1 and 45.

## Features

*   Generates 6 unique random numbers.
*   Displays the numbers in a clean and modern interface.
*   Dark/Light mode toggle.

## Current Task: Add Dark/Light Mode Toggle

*   **HTML**: Add a theme toggle switch to `index.html`.
*   **CSS**: Create a new `:root` definition for the `light-mode` class.
*   **JavaScript**:
    *   Get references to the theme toggle switch and the `body`.
    *   Add a `click` event listener to the switch.
    *   When the switch is clicked, toggle the `light-mode` class on the `body`.
    *   Store the user's preference in `localStorage` and apply it on page load.