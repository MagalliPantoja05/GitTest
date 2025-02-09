/*Si la nota es 90 o más, el estudiante aprueba con "Excelente".
Si la nota está entre 75 y 89, el estudiante aprueba con "Bien".
Si la nota está entre 60 y 74, el estudiante aprueba con "Suficiente".
Si la nota es menor de 60, el estudiante no aprueba.*/
let nota = 89;
let saludo = "Evaluador de Notas con Mensajes Personalizados"; 
console.log (saludo);

if (nota < 0) {
    console.log("La nota del estudiante no entra en el Rango.");
    } else if (nota <= 60) {
        console.log("El estudiante no aprueba.");
    } else if (nota < 74) {
        console.log("El estudiante aprueba con 'Suficiente'.");
    } else if (nota < 89) {
        console.log("El estudiante aprueba con 'Bien'.");
    } else {
        console.log("El estudiante aprueba con 'Excelente'.")
    } 
