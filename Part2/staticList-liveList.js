

//static List : it is not updated live. i.e, it is not updated even it is updated in the dom.
//querySelector gives NodeList.
//example:
// const ul = document.querySelector(".todo-list-item");
// console.log(ul) 
// const todoSectionListItems = document.querySelectorAll(".todo-list-item li"); 
// console.log(todoSectionListItems) //NodeList(3) [li, li, li]
// const listItem = document.createElement("li");
// listItem.textContent="todo added from JS";
// ul.append(listItem);

// //even after adding the 
// console.log(todoSectionListItems)   //NodeList(3) [li, li, li]


//LiveList : it will updated live.
//we need to use getElementByTagName or getElementByClassName etc., to return the HTMLCollection and this
//HTMLCollection helps us in live update.

//example:
// const ul = document.querySelector(".todo-list-item");
// console.log(ul) 
// const todoSectionListItems = ul.getElementsByTagName("li"); //HTMLCollection(3) [li, li, li]
// console.log(todoSectionListItems) 
// const listItem = document.createElement("li");
// listItem.textContent="todo added from JS";
// ul.append(listItem);

// //even after adding the 
// console.log(todoSectionListItems) //HTMLCollection(4) [li, li, li, li]


//to get the dimensions of the element 


const sectionTodo = document.querySelector(".todo-section");
console.log(sectionTodo);

const propertiesOfTheElement= sectionTodo.getBoundingClientRect();
console.log(propertiesOfTheElement);
