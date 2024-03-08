const enterText=document.getElementById("enter-task");
const ListContainer=document.getElementById("list-container");
function addTask() {
    if(enterText.value==='')
    {
        alert("enter something to enter");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=enterText.value;
        ListContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML=" x";
        li.appendChild(span);
        
    }
  enterText.value='';
  saveHistory();
}
ListContainer.addEventListener("click",function(e){
if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
    saveHistory();
}
else if(e.target.tagName==="SPAN")
{
    e.target.parentElement.remove();
    saveHistory();
}
},false);
function saveHistory(){
    localStorage.setItem("info",ListContainer.innerHTML);
}
function display(){
    ListContainer.innerHTML=localStorage.getItem("info");
}
display();