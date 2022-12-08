//classList : this property gives all the classes on the particular element or the classes the element uses
const sectionContainer= document.querySelector(".todo-section");
console.log(sectionContainer.classList) //DOMTokenList(2) ['todo-section', 'container', value: 'todo-section container']

//we need to add new class than we use classList.add()

// sectionContainer.classList.add("bgdark");

//remove

// sectionContainer.classList.remove("bgdark");

//to check if class contains in classList

// console.log(sectionContainer.classList.contains("container"));//true

//toggle : it will add the class if not present or remove the class if it is present

// sectionContainer.classList.toggle("bgdark");  //it will add bgdark 
// sectionContainer.classList.toggle("bgdark");  //it will remove bgdark

const header = document.querySelector("header");
console.log(header.classList)   //DOMTokenList ['header', value: 'header']

// header.classList.add("bgdark");


