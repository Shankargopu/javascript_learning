//function declarations

// function singHappyBirthDay() {
//   console.log("sing Happy birthday song");
// }

// function add(a, b, c) {
//   return a + b + c;
// }
// // singHappyBirthDay();

// function isEven(number) {
//   return number % 2 === 0;
// }

// function findTarget(array, targetNumer) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === targetNumer) {
//       return i;
//     }
//   }
//   return -1;
// }
// //

// // const result = add(3, 5, 11);
// console.log(isEven(5)); //false
// // console.log(result);

// const ans = findTarget([1, 2, 3, 7, 9], 3);
// console.log(ans); //2, because 3 is at index 2

// function expression

// const sumOfNumbers = function(n1,n2,n3)
// {
//     return n1+n2+n3;
// }

// const findFirstChar = function(anyString){
//     return anyString[0];
// }

// console.log(sumOfNumbers(10,15,13)); //38
// console.log(findFirstChar("bhavani")); //b

//Arrow functions

// const sumOfNumbers = (n1, n2, n3) => {
//   return n1 + n2 + n3;
// };

// const findTarget = (array, target) => {
//   for (let index in array) {
//     if (array[index] === target) {
//       return index;
//     }
//   }
//   return -1;
// };

// const isEven = (number) => number % 2 === 0; //we can also write like this when there is only one line of execution needed
// const firstChar = (anyString) => anyString[0];

// console.log(firstChar("bhavani")); //b
// console.log(isEven(4)); //true
// console.log(sumOfNumbers(14, 15, 16));
// let array = [10, 4, 7, 8, 90];
// console.log(findTarget(array, 90)); //4 index

//Default paramters: we can give some default values to our params

//Before ES6 we need to check like this.

// function sumOfNumbers(a, b) {
//   if (typeof b === "undefined") {
//     b = 0;
//   }
//   console.log(b);
//   return a + b;
// }

// console.log(sumOfNumbers(3)); //returns 3  and not NaN

//Now we can do like this as well do give default values to params. here we are passing 0 to b. so b value will be
//0 when we don't pass any value to the b
// function sumOfNumbers(a, b = 0) {
//   return a + b;
// }

// console.log(sumOfNumbers(3)); //returns 3  and not NaN
// console.log(sumOfNumbers(4, 6)); //returns 10

// //rest params

// function sumOfall(...numArr) {
//   //this will accept all params in single param numArr.
//   let sum = 0;
//   console.log(Array.isArray(numArr));
// //   for (let value of numArr) {
// //     sum = sum+value;
// //   }
// //   return sum;
// let total=0;
// for(let i=0;i<numArr.length;i++)
// {
//   total=total+numArr[i];

// }
// return total;
// }
// const res=sumOfall(10,19,78);
// console.log(res);

//param destructuring : while passing obj as arguments we can destructure the objects daily

// const person = {
//   firstName: "bhavani",
//   age: 22,
//   gender: "Male",
//   couutry: "india",
// };

// const func = ({ firstName, gender, ...remaining }) => {
//   console.log(firstName, gender); //bhavani male
//   console.log(remaining); // { age: 22, couutry: 'india' }  this remaining variable returns the object here which contains age,country here
// };

// func(person);

//callback functions

//we can pass functions to the function as well.

//example:

// function main(callback) {
//   console.log("Hey I am from main function");
//   console.log(callback); // here I am getting whole function.   [Function: sub]
//   callback(); //Hey I am from sub. Like this we will callback the functions inside another function
// }

// function sub() {
//   console.log("Hey I am from sub");
// }

//  main(sub); //here I am passing sub function to the main function

// we can return function from another functions

const main = () => {
  const sub = () => {
    console.log("sub");
  };
  return sub;
};

const ans = main();
ans(); //sub

//the functions which are accepting another functions as params or functions which are returing another function or
//function which is doing both are known as higher order functions
