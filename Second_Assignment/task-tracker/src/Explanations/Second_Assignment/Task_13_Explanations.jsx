/*

Browser console errors and React warnings
The browser console displays syntax errors, runtime exceptions, and helpful React development warnings
(such as missing key props in lists or invalid prop types). These are your first line of defense in debugging.

Inspecting props and state with React Developer Tools
React DevTools allows you to inspect component hierarchies, view live props and state values,
and see how re-renders are triggered without cluttering code with console.log statements.

What a component test checks
Component tests (using tools like Vitest and React Testing Library) verify that a component renders correctly with given inputs (props),
interacts properly with user events (clicks, typing), and triggers the correct callback functions.

Testing behaviour rather than styling or internal variable names
Good tests focus on what the user experiences (e.g., "does the button click trigger the toggle function?") rather than
how it's implemented internally (e.g., class names, CSS styles, or local variable names).
This prevents tests from breaking when you refactor code.

*/
