// functions can return functions

// function outerFunction(){
//    function innerFunction(){
//      console.log("hello world")
//    }
//    return innerFunction;
// }

// const ans= outerFunction();
// ans();
// console.log(ans)

// function printFullName(firstName , lastName){
//     return function printFullName(){
//       console.log(firstName, lastName)
//     }

//  }

//  const ans= printFullName("bhavani","shankar");
//  ans();

//  function calculatePower(power){
//     return function(number){
//         return number ** power
//     }
//  }

//  const ans= calculatePower(3);
//  console.log(ans(2));

//we can also write the above function like this
// const calculatePower=(power)=>(number)=> number ** power

//   const ans= calculatePower(3);
//  console.log(ans(2));

//  const ans_3 = calculatePower(2);
//  console.log(ans_3(5))

//  function calculatePower(power){
//     return function(number){
//         return number ** power
//     }
//  }

//  const ans= calculatePower(3);
//  console.log(ans(2));

function outerFunction() {
  let counter = 0;
  return function innerFunction() {
    if (counter < 1) {
      counter++;
      console.log(`Hi you called me`);
      return 
    }
    console.log("Hi you called me already");
  };
}

const myFunction = outerFunction();
myFunction(); //Hi you called me
myFunction(); //Hi you called me already
myFunction(); //Hi you called me already

const myFunction2 = outerFunction();
myFunction2(); //Hi you called me
myFunction(); //Hi you called me already
