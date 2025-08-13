function createToDOList(){
    let input = document.querySelector("#inputs").value;

    if(input.trim() === ''){
        alert("Enter Some Task");
    }
    else{
        // Create Element 
        let TaskByUser = document.createElement("ul");
        TaskByUser.innerHTML = `
            <span class="task-text">${input}</span> 
            <span class="edit-container hide-element">
                <input type="text">
                <button onclick="Edit_TaskByUser(event)" class="editbtn">Edit</button>
            </span>
            <i onclick="Edit_text(event)" class="fa-solid fa-pen-to-square"></i>
            <i onclick="delete_TaskByUser(event)" class="fa-solid fa-trash"></i>
        `;
        
        TaskByUser.classList.add("ul-show");
        document.querySelector(".items-list").append(TaskByUser);
        document.querySelector("#inputs").value = '';
    }
}

function Edit_TaskByUser(e){
    let editContainer = e.target.parentElement;
    let newText = editContainer.querySelector("input").value;

    if(newText.trim() !== ''){
        editContainer.previousElementSibling.textContent = newText;
    }

    // Hide the input + button
    editContainer.classList.add("hide-element");

    // Show the pen icon again
    editContainer.nextElementSibling.classList.remove("hide-element");
}

function Edit_text(e){
    let editContainer = e.target.previousElementSibling;
    let currentText = editContainer.previousElementSibling.textContent;

    // Put current text into the input field
    editContainer.querySelector("input").value = currentText;

    // Show input + button
    editContainer.classList.remove("hide-element");

    // Hide pen icon while editing
    e.target.classList.add("hide-element");
}

function delete_TaskByUser(e){
    e.target.parentElement.remove();
}
