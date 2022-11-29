// //sets: This datastructure accepts only unique elements. sets(iterableData). we can use array and strings
// //store data.
// //No index-based access
// //sets have its own methods
// //order is not guaranteed
// const newArry = ["item1", "item2", "item3", "item2"];
// const newSet = new Set(newArry);
// newSet.add(2);
// newSet.add(2); //It will not add this element because already 2 is added
// newSet.add(50);
// newSet.add("a");

// console.log(newSet); //{ 'item1', 'item2', 'item3', 2, 50, 'a' }

// const myArray = [1, 2, 3, 3, 4, 5, 5, 6, 7];
// const uniqueElement = new Set(myArray);
// console.log(myArray); //  [ 1, 2, 3, 3, 4, 5, 5, 6, 7 ]
// console.log(uniqueElement); // Set(7) { 1, 2, 3, 4, 5, 6, 7 }

// const charSet = new Set("shankar");

// console.log(charSet); //Set(6) { 's', 'h', 'a', 'n', 'k', 'r' }

// //.has() returns true or false if element present in set than returns true or false

// if (charSet.has("s")) {
//   console.log("character 's' is present");
// } else {
//   console.log("character 's' is not present");
// }

// //we can iterate sets

// for (let char of charSet) {
//   console.log(char);
// }

const numArray = [1, 1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 9, 0, 0];

const uniqueElements = new Set(numArray);
console.log(uniqueElements); //Set(10) { 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 }

// we don't have length property in set. to find the length we can use loop.

let length = 0;
for (let element of uniqueElements) {
  length++;
}

console.log(size); //10
