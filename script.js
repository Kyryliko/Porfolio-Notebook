const formElement = document.querySelector('form');
const listBlock = document.getElementById('list-block');
const deleteBtn = document.getElementById('123');

let enteredMassage;


function saveNote(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const userTextInput = formData.get('userinput').trim();
    enteredMassage = userTextInput;

    if (!userTextInput) {
        alert('You didn\'t write anything!');
        return;
    };

    createNewListItem();
};

function createNewListItem(event) {
    const newListItem = document.createElement('li');
    const newDivElement = document.createElement('div');
    const newParagraph = document.createElement('p');
    const newBtnDeleteElement = document.createElement('button');
    /* const newBtnEditNote = document.createElement('button'); */

    listBlock.append(newListItem);
    newListItem.append(newDivElement);
    newDivElement.appendChild(newParagraph);
    /* newDivElement.appendChild(newBtnEditNote); */
    newDivElement.appendChild(newBtnDeleteElement);
    newParagraph.textContent = enteredMassage;

    newListItem.classList.add('listElement');

    newBtnDeleteElement.textContent = 'X';
    newBtnDeleteElement.addEventListener('click', () => {
        newListItem.remove();
    });

    /* newBtnEditNote.textContent = 'Edit';
    newBtnEditNote.onclick = function () { editNote() }; */

    const textArea = document.getElementById('text-area');
    textArea.value = '';
    enteredMassage.value = '';
};

formElement.addEventListener('submit', saveNote);