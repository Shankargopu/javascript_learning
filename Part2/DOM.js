// const rootNode = document.getRootNode();
// console.log(rootNode)  //it will give the root node     i.e, whole document

// //childNodes
// const htmlNode = rootNode.childNodes[0];
// console.log(htmlNode); //it will give the whole html element

// const htmlNodeChildern = htmlNode.childNodes;
// // console.log(htmlNodeChildern);   //NodeList(3) [head, text, body]

// const headNode= htmlNodeChildern[0];
// const textNode= htmlNodeChildern[1];
// const bodyNode = htmlNodeChildern[2];
// console.log(headNode);  //it will give the whole head element
// console.log(textNode); //\n   just space : just this child node is storing the space between the head and body
// console.log(bodyNode); //gives whole body

// //parentNodes: we can also get parent of each nodes.
// //we will have only one parent for the nodes so we don't to specify indices
// const headNodeParent = headNode.parentNode;
// console.log(headNodeParent);

// //sibling

// const headSiblingNode = headNode.nextSibling
// console.log(headSiblingNode)  //\n      just space : just this child node is storing the space between the head and body

// const nextSibling = headSiblingNode.nextSibling;
// console.log(nextSibling)   //body element

// //nextElementSibling : this property will give directly next elment node instead of these spaces or text nodes

// const headElementSiblingNode= headNode.nextElementSibling;
// console.log(headElementSiblingNode);   //it will give body instead of text as next node

// const h1Element = document.querySelector("h1");
// console.log(h1Element);

// const h1sParentNode = h1Element.parentNode;
// console.log(h1sParentNode); //body

// h1sParentNode.style.color="white";
// h1sParentNode.style.backgroundColor="black";

// // const body = document.body;
// // console.log(body);  //it will return body

// //we can query select inside each element node as well

// const headNode= document.querySelector("head");
// console.log(headNode);  //it will give head html
// const title= headNode.querySelector("title");
// console.log(title);  //it will give title




const head = document.head;
console.log(head.childNodes) //NodeList(5) [text, title, text, script, text]

//to eliminate or do not return the text nodes[spaces nodes];
//than we can use 

const headChildrenWithoutTextNodes= head.children;

//returns only HTML collection
console.log(headChildrenWithoutTextNodes);  //HTMLCollection(2) [title, script]
