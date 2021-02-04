//function render to the DOM
import {clicked, projectList } from "./index.js"
const proDisplay = document.querySelector(".projectDes")
const inputPro = document.querySelector(".proDes")


let flag;


const renderingPro = (pro, div) => {
        const newButt = document.createElement("button")
        newButt.classList.add("projectButton")
        newButt.textContent = pro
        div.appendChild(newButt)
        newButt.addEventListener("click", (e) => {
            if(newButt.style.backgroundColor == "pink"){
                proDisplay.style.display = "none"
                newButt.style.backgroundColor = `rgb(${123}, ${245}, ${41})`
                clicked = 0
                inputPro.value = ""
            } else if(clicked != 1){
            newButt.style.backgroundColor = "pink"
            proDisplay.style.display = "block"
            inputPro.setAttribute("placeholder", `${newButt.textContent}`)
            clicked = 1              
            }
          })  
}



const renderingMultPro = (pro, div) => {
    // create new option element
    let opt = document.createElement('option');
// create text node to add to option element (opt)
    opt.appendChild( document.createTextNode(`${pro}`) );
    opt.classList.add("multi")
// set value property of opt
    opt.value = `${pro}`; 
// add opt to end of select box (sel)
    div.appendChild(opt);

}




export {renderingPro, renderingMultPro}

/*
        const yourProjects = document.querySelector(".yourProjects")
        yourProjects.removeChild(but)

items.forEach((element, index) => {
    if(element.id === item.id) {
        items[index] = item;
    }
});


const renderingPro = (list, div) => {

    list.forEach(obj => {
        const newButt = document.createElement("button")
        newButt.classList.add("projectButton")
        newButt.textContent = obj.getName()
        div.appendChild(newButt)
        
    });
      
}



*/