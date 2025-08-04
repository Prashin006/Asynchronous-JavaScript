// A callback is a function passed as an argument to another function, to be executed later (synchronously or asynchronously)
function greet(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}

// Simple synchronous callback with anonymous function
// greet('Prashin', () => {
//   console.log('Welcome to the world of callbacks!');
// });

// Simple synchronous callback with named function
const sayGoodBye = () => {
  console.log('Good Bye!!!');
};

greet('Prashin', sayGoodBye);
