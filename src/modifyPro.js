import {projectList, todoList, clicked} from "./index.js"
import { changingStatus } from "./render.js"

const inputPro = document.querySelector(".proDes")
const proDisplay = document.querySelector(".projectDes")
const empties = document.querySelectorAll(".empty")

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
    console.log(arr)
    return arr
}


const deletingPro = (arr, but) => {
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

const changingTodo = () => {

}

const dragDrop = (todo) => {
    todo.addEventListener("dragstart", dragStart)
    todo.addEventListener("dragend", dragEnd)

    function dragStart(){
        setTimeout(() => (this.style.display = "none"), 0)
      }
      
      function dragEnd() {
        this.style.display = "block"
      }

for (const em of empties){
    em.addEventListener("dragover", dragOver)
    em.addEventListener("drop", dragDrop)
  }

    function dragOver(e) {
      e.preventDefault()
  }
  
    function dragDrop() {
      this.appendChild(todo)
      const storage = JSON.parse(localStorage.getItem("todoList"))
      for (const obj of storage){
          if(obj.description == todo.id){
              console.log(this.id)
              if(this.id == "second"){
                  obj.status = "doing"
              } else if(this.id == "third"){
                  obj.status = "done"
              } else if(this.id == "first"){
                  obj.status = "to do"
              }
              //changingStatus(obj.status)
              console.log(obj)
              console.log(storage)
              localStorage.setItem("todoList", JSON.stringify(storage))

          }
      }
      //localStorage.setItem("todoList", JSON.stringify(final))

  }
}






export {changingPro, deletingPro, deletingTodo, updatingTodo, updatingTodoDel, dragDrop}
