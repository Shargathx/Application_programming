/*

Rendering task objects with .map()
The .map() method loops through an array of objects and transforms each item
into JSX elements (like rendering a TaskCard for each task).

--------------------------------

Why React needs keys
Keys help React identify which items have changed, been added, or been removed,
optimizing rendering performance and state preservation.

--------------------------------

Why stable task IDs are suitable keys
Using a unique, unchanging identifier (like a task ID) ensures that React can accurately track items
even if their order changes, unlike using array index numbers which can shift.

--------------------------------

Filtering with .filter()
The .filter() method creates a shallow copy of a portion of a given array,
filtered down to just the elements from the given array that pass the test implemented by the provided function.

--------------------------------

Keeping the filter choice in state
Storing the current filter criteria (e.g., 'all', 'completed', 'incomplete') in state allows
the UI to reactively re-filter the list when a user clicks a filter button.

--------------------------------

Calculating a filtered list from existing state instead of storing another copy
Instead of duplicating data into a separate state variable, you derive the filtered array on the fly
during rendering based on the base task state and the active filter choice.

*/
