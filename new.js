function createToDOList(){
    let input=document.querySelector("#inputs").value;
console.log(input);

// TaskByUser.classList.add("ul-show")

if(input.trim() === ''){
    alert("Enter Some Task")
}
else{
    // Create Element 
    

        let checkbox=document.createElement("input");
        checkbox.type="checkbox"

    checkbox.innerHTML=` ${input}   <i onclick="delete_TaskByUser(event)" class="fa-solid fa-trash"></i>`;
     // Add class after creation
        checkbox.classList.add("ul-show");
    // Append To items-list div
    document.querySelector(".items-list").append(checkbox);
    document.querySelector("#inputs").value=''
}

}

function delete_TaskByUser(e){
e.target.parentElement.remove();
}