const formElement = document.querySelector('form')
const listBlock = document.getElementById('list-block')

var enteredMassage


function saveNote(event) {
    event.preventDefault()

    const formData = new FormData(event.target)
    const userTextInput = formData.get('userinput').trim()
    enteredMassage = userTextInput

    if (!userTextInput) {
        alert('You didn\'t write anything!')
        return
    }

    createNewLiItem()
}

function createNewLiItem() {
    const liTemplateElement = document.getElementById('list-block').firstElementChild
    const clone = liTemplateElement.cloneNode(true)
    document.getElementById('list-block').appendChild(clone)
    document.getElementById('list-block').lastElementChild.style.display = 'block'

    const paragraphElement = document.getElementById('list-block').firstElementChild.firstElementChild.firstElementChild
    paragraphElement.textContent = enteredMassage
}


formElement.addEventListener('submit', saveNote)