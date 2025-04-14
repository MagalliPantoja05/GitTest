// Filtra los usuarios que tengan edad mayor o igual a 18.
const usuarios = [
    { nombre: "Ana", edad: 17 },
    { nombre: "Luis", edad: 22 },
    { nombre: "Carlos", edad: 15 },
    { nombre: "Lucía", edad: 30 },
    ];
const filtrarMayoresDeEdad = (arr) => {
    return arr.filter(usuario => usuario.edad >= 18);
}
const resultado = filtrarMayoresDeEdad(usuarios);
console.log(resultado); 
