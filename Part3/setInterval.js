

//setInterval exctues after every interval that the timer mentioned


console.log("script start!!");

let num=0;

//here after every 100 milli seconds the setInterval keep on executing
setInterval(()=>{
  console.log("setInterval printed!");
},100)
for(let i=0;i<100000000;i++)
{
num+=i;
}

console.log(num);

console.log("script end!!");