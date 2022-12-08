// console.log(window.document);
//it will give whole html in console.

// console.dir(window.document);  //it gives javascript representation in

//or

// console.dir(document)  // it gives javascript representation as well. we don't need to use window. it is implicitly present

//getElementById : we can select element by id using this method

// const header=document.getElementById("header");
// console.log(header);   // this will log the element whose ID is header.

//querySelector : we can use querySelctor to select any classes, id etc..
// const header = document.querySelector("#header");
// console.log(header);
// const nav = document.querySelector(".nav");
// console.log(nav);

//if we have multiple items with the same classes,. we can use querySelectorAll to select all classes or else
//first instance of class will be returned with the querySelector.

// const navItem = document.querySelectorAll(".nav-item");
// console.log(navItem); //NodeList(3) [li.nav-item, li.nav-item, li.nav-item]


//textContent and Inner text. to change some text than we can use textContent which returns all the text
//innerText will only return the text which is not hided in styling


// const nav= document.querySelector(".manage-task-text");
// console.log(nav.textContent) //Manage Your tasks

// // we change that text by assigning new text
// nav.textContent = "Manage tasks updated"

