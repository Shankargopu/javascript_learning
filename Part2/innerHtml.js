//we can add html from js as well using innerHtml property

//let's add a new todo

// const todoSection= document.querySelector(".todo-list-item");
// console.log(todoSection.innerHTML)

// todoSection.innerHTML += `<li>TODO2 added from JS</li>`;
// todoSection.innerHTML += `<li>TODO3 added from JS</li>`;

//it is not recommended to use this method because every time we want to add new list than we need
//to traverse whole innerHtml again and again. we can use this just when we want to replace the innerHtml.


//we can use document.createElement to add new Html element

// const newTodoItem = document.createElement("li");
// // const newTodoItemText=document.createTextNode("todo added from js");
// newTodoItem.textContent="todo added from JS";
// // console.log(newTodoItem);

// const todoSection= document.querySelector(".todo-list-item");
// todoSection.prepend(newTodoItem);  //this will add as first element in list
// todoSection.append(newTodoItem);  //this will add as last elememt in list


// const todo1= document.querySelector(".todo-list-item li");
// console.log(todo1.remove());   //this wil remove from the list


const todoSection = document.querySelector(".todo-list-item");
const newItem = document.createElement("li");

//suppose we want to add this newItem before todo section than we can use before().
//suppose we want to add this newItem after todo section than we can use after().


newItem.textContent = "Todo added from JS";
todoSection.before(newItem);    //adds before


todoSection.after(newItem); //adds after

newItem.remove();


