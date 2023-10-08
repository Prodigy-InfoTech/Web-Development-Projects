const noteInput = document.getElementById('noteInput');
const addButton = document.getElementById('addButton');
const noteList = document.getElementById('noteList');

addButton.addEventListener('click' , addNote);
function addNote(){
    const noteText = noteInput.value.trim();
     if(noteText ==='')return;
     const li = document.createElement('li');
     li.innerHTML = ` <span>${noteText}</span>
     <button class="deleteButton">Delete</button>
     `;
     noteList.appendChild(li);
     noteInput.value = '';

     li.querySelector('.deleteButton').addEventListener('click',() =>{
        noteList.removeChild(li);
     });
}
