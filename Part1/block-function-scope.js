//bloock scope vs functional scope

//in js this is block  {}

//let and const are block scope
//var is functional scope. var declared in main function i.e, outside all functions can be accessed anywhere.
{
  let variable = "Hi";
  const variable2 = "Hello";
  var varaible3 = "world";
}

// console.log(variable); //the let is cannot be accessed here
// console.log(variable2); //the const is cannot accessible here
console.log(varaible3); // var  is accessbile here

const fun1 = () => {
  var valueFun1 = "fun1";
  function fun2() {
    var valueFun2 = "fun2";
    console.log(valueFun1);
  }
  console.log(valueFun2); // not accessible here
};

console.log(valueFun1); // the valueFun1 is not accessible here because it is only accessble in function as var is functional scope
