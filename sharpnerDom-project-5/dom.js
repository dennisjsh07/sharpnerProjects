                 // TRAVERSING THE DOM //

                // PARENT NODE (OR) PARENT ELEMENT //

// 1) GET THE PARENT NODE.
// var itemList=document.querySelector("#items");
// console.log(itemList.parentNode);

// giving the parent node values
// itemList.parentNode.style.backgroundColor="#f4f4f4";

// 2) GET THE PARENT NODE OF THE PARENT NODE AND THE PARENT NODE OF THAT PARENTNODE.
// console.log(itemList.parentNode.parentNode.parentNode);


/////////////////--START. (UN COMMENT COMPLETELY)
                // CHILDREN NODE //  (CHILD NODE will give you linebreaks hence not suggested).
// 1) GET THE CHILDREN NODE OF #ITEMS.
// var itemList=document.querySelector("#items");
// console.log(itemList.children);
// console.log(itemList.children[1]);

// 2) giving children node values.
// itemList.children[1].style.backgroundColor="green";

                // FIRST ELEMENT CHILD // (FIRST CHILD will give you linebreaks hence not suggested)
// 1) GET THE FIRST ELEMENT CHILD.
// console.log(itemList.firstElementChild);

// 2) GIVING THE FIRST ELEMENT CHILD VALUES.
// itemList.firstElementChild.style.color="red";
// itemList.firstElementChild.style.fontWeight="bold";

               // LAST ELEMENT CHILD // (LAST CHILD will give you linebreaks hence not suggested)
// 1) GET THE LAST ELEMENT CHILD.
// console.log(itemList.lastElementChild);

// 2) GIVING THE LAST ELEMENT CHILD VALUES.
// itemList.lastElementChild.style.color="blue";
// itemList.lastElementChild.style.fontWeight="bold";
// itemList.lastElementChild.textContent="hi dennis";
//////////////////--END.


                // NEXT ELEMENT SIBLING && PREVIOUS ELEMENT SIBLING //  (NEXT SIBLING && PREVIOUS SIBLING will give you linebreaks hence not suggested).

// 1) GETTING THE ELEMENTS.
// var items=document.querySelector(".title");
// console.log(items);
// console.log(items.nextElementSibling);
// console.log(items.previousElementSibling); //the result will show null since there is no sibling above it.

// 2) GIVING THE ELEMENTS VALUES.
// items.nextElementSibling.style.backgroundColor="blue";


                // CREATING JAVA SCRIPT ELEMENTS AND INSERTING THEM //  

// 1) create a new div.
var newDiv=document.createElement('div');

// 2) create a class,id & attributes for the div.
 newDiv.className="hello"; 
 newDiv.id="hello1";
 newDiv.setAttribute("title","hello Div");

// 3) create a new text node and push it to the div.
var newDivText=document.createTextNode("hello world");
newDiv.appendChild(newDivText);


// 4) position the newDiv inside the DOM.
// insert the element before header h1-item lister.
var container=document.querySelector("header .container"); //inserting in the container.
var h1=document.querySelector("header h1"); //inserting before h1.

console.log(newDiv); 

container.insertBefore(newDiv, h1);

// 5) manipulate the newDiv.
newDiv.style.fontSize="30px";







