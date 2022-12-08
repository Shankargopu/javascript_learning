

// const addToDoButton = document.querySelector(".btn-submit");
// const todoInputElement = document.querySelector("#todo-input");
// const ul = document.querySelector(".todo-list-item");


// addToDoButton.addEventListener("click", (e) => {
//     const newListItem = document.createElement("li");
//     const textHolder = document.createElement("span");
//     textHolder.classList.add("text");
//     textHolder.textContent = todoInputElement.value;
//     const todoButtonsdiv = document.createElement("div");
//     todoButtonsdiv.classList.add("todo-buttons");
   
//     const doneButton = document.createElement("button");
//     doneButton.textContent = "Done"
//     doneButton.classList.add("todo-btn")
//     doneButton.classList.add("done")
//     const removeButton = document.createElement("button");
//     removeButton.textContent = "Remove";
//     removeButton.classList.add("todo-btn");
//     removeButton.classList.add("remove")
//     todoButtonsdiv.append(doneButton,removeButton);
//     newListItem.append(textHolder,todoButtonsdiv)


//     ul.append(newListItem);

//     todoInputElement.value = "";
//     e.preventDefault();   //it will prevent page from reloading

   
// })


// const doneButton= document.querySelector(".done");
// const removeButton = document.querySelector(".remove");

// removeButton.addEventListener("click",(e)=>{
//     console.dir(e)

// })




const formTodo = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const ul = document.querySelector(".todo-list-item");
console.log(ul);
console.log(formTodo);

formTodo.addEventListener("submit",(e)=>{
    e.preventDefault();
    const newTodoText=todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHTML=
    `
    <span class="text">${newTodoText}</span>
    <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>
    `
newLi.innerHTML= newLiInnerHTML;
console.log(newLi);

ul.append(newLi);
todoInput.value="";
})




//event delegation : when we click on everything on ul item than this event will be triggered

ul.addEventListener("click",(e)=>{
    if(e.target.classList.contains("done")){
       const liSpan=e.target.parentNode.previousElementSibling
       liSpan.style.textDecoration="line-through green"
       liSpan.style.textDecorationThickness="4px";
       console.dir(liSpan);
    }
    if(e.target.classList.contains("remove")){
       const li= e.target.parentNode.parentNode;
       li.remove();
    
    }
})