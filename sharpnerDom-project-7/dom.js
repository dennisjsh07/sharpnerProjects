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

     // GET NEW INPUT VALUE.
     var newInputValue=document.getElementById('newInput').value;

    // CREATE A NEW LI ELEMENT FOR THE ADD ITEMS.
    var li=document.createElement('li');
    // ADD CLASS.
    li.className='list-group-item';
    // PUSH THE INPUT VALUE INSIDE THE LIST CREATED.
    li.appendChild(document.createTextNode(newItem + '   ' + newInputValue));



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

     // CLEAR INPUT FIELDS AFTER ADDING ITEM.
     document.getElementById('item').value = '';
     document.getElementById('newInput').value = ''

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


  // Based on the inputs of item lister filter the items.

  // STEP-1 grab the item lister.
  var filter=document.getElementById('filter');

  // filtering event.
  filter.addEventListener('keyup',filterItems);

  function filterItems(e) 
  {
    // STEP-2 a) get the text input of the item lister  b) li of the items.
    // also maintain everything in lower case so they donot mismatch.
    //a - input text
    var text=e.target.value.toLowerCase();
    //b) - item list (or) ul
    var items=itemList.getElementsByTagName('li');

    // console.log(items);
    // we will get html collection of items,but we need array of items.
    Array.from(items).forEach(function(item)
    {
       var itemName = item.firstChild.textContent;
       //console.log(itemName);
       if(itemName.toLowerCase().indexOf(text)!= -1)
       {
        item.style.display='block';
       }
       else
       {
        item.style.display='none';
       }
    });
  }


