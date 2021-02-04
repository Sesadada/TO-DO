import css from "./style.css";
import { formatDistance, subDays } from 'date-fns'
import {renderingPro, renderingMultPro} from "./render.js"
import {createNewProject, createNewTodo} from "./createNew.js"
import {changingPro, deletingPro} from "./modifyPro.js"

//localStorage.setItem("projectList", JSON.stringify(projectList))

//const storedProjects = JSON.parse(localStorage.getItem("projectList"))

const yourProjects = document.querySelector(".yourProjects")
const addProButton = document.querySelector(".addProButton")
const whichProject = document.querySelector("#whichProject")
const changePro = document.querySelector("#changePro")
const deletePro = document.querySelector("#deletePro")
let storedProjects;
const todoList = []
const projectList = []
let clicked;
let storage;



addProButton.addEventListener("click", (e) => {
  e.preventDefault()
  storage = createNewProject(projectList)
  localStorage.setItem("projectList", JSON.stringify(storage))
})

changePro.addEventListener("click", () => {
  const buttons = Array.from(document.querySelectorAll(".projectButton"))
  const [chosen] = buttons.filter(b => b.style.backgroundColor == "pink")
  storage = JSON.parse(localStorage.getItem("projectList"))
  const final = changingPro(storage, chosen)
  localStorage.setItem("projectList", JSON.stringify(final))

  //filter? const chosen = buttons.filter(b => b.innerHTML == inputPro.value)
})

deletePro.addEventListener("click", (e) => {
  const buttons = Array.from(document.querySelectorAll(".projectButton"))
  const [chosen] = buttons.filter(b => b.style.backgroundColor == "pink")
  storage = JSON.parse(localStorage.getItem("projectList"))
  const final = deletingPro(storage, chosen)
  localStorage.setItem("projectList", JSON.stringify(final))
})



const renderPage = (arrLocalS, original) =>{
  arrLocalS.forEach(b => {
    original.push(b)
    renderingPro(b, yourProjects)
    renderingMultPro(b, whichProject)
    
  })
}

storedProjects = JSON.parse(localStorage.getItem("projectList"))
if(storedProjects != null ){
  renderPage(storedProjects, projectList)
  }
 



export {projectList, todoList, clicked}


/*
when the array.length is zero:
if(storedProjects != null){
  
}


//const newTodo = Todo("Buy milk", "high", "Loose List", "Before noon") 
//console.log(newTodo.getDescription())

  const storedProjects = JSON.parse(localStorage.getItem("projectList"))
  localStorage.setItem("projectList", JSON.stringify(projectList))

*/















//const test = formatDistance(subDays(new Date(), 3), new Date())
//localStorage
//localStorage.setItem("myLibrary", JSON.stringify(myLibrary))
//const stored = JSON.parse(localStorage.getItem("myLibrary"))