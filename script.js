document.addEventListener('DOMContentLoaded', function() {
    const noteTitle = document.getElementById('noteTitle');
    const noteContent = document.getElementById('noteContent');
    const noteImage = document.getElementById('noteImage');
    const addNoteBtn = document.getElementById('addNoteBtn');
    const notesList = document.getElementById('notesList');

    addNoteBtn.addEventListener('click', function() {
        const titleText = noteTitle.value.trim();
        const contentText = noteContent.value.trim();
        const imageFile = noteImage.files[0];

        if (titleText !== '') {
            // Create a new note item
            const noteItem = document.createElement('div');
            noteItem.classList.add('note-item');

            // Create a heading to hold the note title
            const noteHeading = document.createElement('h3');
            noteHeading.textContent = titleText;

            // Create a paragraph to hold the note content
            const notePara = document.createElement('p');
            notePara.textContent = contentText;

            // Create an image element if an image is selected
            let noteImg;
            if (imageFile) {
                noteImg = document.createElement('img');
                noteImg.src = URL.createObjectURL(imageFile);
            }

            // Create a delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-btn');
            deleteBtn.textContent = 'Delete';

            // Append the heading, paragraph, and image to the note item
            noteItem.appendChild(noteHeading);
            if (contentText) noteItem.appendChild(notePara);
            if (imageFile) noteItem.appendChild(noteImg);
            noteItem.appendChild(deleteBtn);

            // Add the new note item to the notes list
            notesList.appendChild(noteItem);

            // Clear the input fields
            noteTitle.value = '';
            noteContent.value = '';
            noteImage.value = '';

            // Add event listener to the delete button
            deleteBtn.addEventListener('click', function() {
                notesList.removeChild(noteItem);
            });

            // Add event listener to the note heading to toggle content visibility
            noteHeading.addEventListener('click', function() {
                const isVisible = notePara.style.display === 'block';
                notePara.style.display = isVisible ? 'none' : 'block';
                if (noteImg) noteImg.style.display = isVisible ? 'none' : 'block';
            });
        }
    });
});
