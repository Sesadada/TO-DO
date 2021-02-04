import {Project, Todo} from "./factories"
import {renderingPro, renderingMultPro} from "./render.js"
const whichProject = document.querySelector("#whichProject")


const createNewProject = (storage) => {
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
    const firstTodo = document.querySelector(".first")
        const newTodoName = document.querySelector(".todoName").value 
        const priori = document.querySelector("#priori").value
        const notes = document.querySelector(".noteText")
        const newTodo = Todo(newTodoName, priori, whichProject.value, notes)

        storage.push(newTodo)
        //renderingPro(newPro.getName(), yourProjects)
        return storage

}

export {createNewTodo, createNewProject}

/*
const createNewProject = () => {
    const storedProjects = JSON.parse(localStorage.getItem("projectList"))
    projectList = storedProjects
    const addProButton = document.querySelector(".addProButton")
    addProButton.addEventListener("click", (e) => {
        e.preventDefault()
        const newProName = document.querySelector(".projectName").value 
        const newPro = Project(newProName)
        projectList.push(newPro.getName())
       
        localStorage.setItem("projectList", JSON.stringify(projectList))
        const storedProjects = JSON.parse(localStorage.getItem("projectList"))
        //yourProjects.textContent = `Your projects:  ${[storedProjects.join(" ")]}`
        //renderingPro(storedProjects, yourProjects)

        console.log("Project List from create " + projectList)
    })

}

*/