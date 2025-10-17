const inputBox= document.getElementById("input-box");
const listContainer= document.getElementById("list-container");
function addTask(){
    if(inputBox.value===''){
        alert("You must write something!");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li); //adds a new li element to list container and this make new list visible in document
         let span=document.createElement("span"); // Creates a new <span> element and stores it in the variable span.
        span.innerHTML="\u00d7"; // -  Sets the content of the <span> to the Unicode character × 
//This is commonly used as a "delete" or "close" button.
        li.appendChild(span); //The list item now contains the × symbol, which can be styled or used for interactivity (like removing the item when clicked).
    }
    inputBox.value="";
}
listContainer.addEventListener("click",function(e){ //here e Represents the event object,
//  giving access to details like which element was clicked.
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }//- If the clicked element is a <span> (your delete button), it:
//- Removes the parent <li> (the task).
//- Calls saveData() to update local storage.
},false);
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();