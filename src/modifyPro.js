import {projectList, todoList, clicked} from "./index.js"
import {renderingPro, renderingMultPro} from "./render.js"
import {Project} from "./factories.js"
import { el } from "date-fns/locale"
const inputPro = document.querySelector(".proDes")
const proDisplay = document.querySelector(".projectDes")
const whichProject = document.querySelector("#whichProject")
const yourProjects = document.querySelector(".yourProjects")

//updates todo when changing the project
const updatingTodo = (arr, but) => {
    const divs = Array.from(document.querySelectorAll(`[data="${but.textContent}"]`))
    console.log(divs)
    divs.forEach(d => {
        d.firstChild.textContent = `#${inputPro.value}`
        d.setAttribute("data", `${inputPro.value}` )
        console.log(d)
    })
    todoList.forEach((element) => {
        if(element.project == but.textContent) {
            element.project = inputPro.value;
            }   
        });
    arr.forEach((element) => {
        if(element.project == but.textContent) {
            element.project = inputPro.value;
            }   
        });
    return arr
}
//updates project list appended on index.html
const changingPro = (arr, but) => {
    const multi = document.querySelectorAll(".multi")
    const multiarr = [...multi]
    arr.forEach((element, index) => {
        if(element === but.textContent) {
            arr[index] = inputPro.value;
            projectList[index] = inputPro.value
            but.textContent = inputPro.value;
            multiarr[index].textContent = inputPro.value 
            }     
        });
        proDisplay.style.display = "none"
        const divs = Array.from(document.querySelectorAll(".projectHash"))
        divs.forEach(d => {d.style.display = "block"})
        but.style.backgroundColor = `rgb(${123}, ${245}, ${41})`
        clicked = 0
    return arr
}

//updates todoList when removing the project
const updatingTodoDel = (arr, but) => {
    const divs = Array.from(document.querySelectorAll(`[data="${but.textContent}"]`))
    divs.forEach(d => {
        d.parentNode.removeChild(d)  //remove fisic div 
    })
    todoList.forEach((element, index) => {
        if(element.project == but.textContent) {
            todoList.splice(index,1) 
            }   
        });
    arr.forEach((element, index) => {
        if(element.project == but.textContent) {
            arr.splice(index,1) 
            }   
        });
    return arr
}

const deletingPro = (arr, but) => {
    const divs = Array.from(document.querySelectorAll(".projectHash"))

    const multi = document.querySelectorAll(".multi")
    const multiarr = [...multi]
        arr.forEach((element, index) => {
            if(element === but.textContent) {
                console.log(but.textContent)
                arr.splice(index,1) //updates local store
                projectList.splice(index, 1) //updates project list
                but.parentNode.removeChild(but)   
                multiarr[index].parentNode.removeChild(multiarr[index])
            }
        });
        proDisplay.style.display = "none"
        divs.forEach(d => {d.style.display = "block"})
        clicked = 0
        return arr
}

//deletes todo from todoList and Local Storage
const deletingTodo = (arr, todo) => {
    arr.forEach((element, index) => {
        if(element.description === todo.id && todo.getAttribute("data") === element.project) {
            arr.splice(index,1) //updates local store
            todoList.splice(index, 1) //updates todo list
            todo.parentNode.removeChild(todo)  //remove fisic div 
        }
    });
    return arr 

}


//changes status when dropping todo
const dragDropping = todo => {
    const whichTodo = document.querySelectorAll(".projectHash")
    const empties = document.querySelectorAll(".empty")
    whichTodo.forEach(todo => {
      todo.addEventListener("dragstart", () => {
        setTimeout(() => todo.classList.add("dragging"), 0)   
      })
      todo.addEventListener("dragend", () => {
        todo.classList.remove("dragging")
      })
    })
    empties.forEach(em => {
      em.addEventListener("dragover", e => {
        e.preventDefault()
        const draggable = document.querySelector(".dragging")
        em.appendChild(draggable)
        const storage = JSON.parse(localStorage.getItem("todoList"))
        for (const obj of storage){
            if(obj.description == draggable.id){
                if(em.id == "second"){
                    obj.status = "doing"
                } else if(em.id == "third"){
                    obj.status = "done"
                } else if(em.id == "first"){
                    obj.status = "to do"
                }
                localStorage.setItem("todoList", JSON.stringify(storage))
            }
        }
      })
    }) 
}

const updatingTodo = (oldP, newP) => {
    const todoStorage = JSON.parse(localStorage.getItem("todoList"))
    todoStorage.forEach(e => {
        if(e.project === oldP && e.description === this.id){
            e.project = newP
            sub.setAttribute("data", `${newP}`)
            console.log(this)
            console.log(e)
            if(!projectList.includes(newP)){
                const newPro = Project(newP)
                projectList.push(newPro.getName())
                renderingPro(newPro.getName(), yourProjects)
                renderingMultPro(newPro.getName(), whichProject)
                console.log(projectList)
                //localStorage.setItem("projectList", JSON.stringify(projectList))

            }
        }
    })
}

//changes todo when writing directly in todo and enter is pressed
const changingTodo = (e) => {
  const sub = e.target
  console.log(e.target)
  sub.setAttribute("contenteditable", "true")
  const todo = e.target.textContent
  let regex;
  let contenteditable = document.querySelector('[contenteditable]')
  let texto = contenteditable.textContent;
  console.log(texto)


  sub.addEventListener('keyup', function(e) {
      console.log(e.target.textContent)
        if (e.key === 'Enter') {       
    if(todo[0] == "#"){
        regex = /\..*$/
        let lastProject = todo.replace(regex,"").slice(1)
        let newProject = sub.textContent.replace(regex,"").slice(1);
        updatingTodo(lastProject, newProject)
        //localStorage.setItem("todoList", JSON.stringify(todoStorage))
        sub.removeAttribute("contenteditable", "true")
    } 
    
    }
      });
}


export {changingPro, deletingPro, deletingTodo, updatingTodo, updatingTodoDel, dragDropping, changingTodo}

