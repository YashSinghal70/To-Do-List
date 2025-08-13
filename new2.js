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
   <span class="hide-element"> <input value="${input}"  type="text">   <i onclick="Edit_icon(event)" class="fa-solid fa-pen-to-square"></i>  </span>
  <button onclick="Edit_btn(event)"  class="editbtn"> Edit </Button>
     <i onclick="delete_TaskByUser(event)" class="fa-solid fa-trash"></i>`;
     
     // Add class after creation
        TaskByUser.classList.add("ul-show");
    // Append To items-list div
    document.querySelector(".items-list").append(TaskByUser);
    document.querySelector("#inputs").value=''
}

}

function Edit_icon(e)
{
console.log(e.target.previousElementSibling.value);

if(e.target.previousElementSibling.value === '')
{
    console.log(e.target.parentElement.previousElementSibling )
    alert("Enter some value");
}
else
{
    let secondinput=e.target.previousElementSibling.value;
// without span
// e.target.previousElementSibling.previousElementSibling.innerHTML=secondinput

// with span but why parentElement 
// e.target.parentElement.previousElementSibling.innerHTML+=secondinput

e.target.parentElement.previousElementSibling.innerHTML=secondinput
// console.log()
// 
e.target.previousElementSibling.value=''
// It hide the span which contains input and icon when we click on icon
e.target.parentElement.classList.toggle("hide-element");
}

}


function Edit_btn(e) {
// It hide the span which contains input and icon when we click on BTN
    e.target.previousElementSibling.classList.toggle("hide-element")
    // console.log(e.target.previousElementSibling.classList.toggle("hide-element"))
}


function Edit_text(e){

console.log(e.target);

}


function delete_TaskByUser(e){
e.target.parentElement.remove();
}