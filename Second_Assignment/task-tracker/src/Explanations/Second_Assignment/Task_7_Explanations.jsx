/*

Controlled inputs (value and onChange)
React components manage form input state by tying the input's value directly to state and updating it via onChange.   

--------------------------------

event.target.value
This property extracts the current text typed into the input field from the event object.

--------------------------------

Handling onSubmit
This event handler listens for form submission actions, such as clicking a submit button or pressing Enter.

--------------------------------

event.preventDefault()
This method stops the browser's default behavior of reloading the page upon form submission.

--------------------------------

Connecting a label to an input
Linking a label to its corresponding input using a htmlFor attribute that matches the input's id improves accessibility.

--------------------------------

Trimming input and rejecting empty titles
Removing surrounding whitespace using .trim() ensures blank or whitespace-only task titles are rejected.

--------------------------------

Displaying validation feedback
Error messages are conditionally rendered on the screen to inform users when validation fails.

*/
