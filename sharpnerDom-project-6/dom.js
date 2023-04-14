var form=document.getElementById("addForm");
var itemList=document.getElementById("items");

// FORM SUBMIT EVENT.
form.addEventListener('submit',addItem);

function addItem(e)
{
    // PREVENT TEXT FROM DISAPPEARING.
    e.preventDefault();

    // GET INPUT VALUE.
    var newItem=document.getElementById('item').value;
    // CREATE A NEW LII ELEMENT FOR THE ADD ITEMS.
    var li=document.createElement('li');
    // ADD CLASS.
    li.className='list-group-item';
    // PUSH THE INPUT VALUE INSIDE THE LIST CREATED.
    li.appendChild(document.createTextNode(newItem));


    // CREATE A DELETE BUTTON.
    var deleteBtn=document.createElement('button');
    // ADD CLASSES.
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    // crete alphabet 'X' and push it inside the button.
    deleteBtn.appendChild(document.createTextNode('X'));
    // PUSH THE BUTTON INSIDE THE LIST CREATED.
    li.appendChild(deleteBtn);


     // CREATE AN EDIT BUTTON.
  var editBtn = document.createElement('button');
  // ADD CLASSES.
  editBtn.className = 'btn btn-primary btn-sm float-right edit';
  // CREATE TEXT NODE 'Edit' AND PUSH IT INSIDE THE BUTTON.
  editBtn.appendChild(document.createTextNode('Edit'));
  // PUSH THE EDIT BUTTON INSIDE THE LIST CREATED.
  li.appendChild(editBtn);

  // PUSH THE LI INTO THE UL.
  itemList.appendChild(li);
}


// ITEM DELETE EVENT.
itemList.addEventListener('click',removeItem);

function removeItem(e)
{
    //we have to deiete the item only if the button is clicked and not the item.
    // our button has a class name 'delete' hence.

    if(e.target.classList.contains('delete'))
    {
        if(confirm('are you sure?'))
        {
            var li=e.target.parentElement;
            // here button is the child and the li is the parent.
            // hence grab the parent element li and remove it from the UL.
            itemList.removeChild(li);
        }
    }   
  }


