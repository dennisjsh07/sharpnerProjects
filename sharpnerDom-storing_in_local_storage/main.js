// USER FORM SCRIPT.

// PUT DOM ELEMENTS INTO VARIABLES:
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const dateInput = document.querySelector("#date");
const msg = document.querySelector(".msg");


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
        // store item in the local storage.
        // get the target values first.
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const date = e.target.date.value;

        // check if working by console logging
        // console.log(name);
        // console.log(email);
        // console.log(phone);
        // console.log(date);

        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
        localStorage.setItem("phone",phone);
        localStorage.setItem("date",date);

        // clear fields
        nameInput.value="";
        emailInput.value="";
        phoneInput.value="";
        dateInput.value="";

    }
}
