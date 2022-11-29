//find , every , some
// const animals=["elephant","buffalo","cat","dog","cow"];

// const animalObj=animals.reduce((obj,animal)=>{
//      obj[animal]=animal;
//      return obj;
// },{})

// console.log(animalObj);

// const animalsWith3chars=animals.filter((value)=>{
//     return value.length===3;
// })

// console.log(animalsWith3chars);   //[ 'cat', 'dog', 'cow' ]

//find : It retuns the first occurence or it finds the first occurence of which satisifes the condition mentioned
//and returns that value.

// const animals = ["elephant", "buffalo", "catt", "dogy", "cow"];
// const res = animals.find((value) => {
//   return value.length === 3; //cat
// });
// console.log(res);

//real-time example : find the product which product is 3
// const userCart = [
//   { productId: 1, productName: "redmi", price: 22000 },
//   { productId: 2, productName: "Iphone", price: 59000 },
//   { productId: 3, productName: "TV", price: 12000 },
//   { productId: 4, productName: "JBL", price: 2500 },
// ];

// const product=userCart.find((product)=>{
//     return product.productId===3
// })

// console.log(product)

//everyMethod: this method use to check every element of an array whether satisfies the required logic.
//returns boolean value whether true or false in this everyMethod case

// const numArr = [10, 8, 12, 80];

// const result = numArr.every((number) => {
//   return number % 2 === 0;
// });

// console.log(result, typeof result); //true boolean

//real-time example : check if every price of products less than 60000
// const userCart = [
//   { productId: 1, productName: "redmi", price: 22000 },
//   { productId: 2, productName: "Iphone", price: 61000 },
//   { productId: 3, productName: "TV", price: 12000 },
//   { productId: 4, productName: "JBL", price: 2500 },
// ];

// const res = userCart.every((product) => {
//   return product.price < 60000;
// });
// console.log(res); //false

//some : it returns true if any one element of array is satisified

// const numArr = [1, 3, 12, 9];

// let result = numArr.some((number) => {
//   return number % 2 === 0;
// });

// console.log(result); //true (beause 12 is present here which is divisble by 2)

//real time example : need to check if any product is above 50k
// const products = [
//   { productId: 1, productName: "redmi", price: 22000 },
//   { productId: 2, productName: "Iphone", price: 61000 },
//   { productId: 3, productName: "TV", price: 12000 },
//   { productId: 4, productName: "JBL", price: 2500 },
// ];

// let res=products.some((product)=>{
//     return product.price>50000;
// })
// console.log(res);  //true   (iphone price is 61000)

//fill: this methods helps in fill the elements in the Array. this method will alter the original array

// let myArray=new Array(10);

// myArray.fill(-1);

// console.log(myArray)   [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]

// let myArray=[1,2,3,4,56,78,9];

// myArray.fill(40,1,6);
//it fills the value 40 from 1st index to the 5th index
// console.log(myArray)  [1, 40, 40, 40,  40, 40,  9]

//splice Method  : helps in deleting the elements and inserting the elements in array at specific index.
//start, delete(count)[optional] , insert[optional]

let myArray = [1, 2, 3, 4, 56, 78, 9];

const deltedItems = myArray.splice(3, 2); //removes 2 elements starting from index3
console.log(deltedItems); // [ 4,56 ]
console.log(myArray);
// [1, 2, 3, 78, 9];

let numArray = [7, 8, 9, 9, 0, 34, 5];

const delted = numArray.splice(3, 2, "item1", "item2"); //inserts item1 and item2 after removing 2 elements starting from index3
// console.log(delted);[9, 0];
// console.log(numArray)[(7, 8, 9, "item1", "item2", 34, 5)];
