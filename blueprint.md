# Lotto Number Generator

## Overview

A simple web application to generate random lottery numbers. The application will display 6 unique numbers between 1 and 45.

## Design and Features

*   **UI:** A clean and modern interface with a button to generate numbers and a visually appealing display for the generated numbers.
*   **Color Palette:** A vibrant and energetic color palette will be used.
*   **Typography:** Expressive and clear typography will be used to highlight the generated numbers.
*   **Interactivity:** The "Generate" button will have a "glow" effect on hover.
*   **Background:** A subtle noise texture will be applied to the main background.
*   **Components:** Web Components will be used to encapsulate the lottery number display.

## Current Plan

1.  **HTML (`index.html`):**
    *   Update the title to "Lotto Number Generator".
    *   Create a main container for the application.
    *   Add a heading.
    *   Add a placeholder for the lottery numbers, which will be a custom element (`<lotto-numbers></lotto-numbers>`).
    *   Add a "Generate Numbers" button.
2.  **CSS (`style.css`):**
    *   Define CSS variables for colors.
    *   Style the main container, heading, and button.
    *   Add a background texture.
    *   Style the custom element for displaying lottery numbers.
    *   Add a "glow" effect to the button.
3.  **JavaScript (`main.js`):**
    *   Create a custom element `LottoNumbers` that extends `HTMLElement`.
    *   The custom element will generate and display 6 unique random numbers between 1 and 45.
    *   Add a method to the custom element to regenerate the numbers.
    *   Add an event listener to the "Generate Numbers" button to call the regeneration method on the custom element.
