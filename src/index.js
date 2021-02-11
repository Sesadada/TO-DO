import css from "./style.css";
import { formatDistance, subDays } from 'date-fns'
import {renderingPro, renderingMultPro, renderingTodo, filterPrio} from "./render.js"
import {createNewProject, createNewTodo} from "./createNew.js"
import {changingPro, deletingPro, updatingTodo, updatingTodoDel, dragDropping} from "./modifyPro.js"

//const storedProjects = JSON.parse(localStorage.getItem("projectList"))

const yourProjects = document.querySelector(".yourProjects")
const addProButton = document.querySelector(".addProButton")
const inputPro = document.querySelector(".proDes")
const addTodoButton = document.querySelector(".addTodoButton")
const whichProject = document.querySelector("#whichProject")
const changePro = document.querySelector("#changePro")
const deletePro = document.querySelector("#deletePro")
let todoStorage;
const todoList = []
const projectList = []
let clicked;
let storage;
let flag = 0
//localStorage.setItem("projectList", JSON.stringify(projectList))
//localStorage.setItem("todoList", JSON.stringify(todoList))

addProButton.addEventListener("click", (e) => {
  e.preventDefault()
  storage = createNewProject(projectList)
  localStorage.setItem("projectList", JSON.stringify(storage))
  clicked = 0
})

changePro.addEventListener("click", () => {
  if(inputPro.value !== ""){
  const buttons = Array.from(document.querySelectorAll(".projectButton"))
  const [chosen] = buttons.filter(b => b.style.backgroundColor == "pink")
  storage = JSON.parse(localStorage.getItem("projectList"))
  if(todoList.length !== 0) {
  todoStorage = JSON.parse(localStorage.getItem("todoList"))
  const finalTodo = updatingTodo(todoStorage, chosen)
  localStorage.setItem("todoList", JSON.stringify(finalTodo))
}
  
  const final = changingPro(storage, chosen)
  localStorage.setItem("projectList", JSON.stringify(final))
  
  }
})

deletePro.addEventListener("click", (e) => {
  const buttons = Array.from(document.querySelectorAll(".projectButton"))
  const [chosen] = buttons.filter(b => b.style.backgroundColor == "pink")
  storage = JSON.parse(localStorage.getItem("projectList"))
  todoStorage = JSON.parse(localStorage.getItem("todoList"))
  const finalTodo = updatingTodoDel(todoStorage, chosen)
  const final = deletingPro(storage, chosen)
  localStorage.setItem("projectList", JSON.stringify(final))
  localStorage.setItem("todoList", JSON.stringify(finalTodo))
})

addTodoButton.addEventListener("click", (e) => {
  e.preventDefault()
  todoStorage = createNewTodo(todoList)
  localStorage.setItem("todoList", JSON.stringify(todoStorage))
  dragDropping()
})

const renderAllPro = (arrLocalS, original) =>{
  arrLocalS.forEach(b => {
    original.push(b)
    renderingPro(b, yourProjects)
    renderingMultPro(b, whichProject)
  })
}

const renderAllTodos = (arrLocalS, original) => {
  arrLocalS.forEach(b => {
    original.push(b)
    renderingTodo(b) // decide here which div it has to be render to 
  })
}

const prio = document.querySelectorAll(".prio")
prio.forEach(p => {
  //if(flag == 0){
  p.addEventListener("click", filterPrio)
  //}
  
})



todoStorage = JSON.parse(localStorage.getItem("todoList"))
storage = JSON.parse(localStorage.getItem("projectList"))
if(storage != null ){
  renderAllPro(storage, projectList)
  renderAllTodos(todoStorage, todoList)
  }

dragDropping()

console.log("Gatito")
  
export {projectList, todoList, clicked, flag}












