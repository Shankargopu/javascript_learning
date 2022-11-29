// //spread operator

// const array1=[1,2,3,4];
// const array2=[5,6,7,8];

// const array=[...array1,...array2];  // both array are cloned into newArray
// array2.push(10);
// console.log(array);
// //  output:
// // [
// //     1, 2, 3, 4,
// //     5, 6, 7, 8
// //   ]

// const newArray=[...array1,array2];
// //here the whole array2 is copied into newArray. i.e, along with address
// console.log(newArray);  //output : [ 1, 2, 3, 4, [ 5, 6, 7, 8 ] ]

// // we can also clone string like below as string is iterable. it will iterate on the
// //string and add each element of string to array as element. It will not work with integers

// const stringArr=[..."123456789"];
// console.log(stringArr);
// // output:
// // [
// //     '1', '2', '3',
// //     '4', '5', '6',
// //     '7', '8', '9'
// //   ]

//spread-operator in object.

const obj1 = {
  key1: "value1",
  key2: "value2",
};

const obj2 = {
  key1: "repatedValue",
  key3: "value3",
  key4: "value4",
};

const newobj = {
  ...obj1,
  ...obj2,
};

console.log(newobj); //output: { key1: 'repatedValue', key2: 'value2', key3: 'value3', key4: 'value4' }

//The key should be unique, if we mention two same keys also it will consider as one

//If we spread the string in obj than their indexes becomes keys.

const newObj={..."abcd"};
console.log(newObj); // { '0': 'a', '1': 'b', '2': 'c', '3': 'd' }

//iterating Arrays

const newObjArr={...["item1",2,"item3"]};
console.log(newObjArr);  //{ '0': 'item1', '1': 2, '2': 'item3' }
