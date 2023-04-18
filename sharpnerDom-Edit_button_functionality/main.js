// USER FORM SCRIPT.

// PUT DOM ELEMENTS INTO VARIABLES:
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const dateInput = document.querySelector("#date");
const msg = document.querySelector(".msg");
// grabbing the ul created and giving it parentElem.
const parentElem = document.getElementById("listOfItems");



// LISTEN FOR SUBMIT
myForm.addEventListener("submit",onSubmit);

function onSubmit(e)
{
    e.preventDefault();

    if(nameInput.value === "" || emailInput.value ==="")
    {
        // alert("please enter all the fields")
        msg.classList.add("error");
        msg.innerHTML = "Please enter both Name and Email";
    }
    else{
        ////////////// store item in the local storage. ////////////////
        // stetp-1 : get the target values first.
        let myObj={
        name : e.target.name.value,
        email : e.target.email.value,
        phone : e.target.phone.value,
        date : e.target.date.value
        }

        // step-2 : convert the object into a string.
        let myObj_serialized = JSON.stringify(myObj);
        
        // check if working by console logging
        console.log(myObj_serialized);
        
        // step-3 : saving the string in the local storage.
        localStorage.setItem("userDetails",myObj_serialized);

        // step-4 : retreving from the local storage.
        const myObj_deserialized = JSON.parse(localStorage.getItem("userDetails"));


        ////////////// store item in the UI. ////////////////
        // step-1 : create a ul with a id-listOfItems in the html file.
        // step-2 : grab the ul.
        const parentElem = document.getElementById("listOfItems");

        // STEP-3 : CREATE A CHILDELEMENT LI ELEMENT to THE ADD ITEMS.
        const childElem = document.createElement('li');
        childElem.textContent = myObj.name + '  -  ' + myObj.email + ' - ' + myObj.phone + '  -  ' + myObj.date;
        
        // CREATE A EDIT BUTTON.
        var editBtn = document.createElement('button');
        // ADD CLASSES.
        editBtn.className = 'btn btn-primary btn-sm float-right  edit';
        // CREATE TEXT NODE 'Edit' AND PUSH IT INSIDE THE BUTTON.
        editBtn.appendChild(document.createTextNode('Edit'));
        // ADDING FUNCTIONALITY TO EDIT BUTTON.
        editBtn.onclick = () => {
            localStorage.removeItem("userDetails");
            parentElem.removeChild(childElem);
            document.getElementById('name').value = myObj.name;
            document.getElementById('email').value = myObj.email;
            document.getElementById('phone').value = myObj.phone;
            document.getElementById('date').value = myObj.date;
        }
        // PUSH THE EDIT BUTTON INSIDE THE LIST CREATED.
        childElem.appendChild(editBtn);

        // CREATE A DELETE BUTTON.
        var deleteBtn=document.createElement('button');
        // ADD CLASSES.
        deleteBtn.className='btn btn-danger  btn-sm float-right delete';
        // crete alphabet 'X' and push it inside the button.
        deleteBtn.appendChild(document.createTextNode('X'));
        // ADDING FUNCTIONALITY TO DELETE BUTTON.
         deleteBtn.onclick = () => {
            localStorage.removeItem("userDetails");
            parentElem.removeChild(childElem);
         }
        // PUSH THE BUTTON INSIDE THE LIST CREATED.
        childElem.appendChild(deleteBtn);


        // step-4 : PUSH THE CHILDELEM INTO PARENTELEM BASICALLY PUSHING LI INTO UL.
        parentElem.appendChild(childElem);

        // clear fields
        nameInput.value="";
        emailInput.value="";
        phoneInput.value="";
        dateInput.value="";

    }
}

