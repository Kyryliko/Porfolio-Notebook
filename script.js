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

    createNewListItem()
}

function createNewListItem(event) {
    const newListItem = document.createElement('li')
    const newDivElement = document.createElement('div')
    const newParagraph = document.createElement('p')
    const newButtonElement = document.createElement('button')



    listBlock.append(newListItem)
    newListItem.append(newDivElement)
    newDivElement.appendChild(newParagraph)
    newDivElement.appendChild(newButtonElement)
    newParagraph.textContent = enteredMassage

    newButtonElement.textContent = 'X'


    newDivElement.style.display = 'block'


    /* const textArea = document.getElementById('text-area')
    textArea.value = '' */
}

formElement.addEventListener('submit', saveNote)