const formElement = document.querySelector('form')
const listBlock = document.getElementById('list-block')
var enteredMassage


function saveNote(event) {
    event.preventDefault()

    const formData = new FormData(event.target)
    const userTextInput = formData.get('userinput').trim()
    enteredMassage = userTextInput
    console.log(enteredMassage)

    if (!userTextInput) {
        alert('You didn\'t write anything!')
        return
    }

    createNewListItem()
}

function createNewListItem(event) {
    const newListItem = document.createElement('li')
    const newParagraph = document.createElement('p')

    listBlock.appendChild(newListItem)
    newListItem.appendChild(newParagraph)
    newParagraph.textContent = enteredMassage

    /* const textArea = document.getElementById('text-area')
    textArea.value = '' */
}

formElement.addEventListener('submit', saveNote)