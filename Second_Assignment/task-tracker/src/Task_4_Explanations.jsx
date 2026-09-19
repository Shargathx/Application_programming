/*

Passing data from parent to child
Data flows downward in React. A parent component passes data to a child
component using HTML-like attributes called props (properties).

--------------------------------

Receiving props with destructuring
Instead of accepting a generic props object and typing props.task,
you can extract specific properties right in the parameter list using ES6 destructuring (e.g., ({ task })).

--------------------------------

Passing strings, booleans, and objects
You can pass various data types as props. Strings use quotes (e.g., title="Learn React"),
while numbers, booleans, arrays, and objects are passed inside curly braces (e.g., isCompleted={false} or task={{ id: 1, title: 'Test' }}).

--------------------------------

Why props are read-only
React components must act like pure functions with respect to their props.
A child component must never mutate or change the props passed down to it; all data flow is strictly top-down.

--------------------------------

Using different data with the same component
Props make components reusable. You can render the exact same component structure multiple times
with completely different content just by changing the props passed to it.

*/
