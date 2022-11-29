// let Fruits= ['banana','apple','grapes','orange','fruit5','fruit6'];
// let FRUITS =[];

// we can print the elements of an array using this traditional for-loop
// for(let i=0; i<Fruits.length;i++)
// {
//     if(Fruits[i]==='fruit5')    // we can break loop like this when we find needed element from Array
//     {
//         break;
//     }
//     FRUITS.push(Fruits[i].toUpperCase());

// }

// console.log(FRUITS);

// we can print the elements of an array using this while loop
// let Fruits = ["banana", "apple", "grapes", "orange", "fruit5", "fruit6"];
// let FRUITS = [];
// let i = 0;
// while (i < Fruits.length) {

//     if(Fruits[i]==="fruit5")
//     {
//         break;
//     }
//     FRUITS.push(Fruits[i].toUpperCase());
//     i++;

// }
// console.log(FRUITS)

// we can print the elements of an array using this for of loop, here of loops returns the element
// let Fruits = ["banana", "apple", "grapes", "orange", "fruit5", "fruit6"];
// let FRUITS = [];

// for (let fruit of Fruits) {
//   if (fruit === "grapes") {
//     continue;
//   }
//   console.log(fruit); //prints each array element one by one. skips the grapes.
// }

// we can print the elements of an array using this for in loop. using this in it returns the index of the each element

let Fruits = ["banana", "apple", "grapes", "orange", "fruit5", "fruit6"];
let Value = Fruits.reduce((a, fruit) => {
  a[fruit] = fruit; // we can add dynamic data into objects like this.output :

  return a;
}, {});

// console.log(Fruits.indexOf("appl"));
console.log("the value of a ", Value);
// the value of a  {
//     banana: 'banana',
//     apple: 'apple',
//     grapes: 'grapes',
//     orange: 'orange',
//     fruit5: 'fruit5',
//     fruit6: 'fruit6'
//   }
// let FRUITS = [];
for (let index in Fruits) {
  if (Fruits[index] === "apple") {
    continue;
  }
  Fruits[index] = Fruits[index].toUpperCase();
}
console.log(Fruits);

//array destructuring

let mixedArray = ["i1", "i2", 2, 4, 5, "banana"];

//this way we can destructure the array elements
let [myvar1, myvar2] = mixedArray;

let [myvar3, , myvar5] = mixedArray; // to skip assigning some element than we can just write ,
//to assign some part of the array

let newArr = mixedArray.slice(3);
console.log(newArr); // [ 5, 'banana' ]

console.log(`Vlaue of myvar1`, myvar1); //i1
console.log(`Vlaue of myvar2`, myvar2); //i2
console.log(`Vlaue of myvar2`, myvar3); //i1
console.log(`Vlaue of myvar2`, myvar5); //2
