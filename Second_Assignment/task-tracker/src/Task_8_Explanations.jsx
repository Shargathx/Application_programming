/*

Lifting state to a common parent
Moving state up to the closest common ancestor component so multiple child components can share and synchronize data.

--------------------------------

Passing data down and callback functions down
Sending data properties to child components, and passing down functions as props so children can communicate actions back to the parent.

--------------------------------

Why state arrays and objects must not be modified directly
Direct mutation does not trigger React's re-render mechanism, leading to unpredictable UI bugs; state must always be updated immutably.

--------------------------------

Adding with spread syntax
Using the spread operator (...) to create a new array or object that includes previous items alongside new additions without mutating the original.

--------------------------------

Updating with .map()
Creating a transformed copy of an array by iterating through elements and returning a new object for the updated item.

--------------------------------

Deleting with .filter()
Generating a new array that excludes specific items by filtering out elements that match a given condition.

--------------------------------

Functional state updates
Passing a callback function to a state setter (like setTasks(prev => ...)) to safely compute the next state based on the current state.

*/
