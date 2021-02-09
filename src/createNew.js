import {Project, Todo} from "./factories"
import {renderingPro, renderingMultPro, renderingTodo} from "./render.js"


const createNewProject = (storage) => {
    const whichProject = document.querySelector("#whichProject")
    const yourProjects = document.querySelector(".yourProjects")
    const newProName = document.querySelector(".projectName") 
    if(newProName.value != ""){
    const newPro = Project(newProName.value)
    storage.push(newPro.getName())
    renderingPro(newPro.getName(), yourProjects)
    renderingMultPro(newPro.getName(), whichProject)
    newProName.value = ""
    return storage
    }
        
}


const createNewTodo = (storage) => {
    const whichProject = document.querySelector("#whichProject")
    const newTodoName = document.querySelector(".todoName")
    const priori = document.querySelector("#priori")
    const notes = document.querySelector(".noteText")
    if(newTodoName.value != ""){
    const newTodo = Todo(newTodoName.value, priori.value, whichProject.value, notes.value)
    console.log(newTodo)
    storage.push(newTodo)
    renderingTodo(newTodo)
    newTodoName.value = ""
    notes.value = ""
    return storage
    }
}

export {createNewTodo, createNewProject}

