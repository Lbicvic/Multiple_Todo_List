let htmlBody = document.querySelector('body')

let todoContent = document.createElement('div')
todoContent.innerText = "Multiple Todos"
htmlBody.appendChild(todoContent)

let breakElement1 = document.createElement('br')
todoContent.appendChild(breakElement1)

let inputTodo = document.createElement('input')
inputTodo.type = "text"
inputTodo.placeholder = "enter todo name here"
inputTodo.value= ""
todoContent.appendChild(inputTodo)

let buttonAddTodos = document.createElement('button')
buttonAddTodos.innerText ="Add Todo"
buttonAddTodos.addEventListener('click',() =>{
    createNewTodo()
  
})
todoContent.appendChild(buttonAddTodos)

function createNewTodo(){
    let mainDiv = document.createElement('div')
    mainDiv.innerText = inputTodo.value.toUpperCase()
    if(inputTodo.value == null || inputTodo.value ==""){
        return
    }
    todoContent.appendChild(mainDiv)
    inputTodo.value = ""
    inputTodo.focus()

    let sideDiv =  document.createElement('div')
    sideDiv.className = "task-container"
    mainDiv.appendChild(sideDiv)
    
    let inputElement = document.createElement('input')
    inputElement.type = "text"
    inputElement.placeholder = "enter task here"
    inputElement.value= ""
    inputElement.className= "input-task"
    mainDiv.appendChild(inputElement)
    
    let buttonAddTask = document.createElement('button')
    buttonAddTask.innerText= "Add task"
    buttonAddTask.className="add-task"
    buttonAddTask.addEventListener('click',()=>{
        let task = createNewTask(inputElement)
        sideDiv.appendChild(task)
        inputElement.value = ""
    })
    mainDiv.appendChild(buttonAddTask)

    let buttonDeleteTodo = document.createElement('button')
    buttonDeleteTodo.innerText= "Delete Todo"
    buttonDeleteTodo.className = "delete-button"
    mainDiv.appendChild(buttonDeleteTodo)

}

function createNewTask(inputTask){
    let newTask = document.createElement('div')
    let labelTask = document.createElement('label')
    
    labelTask.innerText = inputTask.value
    labelTask.className = "task-label"
    if(labelTask.innerText == null || labelTask.innerText ==""){
        return
    }

    let checkBoxIsFinished = document.createElement('input')
    checkBoxIsFinished.type = "checkbox"
    checkBoxIsFinished.className = "checkbox-input"

    checkBoxIsFinished.addEventListener('click',()=>{
        labelTask.classList.toggle("task-label-finished")
    })

    let buttonDelete = document.createElement('button')
    buttonDelete.innerText= "Delete"
    buttonDelete.className = "delete-button"

    let breakElement = document.createElement('br')

    newTask.appendChild(labelTask)
    newTask.appendChild(checkBoxIsFinished)
    newTask.appendChild(buttonDelete)
    newTask.appendChild(breakElement)
    return newTask
}

document.addEventListener('click',(e) =>{
    if(e.target.className == "delete-button"){
        e.target.parentNode.remove();
    }
})