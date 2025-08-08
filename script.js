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
    <span class="hide-element"> <input type="text">   <button onclick="Edit_TaskByUser(event)"  class="editbtn"> Edit </Button> </span>
    <i onclick="Edit_text(event)" class="fa-solid fa-pen-to-square"></i>
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
    // Without Span
// console.log(e.target.previousElementSibling.value);
// let Edit_Prevoius_Input=e.target.previousElementSibling.value;
// e.target.previousElementSibling.previousElementSibling.innerHTML = Edit_Prevoius_Input;

// With Span
console.log(e.target.previousElementSibling.value);
let Edit_Prevoius_Input=e.target.previousElementSibling.value;
e.target.parentElement.previousElementSibling.innerHTML = Edit_Prevoius_Input;

// edit icon
e.target.parentElement.classList.toggle("hide-element");

// For Edit Btn
e.target.previousElementSibling.classList.toggle("hide-element");

}


function Edit_text(e){

console.log(e.target);
e.target.previousElementSibling.classList.toggle("hide-element-show")


}


function delete_TaskByUser(e){
e.target.parentElement.remove();
}