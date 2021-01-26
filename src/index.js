import css from "./style.css";
import { formatDistance, subDays } from 'date-fns'
import {Todo, Project} from "./factories.js"
import rendering from "./render.js"

console.log("test")
const newTodo = Todo("Buy milk", "high", "Loose List", "Before noon") 
console.log(newTodo.getDescription())

const todoList = []
const projectList = []

const addProButton = document.querySelector(".addProButton")


const createNewProject = (e) => {
console.log(e.target)
}

addProButton.addEventListener("click", createNewProject)

/*
const newProName = document.querySelector(".projectName").value 
console.log(newProName)
const newPro = Project(newProName)
projectList.push(newPro)
*/















//const test = formatDistance(subDays(new Date(), 3), new Date())
//localStorage
//localStorage.setItem("myLibrary", JSON.stringify(myLibrary))
//const stored = JSON.parse(localStorage.getItem("myLibrary"))