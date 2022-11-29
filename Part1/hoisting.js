// //hoisting

// hello(); //it will work eventhough we are calling the function before declaration
//this behaviou is called hoisting

// function hello() {
//   console.log("hello world!");
// }

// hello(); //but it will not work in the case of function expression
//Cannot access 'hello' before initialization
const hello = function () {
  console.log("hello world!");
};
