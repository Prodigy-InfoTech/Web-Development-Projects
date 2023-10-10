function addComment() {
    const nameInput = document.getElementById('name');
    const commentInput = document.getElementById('comment');
    const commentsContainer = document.getElementById('comments');

    const name = nameInput.value;
    const comment = commentInput.value;

    if (name.trim() === '' || comment.trim() === '') {
        alert('Name and comment cannot be empty!');
        return;
    }

    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');
    commentElement.innerHTML = `<strong>${name}:</strong> ${comment}`;

    commentsContainer.appendChild(commentElement);

    nameInput.value = '';
    commentInput.value = '';
}
