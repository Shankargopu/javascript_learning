// console.log(this)
// console.log(firstName)
// var firstName = "shankar"

// 1) Early error checking : In the code we are having error at 9th line but we will not getting printed
//7th line as well due to that error has be checked early
// console.log(this)
// console.log(firstName)
// var firstName = ."shankar"

//function declarations

// console.log(this) //window object
// console.log(window) //window object
// console.log(myFunction) // [Function: myFunction]
// myFunction();   //this is my function
// console.log(fullName)  //undefined

// function myFunction(){
//     console.log("this is my function")
// }

// var fName="bhavani"
// var lName="shankar"
// var fullName = fName + " " +lName
// console.log(fullName) //bhavani shankar

//function expression

// console.log(this)  //window object
// console.log(window) //window object
// console.log('hey');
// console.log(myFunction);
// var myFunction = function () {
//   console.log("this is my function");
// };

// console.log(myFunction);

console.log(typeof fname) //undefined
