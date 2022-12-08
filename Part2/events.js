
//events : these are used to trigger something on onClick or mouseOver, onScroll etc.


// const learnMoreButton= document.querySelector(".btn-headline");


//1st

// learnMoreButton.onclick = function(){
//     console.log("You clicked me!");
// }

//2nd

// function clickMe(){
//     console.log("You Clicked Me!");
// }
// learnMoreButton.addEventListener("click",clickMe)

//3rd : we will follow this approach always

// learnMoreButton.addEventListener("click",()=>{
//     console.log("you clicked me!!!");
// })




//this with event listeners

const learnMoreButton= document.querySelector(".btn-headline");
learnMoreButton.addEventListener("click",function(){   
    console.log("Clicked me!!!");
    console.dir(this);  
//if we use arrow function it will give whole window obj in this. or else it will give same object. here it gives button element 
//arrow functions will return one upper object in this. so that's why here it is window
})