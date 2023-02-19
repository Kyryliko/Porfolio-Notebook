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
    newButtonElement.type = 'button'
    newButtonElement.onclick = 'myFunction()'
    newListItem.classList.add('listElement')


    /* const textArea = document.getElementById('text-area')
    textArea.value = ''
    enteredMassage.value = '' */
}

function deleteLiItem() {
    newListItem.remove()
}

formElement.addEventListener('submit', saveNote)
/* newButtonElement.addEventListener('click', deleteLiItem) */