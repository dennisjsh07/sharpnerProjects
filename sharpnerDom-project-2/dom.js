// GETELEMENTSBYCLASSNAME //

var items=document.getElementsByClassName("list-group-item");
// changing their values.
items[1].style.backgroundColor="green";

//if we want to change the background color of all the items-
//-at once, since it is a collection of arrays we have to loop through them.
for(i=0;i<items.length;i++)
{
    items[i].style.fontWeight="bold";
}

