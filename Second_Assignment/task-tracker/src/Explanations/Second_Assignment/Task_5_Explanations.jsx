/*

onClick and event-handler functions
onClick is a React event handler property used to listen for click interactions on elements.
You pass a function to it that executes when the element is clicked.

--------------------------------

The difference between passing and calling a function:
    Passing: onClick={handleClick} passes the function reference so it only runs when clicked.
    Calling: onClick={handleClick()} invokes the function immediately during render, which causes bugs or infinite loops.

--------------------------------

State versus an ordinary variable
Ordinary variables disappear or don't trigger re-renders when their values change inside a component.
State variables (managed by React) persist across renders and automatically trigger a UI update when modified via their setter function.

--------------------------------

useState and its setter
useState is a React Hook that returns an array with two elements: the current state value and a setter function to update it.

--------------------------------

Updating based on previous state
When a new state depends on the old one (like toggling true/false),
you should pass a function to the setter (e.g., setCompleted(prev => !prev)) to ensure maximum safety and avoid race conditions.

--------------------------------

Calling Hooks at the top level of a component
Hooks must always be called at the very top level of your React component
function (not inside loops, conditions, or nested functions) to ensure React preserves state across renders.

--------------------------------

Conditional rendering with if, ternary expressions (? :), and &&
Different ways to display different UI elements based on certain conditions (e.g., showing "Completed" vs "Not completed").

*/
