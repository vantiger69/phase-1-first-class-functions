// Function that receives a function as an argument and calls it
function receivesAFunction(callback) {
  callback(); // Call the callback function
}

// Function that returns a named function
function returnsANamedFunction() {
  function namedFunction() {
    console.log("I'm a named function!");
  }
  return namedFunction;
}

// Function that returns an anonymous function
function returnsAnAnonymousFunction() {
  return function () {
    console.log("I'm an anonymous function!");
  };
}
