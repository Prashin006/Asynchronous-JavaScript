// Easy example
// console.log('Prashin');
// setTimeout(() => {
//   console.log('is a good');
// }, 4000);
// console.log(' boy');

// Callback hell example
const task1 = (callback) => {
  setTimeout(() => {
    console.log('Task 1');
    callback();
  }, 1000);
};

const task2 = (callback) => {
  setTimeout(() => {
    console.log('Task 2');
    callback();
  }, 1000);
};

const task3 = (callback) => {
  setTimeout(() => {
    console.log('Task 3');
    callback();
  }, 1000);
};

const task4 = () => {
  setTimeout(() => {
    console.log('Task 4');
  }, 1000);
};

task1(() => task2(() => task3(() => task4())));
