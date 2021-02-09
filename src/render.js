//function render to the DOM
import {deletingTodo, changingTodo} from "./modifyPro.js"
import {clicked} from "./index.js"

const proDisplay = document.querySelector(".projectDes")
const inputPro = document.querySelector(".proDes")

const renderingPro = (pro, div) => {
  const newButt = document.createElement("button")
  newButt.classList.add("projectButton")
  newButt.textContent = pro
  div.appendChild(newButt)
  newButt.addEventListener("click", (e) => {
    const divs = Array.from(document.querySelectorAll(".projectHash"))
    if(newButt.style.backgroundColor == "pink"){
      proDisplay.style.display = "none"
      newButt.style.backgroundColor = `rgb(${123}, ${245}, ${41})`
      clicked = 0
      divs.forEach(d => {
        if(d.getAttribute("data") != pro){
          d.style.display = "block"
          } 
        inputPro.value = ""
      })
    } else if(clicked != 1){
        newButt.style.backgroundColor = "pink"
        proDisplay.style.display = "block"
        inputPro.setAttribute("placeholder", `${newButt.textContent}`)
        inputPro.value = ""
        clicked = 1  
        divs.forEach(d => {
          if(d.getAttribute("data") != newButt.textContent){
            d.style.display = "none"
          } 
        })
      }
  })  
}

const renderingMultPro = (pro, div) => {
    let opt = document.createElement('option');
    opt.appendChild( document.createTextNode(`${pro}`) );
    opt.classList.add("multi")
    opt.value = `${pro}`; 
    div.appendChild(opt);
}

const changingStatus = (status) => {
    const firstTodo = document.querySelector("#first")
    const secondTodo = document.querySelector("#second")
    const thirdTodo = document.querySelector("#third")
    let div;
   if( status == "to do"){
     div = firstTodo
    } else if(status == "doing") {
      div = secondTodo
    } else if(status == "done") {
      div = thirdTodo
    }
    return div
  }


const renderingTodo = (todo) => {
    const todoGen = document.createElement("div")
    todoGen.setAttribute("draggable", "true")
    todoGen.setAttribute("id", todo.description)
    todoGen.setAttribute('data', todo.project)
    todoGen.classList.add("projectHash")
    todoGen.textContent = `#${todo.project}`
    const todoInner = document.createElement("div")
    todoInner.classList.add("todo")
    const circle = document.createElement("div")
    circle.textContent = "."
    circle.classList.add(`${todo.priority}`)
    todoInner.appendChild(circle)
    const todoText = document.createElement("div")
    todoText.classList.add("single")
    todoText.textContent = todo.description
    
    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("delete")
    deleteBtn.textContent = "Delete"
    deleteBtn.setAttribute('data', todo.description)
    deleteBtn.addEventListener("click", (e) => {
      const storage = JSON.parse(localStorage.getItem("todoList"))
      const final = deletingTodo(storage, todoGen)
      localStorage.setItem("todoList", JSON.stringify(final))
    }) 
    const note = document.createElement("div")
    note.classList.add("notes")
    note.textContent = `Notes: ${todo.notes}`
    todoText.appendChild(deleteBtn)
    todoText.appendChild(note)
    todoInner.appendChild(todoText)
    todoGen.appendChild(todoInner)
    
    todoGen.addEventListener("dblclick", changingTodo)
    changingStatus(todo.status).appendChild(todoGen)
}

export {renderingPro, renderingMultPro, renderingTodo, changingStatus}

/*
    todoText.addEventListener("click", (e) => {
      const inp = document.createElement("input")
      inp.classList.add("inputStyle")
      todoText.appendChild(inp)
      //todoText.style.display = "none"
      
    })
    */

    //todoText.setAttribute("contenteditable", "true")
     /*
     const changeBtn = document.createElement("button")
    
    changeBtn.classList.add("change")
    changeBtn.textContent = "Change"
    changeBtn.setAttribute('data', todo.description)
   
    changeBtn.addEventListener("click", (e) => {
      const newDes = document.createElement("input")
      newDes.setAttribute("placeholder",`Change Description`)
      const newText = document.createElement("input")
      newText.setAttribute("placeholder", `Change Notes`)
      todoText.appendChild(newDes)
      todoGen.appendChild(newText)
      const storage = JSON.parse(localStorage.getItem("todoList"))
      const final = changingTodo(storage, todoGen)
      //localStorage.setItem("todoList", JSON.stringify(final))

    })
    */ // to delete todo