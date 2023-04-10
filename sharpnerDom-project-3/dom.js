//GETELEMENTSBYTAGNAME//



//adding another list item.
// 1) editing it with the tag name.
var li=document.getElementsByTagName("li");

for(i=0;i<li.length;i++)
{
    li[i].style.backgroundColor="#f4f4f4";
}

// 2) editing it with the class name.
var li=document.getElementsByClassName("list-group-item");

li[2].style.color="red";
li[2].style.fontWeight="bold";





