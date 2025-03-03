//Users
const users = [
    {name: "Sasha Blouse", username: "sablou", password: "patata", image: "https://i.pinimg.com/736x/e7/d3/a8/e7d3a812659c0a33359698a02544be41.jpg"},
    {name: "Eren Jaeger", username: "erejae", password: "libertad", image: "https://i.pinimg.com/736x/b6/9b/e4/b69be439273438eeaad7d9e0da6edc89.jpg"},
    {name: "Mikasa Ackerman", username: "mikack", password: "qwerty", image: "https://i.pinimg.com/736x/47/af/34/47af340603e6deb2d2ec3eabd7bdbe4e.jpg"},
    {name: "Armin Arlett", username: "armarl", password: "murallas", image: "https://i.pinimg.com/736x/89/eb/2a/89eb2abc2122f5467d2230f75f29e5a8.jpg"},
    {name: "Jean Kirschtein", username: "jekir", password: "caballo", image: "https://i.pinimg.com/736x/dc/a7/41/dca74138dad02ac44da4f353c6f8b85d.jpg"},
    {name: "Connie Springer", username: "consp", password: "12345", image: "https://i.pinimg.com/736x/b4/86/e9/b486e9e45d8f91df27f8155d55ccf2e2.jpg"}
]

function logIn() {
    const usernamePage = document.getElementById('username').value.trim();
    const passwordPage = document.getElementById('password').value.trim();
    const error = document.getElementById('error');

    const userFind = users.find(user => user.username === usernamePage && user.password === passwordPage)

    if (userFind) {
        localStorage.setItem("loggedUser", JSON.stringify(userFind));
        window.location.href = "home.html";
    }else{
        error.textContent = "Usuario o contraseña incorrecta"
    }
}