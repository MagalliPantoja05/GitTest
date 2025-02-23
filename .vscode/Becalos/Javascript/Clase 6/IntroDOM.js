const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentsContainer = document.getElementById('comments-container');

commentForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe y recargue la página

  // Limpiar el campo de entrada
  const commentText = commentInput.value.trim();
  if (commentText !== '') {
    addComment(commentText);
    commentInput.value = ''; 
  }
});

// Añadir comentario
function addComment(text) {
  const commentDiv = document.createElement('div');
  commentDiv.classList.add('comment');
 
  // Obtiene fecha y hora local
  const now = new Date();
  const dateString = now.toLocaleString(); 

  commentDiv.innerHTML = `<p>${text}</p><p class="date">${dateString}</p>`;
  commentsContainer.appendChild(commentDiv);

  // Eliminar comentario
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Eliminar';
  deleteButton.addEventListener('click', function() {
    commentDiv.remove(); // Elimina el comentario
  });

  commentDiv.appendChild(deleteButton);
  commentsContainer.appendChild(commentDiv);
}