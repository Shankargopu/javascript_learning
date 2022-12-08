// // we can chane the style as well
// //we can select anything with the queryselector not only classes and ID's.

// const mainHeading = document.querySelector("div.headline h2");

// const websiteHeading = document.querySelector(".logo");
// console.dir(websiteHeading);
// websiteHeading.style.display = "block";
// // // websiteHeading.style.border="2px solid green"
// // //it will give the h2 of div which is having class headline
// // console.dir(mainHeading.style);

// mainHeading.style.color = "black";

// // getElementsByTagName :  this will return the HTML collection of all a tags.

// const aElements = document.getElementsByTagName("a");
// console.log(aElements)
// for (let item of aElements) {
//   item.style.color = "white"
// }





                         //get and set Attributes
//The attributes are one's are like id, name, placeholder, href etc., the attributes are something which add's property's to the elements

//here in link we will get first a element i.e, <a href="#Home">Home</a>

//getAttribute accepts the attribute value which we require
const link= document.querySelector("a");
console.log(link.getAttribute("href").slice(1))     //home


const inputOfFormTodo= document.querySelector(".form-todo input");
console.log(inputOfFormTodo.getAttribute("type"));   //text

// getElementsByTagName :  this will return the HTML collection of all a tags.
//so here I am just applying the link to the 2nd 'a' element

//setAttribute accepts first arg as attribute name and second arg as value
const link1=document.getElementsByTagName("a");
console.log(link1[1].getAttribute("href"));
link1[1].setAttribute("href","www.google.com");
console.log(link1[1].getAttribute("href"))
  