const score = 100;
// score = 150; // error: assignment to constant variable

let health = 50;
health = 40; // Works, let allows to change values

{
  let blockScoped = "inside";
}
// console.log(blockScoped); // ReferenceError