// document.addEventListener("DOMContentLoaded", () => {
  
// });

// As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.
// As a user, the task string that I provided should appear on the DOM after the submit button has been activated.

let myForm = document.getElementById("create-task-form")
let selectDropdown = document.createElement("select")

myForm.children[1].insertAdjacentElement('afterend', selectDropdown)
const highOption = document.createElement('option')
highOption.innerText = 'High'
selectDropdown.append(highOption)
const mediumOption = document.createElement('option')
mediumOption.innerText = 'Medium'
selectDropdown.append(mediumOption)
const lowOption = document.createElement('option')
lowOption.innerText = 'Low'
selectDropdown.append(lowOption)


function handleDelete(e){
    e.target.parentElement.remove()
}

function importanceColor(importance){
    if(importance === "High"){
        return "red"
    } else if (importance === "Medium"){
        return "orange"
    } else {
        return "green"
    }
}

function handleFormSubmit(e){
    e.preventDefault();
    const newTask = e.target["new-task-description"].value
    const importanceLevel = e.target.children[2].value
    const color = importanceColor(importanceLevel)
    const taskUL = document.querySelector('#tasks')
    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = 'X'
    deleteBtn.addEventListener("click", handleDelete)
    const LI = document.createElement("li")
    LI.style.color = color
    LI.textContent = newTask
    LI.append(deleteBtn)
    taskUL.appendChild(LI)
    e.target.reset()
}

myForm.addEventListener("submit", handleFormSubmit)