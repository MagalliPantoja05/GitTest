//arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.

const productos = [
    { nombre: "Teclado", precio: 150, categoria: "Electrónica" },
    { nombre: "Monitor", precio: 2000, categoria: "Electrónica" },
    { nombre: "Espejo", precio: 79, categoria: "Hogar" },
    { nombre: "Calcetas", precio: 5, categoria: "Ropa" },
    { nombre: "Bolso", precio: 99, categoria: "Ropa" }
];

// *** Filtrar los productos por precio menor a 100 *** FILTER ***
// filter recibe una función que se ejecuta por cada elemento del arreglo, y retorna un nuevo arreglo con los elementos que cumplan la condición
const baratos = productos.filter(producto => producto.precio < 100);
console.log(baratos); 
// [{ nombre: "Espejo", precio: 79, categoria: "Hogar" }
// { nombre: "Calcetas", precio: 5, categoria: "Ropa" }
// { nombre: "Bolso", precio: 99, categoria: "Ropa" }]


// *** Ordenar los productos alfabéticamente por nombre *** SORT ***
// sort recibe una función que compara dos elementos del arreglo y retorna un valor negativo si el primer elemento es menor que el segundo, 0 
// si son iguales, y un valor positivo si el primer elemento es mayor que el segundo
const ordenados = productos.sort((a, b) => a.nombre - b.nombre);
console.log(ordenados);
// { nombre: 'Teclado', precio: 150, categoria: 'Electrónica' },
// { nombre: 'Monitor', precio: 2000, categoria: 'Electrónica' },
// { nombre: 'Espejo', precio: 79, categoria: 'Hogar' },
// { nombre: 'Calcetas', precio: 5, categoria: 'Ropa' },
// { nombre: 'Bolso', precio: 99, categoria: 'Ropa' }


// *** Generar un nuevo arreglo que contenga solo los nombres de los productos *** MAP ***
// map recibe una función que se ejecuta por cada elemento del arreglo, y retorna un nuevo arreglo con los valores que retorna la función
const nombres = productos.map(producto => producto.nombre);
console.log(nombres); 
// [ 'Teclado', 'Monitor', 'Espejo', 'Calcetas', 'Bolso' ]


// ************************************************************************************************************
// Filtrar los productos por categoría "Ropa" *** FILTER ***
const ropa = productos.filter(producto => producto.categoria === "Ropa");   
console.log(ropa); 
// [{ nombre: "Calcetas", precio: 5, categoria: "Ropa" }
// { nombre: "Bolso", precio: 99, categoria: "Ropa" }]


// *** Encontrar un producto por nombre *** FIND ***
// find recibe una función que se ejecuta por cada elemento del arreglo, y retorna el primer elemento que cumpla la condición
const productoBuscado = productos.find(producto => producto.nombre === "Monitor");
console.log(productoBuscado);
// { nombre: "Monitor", precio: 2000, categoria: "Electrónica" }


// *** Verificar si todos los productos son baratos *** EVERY ***
// every recibe una función que se ejecuta por cada elemento del arreglo, y retorna true si todos los elementos cumplen 
// la condición, y false si al menos uno no la cumple
const todosBaratos = productos.every(producto => producto.precio < 100);
console.log("Todos los productos son baratos:", todosBaratos);
// Todos los productos son baratos: false


// *** Calcular el precio total de todos los productos *** REDUCE ***
// reduce recibe una función que se ejecuta por cada elemento del arreglo, y un valor inicial para el acumulador
// en este caso, el acumulador es la suma de los precios de los productos, y el valor inicial es 0
const precioTotal = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
console.log("Precio total de todos los productos:", precioTotal);
// Precio total de todos los productos: 2333