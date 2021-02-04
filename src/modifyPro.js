import {projectList} from "./index.js"

const inputPro = document.querySelector(".proDes")
const proDisplay = document.querySelector(".projectDes")


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
        but.style.backgroundColor = `rgb(${123}, ${245}, ${41})`
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
                //yourprojects.removeChild(but)
                but.parentNode.removeChild(but)
                
            }
        });
        proDisplay.style.display = "none"
        console.log(arr)
        return arr
        
    

}

export {changingPro, deletingPro}
