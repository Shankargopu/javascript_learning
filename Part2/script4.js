//innerHtml : this will give all the html present in the particular element

const headLine= document.querySelector(".headline");
console.log(headLine.innerHTML)
//<h2 class="manage-task-text">Manage Your tasks</h2>
//<button class="btn btn-headline">Learn More</button>

//we can change the innerHtmL as well

headLine.innerHTML=`<h1>Inner HTML Changed</h1>`;
// headLine.innerHTML+="<button class=\"btn btn-headline\">Learn More</button>"

// \"btn btn-headline\" -------------> "btn btn-headline"

headLine.innerHTML+=`<button class="btn btn-headline">Learn More</button>`
console.log(headLine.innerHTML)