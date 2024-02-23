var  addToDoButton = document.getElementById('addToDo')
var  toDoContainer = document.getElementById('ToDoContainer')
var  inputField = document.getElementById('inputField')

const taches = [
    {
        titre : "ghghggh",
        fait : true,
        id: 124
    }
];



addToDoButton.onclick = function(){
    if(inputField.value != ""){
        var paragraph = document.createElement('p')
        
    }

    paragraph.innerText = inputField.value

    paragraph.classList.add('p_style')

    toDoContainer.appendChild(paragraph)

    inputField.value = ""

    paragraph.addEventListener('click',function(){
    paragraph.classList.add('p_click')

    })

    paragraph.addEventListener("dblclick",function(){
        toDoContainer.removeChild(paragraph)
    })
}


const fait = taches.filter(tache =>{
    return taches
})