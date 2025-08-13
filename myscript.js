function createToDOList(){
    let input=document.querySelector("#inputs").value;
console.log(input);

// TaskByUser.classList.add("ul-show")

if(input.trim() === ''){
    alert("Enter Some Task")
}
else{
    // Create Element 
    let TaskByUser=document.createElement("ul");
    TaskByUser.innerHTML=`<span> ${input} </span> 
   <input id="hide-element" type="text">   <i onclick="Edit_TaskByUser(event)" class="fa-solid fa-pen-to-square"></i> 

     <i onclick="delete_TaskByUser(event)" class="fa-solid fa-trash"></i>`;
     
     // Add class after creation
        TaskByUser.classList.add("ul-show");
    // Append To items-list div
    document.querySelector(".items-list").append(TaskByUser);
    document.querySelector("#inputs").value=''
}

}

function Edit_TaskByUser(e)
{
console.log(e.target.previousElementSibling.value);
let secondinput=e.target.previousElementSibling.value;
e.target.previousElementSibling.previousElementSibling.innerHTML=secondinput
e.target.previousElementSibling.classList.toggle("hide-element")
// e.target.previousElementSibling.remove();
}


function Edit_text(e){

console.log(e.target);

}


function delete_TaskByUser(e){
e.target.parentElement.remove();
}