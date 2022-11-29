// array is a reference type dataType.

// let numbers = [1, 2, 78, 90];

// console.log(typeof numbers); // by default type of array is object.

// //to check whether the something is array or not. we will use

// console.log(Array.isArray(numbers)); // returns true
// //array accepts multiple datatypes as well

// let mixedArr = [1, 3, "a", 3.4];

// console.log(mixedArr); // [ 1, 3, 'a', 3.4 ]

// //unlike strings array is mutable. i.e, we can alter the original array with the array methods.

// let newLength=mixedArr.push(8); //It will push the 8 at end of the array and retuns new length
// console.log(mixedArr,newLength); // [ 1, 3, 'a', 3.4, 8 ] 5

// let poppedElement=mixedArr.pop()   // It will remove the last element and returns the removed element.
// console.log(`The popped element is ${poppedElement}`);

// To make the changes at first than we will use shift and unshift.

// mixedArr.unshift(10); //add elements at the beginning
// console.log(mixedArr)

// mixedArr.shift();
// console.log(mixedArr)  //removes the element at the beginning

// unshift and shift methods are slower when compared to push and pop methods.

// using for loop to print elements of any Array one by one.

const fruits = ["apple", "banana", "grapes"];
// fruits =["hi"]  //it does not support
fruits.push("pineapple");  //eventhough we are using const it supports push and array methods.

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


const newArray=fruits.filter(x=>{
    return x==="banana";
    
})

const newArray2= fruits.map(x=>{
     
        return x==="banana";
     
})

fruits.forEach((x)=>{
    if(x==="banana")
    {
        console.log(x)
    }
})
console.log(newArray2);

console.log(newArray)




