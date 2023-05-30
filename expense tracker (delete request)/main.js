// get all the dom elements.

const myForm = document.querySelector("#my-form");
const expenseInput = document.querySelector("#expense");
const description = document.querySelector("#description");
const categoryInput = document.querySelector("#category");
const msg = document.querySelector(".msg");


// listen for submit.
myForm.addEventListener("submit",onSubmit);

function onSubmit(e)
{
    e.preventDefault();

    if(expenseInput.value === "" || categoryInput.value === "")
    {
        msg.classList.add("error");
        msg.innerHTML = "please choose both expense amount and category";
    }
    
    else
    {
        // storing items in local storage.
        // step-1 get the values of the items.

        let myObj={
            expense : e.target.expense.value,
            description : e.target.description.value,
            category : e.target.category.value
        }

        ////////// POST API ------
        axios
        .post("https://crudcrud.com/api/7bc06110bbce46dda9e95b657e9d8101/expenseData", myObj)
        .then((value)=>console.log(value))
        .catch((error)=>comsole.log(error));

        // step-2 : convert object into string.
        // let myObj_serialized = JSON.stringify(myObj);

         // check if working by console logging
        //  console.log(myObj_serialized);

         // step-3 saving string in local storage.
        //  localStorage.setItem(myObj.category,myObj_serialized);

         ////////////// store item in the UI. ////////////////
         // step-1 : create a ul with a id-listOfItems in the html file.
         // step-2 : grab the ul.
         const parentElem = document.getElementById("listOfItems");

         // step-3 : create a child element LI to add the items to the UI.
         const childElem = document.createElement("li");
         childElem.textContent = myObj.expense + '  -  ' + myObj.description + '  -  ' + myObj.category;

         /////// create a edit button //////
         var editBtn = document.createElement("button");
         // add classes
         editBtn.className = 'btn btn-primary btn-sm float-right  edit';
         // CREATE TEXT NODE 'Edit' AND PUSH IT INSIDE THE BUTTON.
         editBtn.appendChild(document.createTextNode('Edit'));
         // ADDING FUNCTIONALITY TO EDIT BUTTON.
         editBtn.onclick = () => {
            localStorage.removeItem("myObj.category");
            parentElem.removeChild(childElem);
            document.getElementById('expense').value = myObj.expense;
            document.getElementById('description').value = myObj.description;
            document.getElementById('category').value = myObj.category;
        }
        // PUSH THE EDIT BUTTON INSIDE THE LIST CREATED.
        childElem.appendChild(editBtn);

        /////// CREATE A DELETE BUTTON /////
        var deleteBtn=document.createElement('button');
        // ADD CLASSES.
        deleteBtn.className='btn btn-danger  btn-sm float-right delete';
        // crete alphabet 'X' and push it inside the button.
        deleteBtn.appendChild(document.createTextNode('X'));
        // ADDING FUNCTIONALITY TO DELETE BUTTON.
        deleteBtn.onclick = () => {
        localStorage.removeItem("myObj.category"); //removing from local storage.
        parentElem.removeChild(childElem); //removing from UI.
         }
        // PUSH THE BUTTON INSIDE THE LIST CREATED.
        childElem.appendChild(deleteBtn);

        // step-4 : PUSH THE CHILDELEM INTO PARENTELEM BASICALLY PUSHING LI INTO UL.
        parentElem.appendChild(childElem);

        // clear fields
        expenseInput.value="";
        description.value="";
        categoryInput.value="";


   }
}

        ////////// GET API ------
        window.addEventListener("DOMContentLoaded",()=>{
            axios
            .get("https://crudcrud.com/api/7bc06110bbce46dda9e95b657e9d8101/expenseData")
            .then((value)=>console.log(value))
            .catch((error)=>console.log(error));
        })
