const formElement = document.querySelector('form')


function saveNote(event) {
    event.preventDefault()

    const formData = new FormData(event.target)
    const userTextInput = formData.get('user-input').trim()

    if (!userTextInput) {
        alert('You didn\'t write anything!')
        return
    }

    const listElements = document.getElementById('list-block')
    const newListElement = listElements.appendChild()

}

formElement.addEventListener('submit', saveNote)