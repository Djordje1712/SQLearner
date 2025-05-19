# SQLearner Theme System

This document describes the theming system implemented in the SQLearner application.

## Overview

The application supports light and dark themes using Angular Material's theming system combined with CSS custom properties (variables). The theme can be toggled by users and automatically respects the user's system preference.

## Implementation Details

### Structure

- `ThemeService`: Located in `src/app/core/services/theme.service.ts`
  - Manages theme state using RxJS BehaviorSubject
  - Persists theme preference in localStorage
  - Detects and applies system theme preference

- `ThemeToggleComponent`: Located in `src/app/shared/components/theme-toggle`
  - A standalone Angular component that provides a button to toggle between light and dark themes
  - Can be easily added to any part of the application

- Global Theme Styles: Located in `src/styles.scss`
  - Defines two Angular Material themes (light and dark)
  - Provides CSS custom properties for consistent theming across the application

### CSS Variables

The following CSS variables are available for use throughout the application:

```css
:root {
  /* Light theme variables (default) */
  --background-color: #f5f5f5;
  --text-color: #333333;
  --card-background: #ffffff;
  --border-color: #e0e0e0;
  --hover-color: rgba(0, 0, 0, 0.04);
}

.dark-theme {
  /* Dark theme variables (applied when .dark-theme class is present) */
  --background-color: #121212;
  --text-color: #ffffff;
  --card-background: #1e1e1e;
  --border-color: #333333;
  --hover-color: rgba(255, 255, 255, 0.1);
}
```

## Usage

### Adding Theme Toggle to a Component

```html
<!-- Import the component -->
<app-theme-toggle></app-theme-toggle>
```

### Using Theme Variables in Components

```scss
.my-component {
  background-color: var(--card-background);
  color: var(--text-color);
  border: 1px solid var(--border-color);
}

.my-component:hover {
  background-color: var(--hover-color);
}
```

### Demo

A theme demo page is available at `/theme-demo` showing all themed components and variables.

## Extending the Theme

To add new theme variables:

1. Add them to both `:root` and `.dark-theme` in `src/styles.scss` 
2. Use them in your components' styles

To customize Angular Material components:

1. Modify the theme definitions in `src/styles.scss`
2. Use Angular Material's theme mixins for custom components

## Best Practices

- Always use the provided CSS variables for color, background, etc.
- Avoid hard-coded color values in component styles
- Use appropriate Material design components that respect the current theme
- Test all components in both light and dark themes
