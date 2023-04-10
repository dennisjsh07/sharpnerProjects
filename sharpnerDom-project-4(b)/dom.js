                      // QUERYSELECTORALL //

var items=document.querySelectorAll(".list-group-item")
items[1].style.color="green";
items[1].style.fontWeight="bold";


var odd=document.querySelectorAll(".list-group-item");
for(i=0;i<odd.length;i++)
{
    if(i%2==0) //in the website item starts from 1 and not 0.
    {
    odd[i].style.backgroundColor="green";
    }
}