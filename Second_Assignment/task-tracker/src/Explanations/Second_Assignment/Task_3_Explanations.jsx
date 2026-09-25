/* 

JSX versus HTML
JSX looks like HTML, but it is actually a syntax extension for JavaScript that
gets compiled into JavaScript function calls (React.createElement).

--------------------------------

Capitalised component names
React treats lowercase tags (like <div> or <span class="foo">) as HTML DOM elements.
Component names must start with a capital letter (like <Header/>) so React knows they are custom components.

--------------------------------

Closing tags and using a single parent or Fragment
Every JSX element must be closed (e.g., <br />). A component can only return a single root element,
so multiple elements must be wrapped in a parent container (like a <div>) or an empty React Fragment (<> ... </>).

--------------------------------

JavaScript expressions inside {}
You can embed any valid JavaScript expression (variables, function calls, arrays)
inside JSX by wrapping it in curly braces.

--------------------------------

className and importing CSS
Because class is a reserved keyword in JavaScript, JSX uses className instead to apply CSS classes.
Styles are applied by importing CSS files (e.g., import './TaskCard.css').

--------------------------------

Exporting and importing components
Components are written in separate files and shared using ES modules: export function Header() {} and import { Header } from './components/Header';.

*/
