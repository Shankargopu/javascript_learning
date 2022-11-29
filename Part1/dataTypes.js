//typeof operator tells us the dataType of variable

// dataTypes:
// string
// number,
// boolean,
// undefined,
// null
// BigInt,
// Symbol

// let age = 21;

// console.log(typeof age)   //number

//convert number to string

// console.log(typeof (age + ""));

// let myStr="34";

// console.log(typeof myStr);   //string

// convert string to number;

// console.log(typeof (+myStr));  //number

// let age="34";

// console.log(typeof (Number(age)))  //Number

// let x=undefined;

// if(x==null){
//     console.log("hey");  //it prints, ifx===null then it will not execute

// }

//BigInt : it is for storing the biginteger values.
// let bigNumber= BigInt(9007199254740999);
// console.log(bigNumber);
// console.log(Number.MAX_SAFE_INTEGER);

// == not checks dataType
// === checks dataType as well

// let num1=7;
// let num2=7;

// console.log(num1!==num2);

//Truthy and falsy values

// check number odd or even

// let number=14;
// let even=false;

// if(number%2==0)
// {
//     even=true;
// }

// if(even)
// {
//     console.log("The number is even number");
// }
// else{
//     console.log("The number is not even")
// }

//falsy values

// false
// ""
// null
// undefined
// 0

//ternary operator

// let age=6;

// let drink=age>5?"coffee":"milk"

// console.log(drink)

