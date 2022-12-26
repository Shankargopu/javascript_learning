
//synchronus programming
// console.log("script start");
// let num=0;
// for(let i=0;i<=1000000;i++)
// {
//   num+=i;
// }

// console.log(num)
// console.log("script end");


// asynchronus : using promises


// console.log("script start");
// let num=0;

// async function timer1()
// {

//   for(let i=0;i<100000;i++)
//   {
//     num+=i;
    
//   }  
//   return num;
// }
// timer1().then((data)=>{
//   console.log(data)
// })
// console.log("script end");


//asynchronus : using setTimeout

console.log("script start");
let num=0;
for(let i=0;i<=1000000000;i++)
{
  num+=i;
}
//we will have one id for setTimeout, it will return the Id. this id can be used to stop the setTimeout being executed
//
setTimeout(()=>{
console.log("from inside setTimeout");
},0)

console.log(num);
console.log("script end");