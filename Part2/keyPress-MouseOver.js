//keypress

const body = document.body

body.addEventListener("keypress", (e) => {
    console.log(e.key)   //this will give which key is pressed
})



//mouseOver : when mouse is overed element

const button1= document.getElementById("one");
button1.addEventListener("mouseover",(e)=>{
 console.log("Mouse over is happened");
})

//mouseLeave : when mouse is leaved element

const button2= document.getElementById("two");
button2.addEventListener("mouseleave",()=>{
    console.log("Mouse is leaved")
})