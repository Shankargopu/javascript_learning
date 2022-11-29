
    //  primitive 
// let num1=10;
// let num2= num1;
// num1++;
// console.log(num1);  //11
// console.log(num2);  //10

// primitive data types sotred inside stack. every new element use new memory and spaces in stack so every element 
//unique adress. that'w the num2 is not updated here eventhough we updated num1


    //   refernce dataType
// let numArray= [1,2,3];
// let numArray2=numArray;
// numArray.push(4);
// console.log(numArray===numArray2)  //true
// console.log(numArray, numArray2)   //[1,2,3,4]  [1,2,3,4]


//refrence data types sotred in heap and there adress stored in stack and points to that heap adress. when we assign
// this numArray to numArray , numArray adress also assigned to numArray2, so if we update something in this
// numArray that numArray also changes beacuse they are sharing same adress.



let array1= [1,2,3,4];
// let array2 = [].concat(array1);  //type1 -concat
// let array2 = array1.slice(0);  //type2  - slice
// let array2 = [...array1];   //type3- spread operator, using this operator we can copy the contents of whole array1 to array2
let array3=[5,6,7];
//if we want add another array to array2 while doing above methods than we can do it by using following.

// let array2 = [].concat(array1,array3);
// let array2 = array1.slice(0).concat(array3);
let array2 = [...array1, ...array3]   // we can assign muliple array items at once using spread operator like this.
array1.push(5);
console.log(array1===array2);  //flase now both are not same so if we have updated something in array1,not reflects in arr2
console.log(array1, array2)


// so to clone one Array to another Array if can use following Methods.



