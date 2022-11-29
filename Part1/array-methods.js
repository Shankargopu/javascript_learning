//map, filter , forEah , reduce , sort

//if we wnat to multiply each element of array by 2 than.
//traditional way

// let numArr = [4, 5, 6, 7, 8];
// function multiplyBy2(value, index) {
//   console.log(`The value of index is ${index}`);
//   console.log(`The value of ${value} * 2 is ${value * 2}`);
// }

// for (let i = 0; i < numArr.length; i++) {
//   multiplyBy2(numArr[i], i);
// }

//using forEach

// numArr.forEach(multiplyBy2); // we can pass mutliplyBy2 function to the forEach.

//simply we can write the forEach like this
// numArr.forEach((num, i) => {
//   console.log(num * 2, i);
// });

// const users = [
//   { firstName: "bhavani", age: 22, gender: "male" },
//   { firstName: "preetham", age: 21, gender: "male" },
//   { firstName: "ram", age: 12, gender: "male" },
//   { firstName: "vijay", age: 20, gender: "male" },
// ];

// const fun=(value, index)=>{
//    console.log(index);
//    console.log(value);
// }

// users.forEach(fun);

// let numArr0 = [4, 5, 6, 7, 8];
// numArr0.forEach((value) => {
//   console.log(value * 2);
// });

//for each does not return an array

// let ra = users.forEach((value, i) => {
//   console.log(`index is ${i}`);

//   //   console.log(value["firstName"]);
// });

// let numArr = [4, 5, 6, 7, 8];

// using map.
//map returns the new Array with the result

// const result = numArr.map((value, index) => {
//   return `index:${index} and value:${value * value}`;
// });
// console.log(result); // [ [
//   'index:0 and value:16',
//   'index:1 and value:25',
//   'index:2 and value:36',
//   'index:3 and value:49',
//   'index:4 and value:64'
// ]

// const users = [
//   { firstName: "bhavani", age: 22, gender: "male" },
//   { firstName: "preetham", age: 21, gender: "male" },
//   { firstName: "ram", age: 12, gender: "male" },
//   { firstName: "vijay", age: 20, gender: "male" },
// ];

// let userNames = users.map((user) => {
//   return user["firstName"];
// });

// console.log(userNames);

//filter : filter always return boolean value and if the boolean is true the element will be added to the array

// let numArr = [4, 5, 6, 7, 8];

// const evenNumbers = numArr.filter((number) => {
//   return number % 2 !== 0;  //[ 5, 7 ]
// });

// console.log(evenNumbers);

//reduce

// let numArr = [4, 5, 6, 7, 8, 20];

// const sum = numArr.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// },0 //this 0 is initial value of accumalator
// );

//working of reduce

//    accumulator  currentValue     return
//    0+4           5               9
//    9             6              15
//    15            7              22
//    22            8              30
//    30            20             50

// console.log(sum); //50

// const userCart = [
//   { productId: 1, productName: "redmi", price: 22000 },
//   { productId: 2, productName: "Iphone", price: 59000 },
//   { productId: 3, productName: "TV", price: 12000 },
//   { productId: 4, productName: "JBL", price: 2500 },
// ];

// const totalAmount = userCart.reduce((totalPrice, currentValue) => {
//       return totalPrice+ currentValue.price;
// },0);

// console.log(totalAmount);

//sort Method  ; sort method changes the original array. By default sort works based on ASCII characters

// let numArr = [1000, 567, 890, 234, 5678, 100, 90];

// numArr.sort();

// console.log(numArr); //[100, 1000, 234,567, 5678, 890,90  ]

//the ascii code of l is less than 2 so 100, 1000 came befoe 234 , and 8 ascii char is less than 9. so 890 comes
//first than 90
// const userNames=["bhavani","shankar","abc","pree","sai"];
// userNames.sort();
// console.log(userNames);   // [ 'abc', 'bhavani', 'pree', 'sai', 'shankar' ]

//To sort array numbers we will use sort like this
let numArr = [100, 23, 4, 56, 78, 90, 34];

numArr.sort((a, b) => {
  return a - b;
});

console.log(numArr); //  [4, 23,  34, 56,  78, 90, 100]
//ascending order

//working of sort
//100,23   if(a-b) returns positive than swaps and b is 100 and a is 23.(100-23=77)  ---> b,a
// 23,100
//4,56           // if(a-b) return negative than we a is 4 and b is 56 only

//descending order

numArr.sort((a, b) => b - a);
console.log(numArr); //[100, 90, 78, 56,   34, 23,  4]

//real time example.

const products = [
  { productId: 1, productName: "redmi", price: 22000 },
  { productId: 2, productName: "Iphone", price: 59000 },
  { productId: 3, productName: "TV", price: 12000 },
  { productId: 4, productName: "JBL", price: 2500 },
  { productId: 5, productName: "Laptop", price: 60000 },
];

//low to high (based on price)
const lowToHiGH = products.slice(0).sort((a, b) => {
  //here we are cloning the products array into low to high array using slice.so that original array will not affect
  return a.price - b.price;
});
console.log(lowToHiGH);

//high to low

const HighToLow = products.slice(0).sort((a, b) => {
  //here we are cloning the products array into low to high array using slice.so that original array will not affect
  return b["price"] - a["price"];
});

console.log(HighToLow);
