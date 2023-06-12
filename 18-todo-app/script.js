let addTodoInput = document.querySelector(".add--todo--input")
let addTodoButton = document.querySelector(".add--todo--button")
let toDoListArea = document.querySelector(".todo--list")


let renderTodoItem = (todoText) => {
    let listItem = document.createElement("li")
    listItem.classList.add("todo--list--item")
    listItem.innerHTML = todoText
    listItem.style.transition = "120ms"

    let completeButton = document.createElement("button")
    completeButton.classList.add("completed--button")
    completeButton.innerText = "Tamamlandı"

    completeButton.addEventListener("click",()=> {
        listItem.style.opacity = "0.5"
        listItem.style.textDecoration = "line-through"
        setInterval(()=> {listItem.style.display = "none", listItem.style.transition = "120ms"}, 1000)
    })

    let deleteButton = document.createElement("button")
    deleteButton.classList.add("delete--button")
    deleteButton.innerText = "Sil"

    deleteButton.addEventListener("click", () => {
        listItem.style.display = "none"
    })

    let buttons = document.createElement("div")
    buttons.appendChild(completeButton)
    buttons.appendChild(deleteButton)

    listItem.appendChild(buttons)
    toDoListArea.appendChild(listItem)
}

addTodoButton.addEventListener("click", () => {
    if(addTodoInput.value != "") {
        renderTodoItem(addTodoInput.value)
        addTodoInput.value = ""
    }
    else {
        alert("Lütfen bir ToDo Giriniz !!")
    }
})
