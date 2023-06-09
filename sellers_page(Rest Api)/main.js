var form = document.querySelector("form");
var ul = document.querySelector("ul");
let myObj;

form.addEventListener("submit",onSubmit);

function onSubmit(e){
    e.preventDefault();

    myObj = {
        sellingPrice: document.getElementById("selling-price").value,
        productName: document.getElementById("product-name").value,
        category: document.getElementById("category").value
    }

    // add HTTP post request
    axios
    .post("https://crudcrud.com/api/4253ddf5c1b34e0f86335a26b0a3f757/cart",myObj)
    .then((response)=>{
        console.log(response);
        // showInUi(response.data);
    })
    .catch((error)=>{
        console.log(error);
    })
} 

// add HTTP get request
window.addEventListener("DOMContentLoaded",()=>{
    axios
.get("https://crudcrud.com/api/4253ddf5c1b34e0f86335a26b0a3f757/cart")
.then((response)=>{
    console.log(response);

    for(var i=0;i<response.data.length;i++){
        showInUi(response.data[i]);
    }
})
.catch((error)=>{
    console.log(error)
})
})

function showInUi(myObj){
    var li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(myObj.sellingPrice+" - "+myObj.productName+" - "+myObj.category));

    // adding deleteBtn
    deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm float-end delete"
    deleteBtn.appendChild(document.createTextNode("Delete Order"));
    li.appendChild(deleteBtn);

    // adding editBtn
    editBtn = document.createElement("button");
    editBtn.className = "btn btn-primary btn-sm float-end me-2 edit"
    editBtn.appendChild(document.createTextNode("Edit"));
    li.appendChild(editBtn);

    ul.appendChild(li);

    // adding functionality to deleteBtn
    deleteBtn.addEventListener("click",onDeleteClick);

    function onDeleteClick(e){
        var li = (e.target.parentElement);
        var userId = myObj._id;
        
        // adding HTTP delete requset
        axios
        .delete("https://crudcrud.com/api/4253ddf5c1b34e0f86335a26b0a3f757/cart/"+userId)
        .then((response)=>{
            console.log(response);
            ul.removeChild(li);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    // adding functionality to editBtn

    editBtn.addEventListener("click",onEditClick);

    function onEditClick(e){
        
        var userId = myObj._id;
        var updateData = {
            sellingPrice: document.getElementById("selling-price").value,
            productName: document.getElementById("product-name").value,
            category: document.getElementById("category").value
        }

        // adding HTTP put request
        axios
        .put("https://crudcrud.com/api/4253ddf5c1b34e0f86335a26b0a3f757/cart/"+userId,updateData)
        .then((response)=>console.log(response))
        .catch((error)=>console.log(error))
    }
}

