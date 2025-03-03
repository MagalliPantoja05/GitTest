document.addEventListener("DOMContentLoaded", function() {
    mostrarComentarios();
    mostrarInfoUsuario();
});

function mostrarInfoUsuario() {
    const userInfo = document.getElementById('user-info');
    const user = JSON.parse(localStorage.getItem("loggedUser"));

    if (user) {
        userInfo.innerHTML = `Usuario: ${user.name}`;
    } else {
        userInfo.innerHTML = "Usuario no logueado";
    }
}

function postComment() {
    const commentInput = document.getElementById('comment');
    const commentText = commentInput.value.trim();
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    const fecha = new Date().toLocaleString();

    if (commentText === "") {
        alert("El comentario no puede ir vacío");
        return;
    }

    const newComment = {
        username: user.username,
        name: user.name,
        image: user.image,
        commentText: commentText,
        timestamp: fecha
    };

    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(newComment);

    localStorage.setItem('comments', JSON.stringify(comments));

    commentInput.value = "";
    mostrarComentarios();
}

function mostrarComentarios() {
    const commentSection = document.getElementById('comment-section');
    const comments = JSON.parse(localStorage.getItem('comments')) || [];

    commentSection.innerHTML = '';

    comments.forEach((comment, index) => { 
        const comentarioSection = document.createElement("section");
        comentarioSection.classList.add("comentario");
        comentarioSection.innerHTML = `
            <img src="${comment.image}" class="user-image"> 
            <strong>${comment.name}</strong> <br>
            <p>${comment.timestamp}</p><br> 
            ${comment.commentText}
            <button class="delete-btn" data-index="${index}">Eliminar</button>`; 

        commentSection.appendChild(comentarioSection);
    });

    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            eliminarComentario(index);
        });
    });
}

function eliminarComentario(index) {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.splice(index, 1);
    localStorage.setItem('comments', JSON.stringify(comments));
    mostrarComentarios();
}