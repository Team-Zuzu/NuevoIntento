/*
METODOS II
    .from(iterable) -> Convierte en array el elemento iterable

    .sort([callback]) -> Ordea los elementos de un array alfabeticamente (valor Unicode). Si le pasamos un callback los ordea en función del algoritmo que le pasemos.

    .forEach(callbak(currentValue, [index])) -> ejecuta la función indicada una vez por cada elemento del array.

    .some(callback) -> Comprueba si al menos un elemento del array cumple la condición.

    .every(callback) -> Comprueba si todos los elementos del array cumplen la condición.

    .map(callback) -> Transforma todos los elementos del array y devuelve un nuevo array.

    .filter(callback) -> Filtra todos los elementos del array que cumplan la condición y devuelve un nuevo array

    .reduce(callback) -> Reduce todos los elementos del array a un único valor
*/

let palabra = 'Hola mundo';
console.log(Array.from(palabra));
//otra forma de hacer lo mismo:
console.log(palabra.split(''));
//ahora lo separo en palabras, no en letras: 
console.log(palabra.split(' '));

//ordenar alfabeticamente
const letras = ['b', 'c', 'z', 'a', 'm', 'k', 's'];
console.log(letras.sort());
//ordenar de menor a mayor
const numeros = [2, 0, 3, 7, 1, 2, 12, 13];
console.log(numeros.sort((a, b) => a - b));
//ordenar de mayor a menor
console.log(numeros.sort((a, b) => b - a));

//recorre el array
//aunque dorian lo haya usado para esta estupidez, este método también puede ejecutar funciones (una vez por cada elemento del array).
numeros.forEach((element) => console.log(element));
numeros.forEach((element, index) => console.log(`${element} está en la posición ${index}`));

const palabras = ['HTML', 'CSS', 'JS', 'C#', 'C++', 'C', 'Java', 'Phytom'];
//comprueba si ALGUNO de los elementos del array cumple la condición if que le indicamos (en este caso, revisa si hay elementos con mas de 2 letras).
console.log(palabras.some(aux => aux.length > 5));
//muy parecido a .some. Comprueba si TODOS de los elementos del array cumple la condición if que le indicamos.
console.log(palabras.every(aux => aux.length > 5));

//recorre el array aplicando la sentencia que le programemos (en este caso, multiplicar todo por 2).
const numerosPorDos = numeros.map((aux) => aux * 2);
console.log(numerosPorDos);

//recorre el array seleccioando los elementos que cumplan la condición que le programemos (en este caso, ser números impares)
const impares = numeros.filter((aux) => aux % 2 != 0);
console.log(impares);

//reduce todos los valores del array a un único valor (en este caso, sumándolos a todos).
console.log(numeros.reduce((a, b) => a + b));

//un ejemplo mas interesante de .reduce:
const users = [
    {
        name: 'usuario1',
        online: true
    },
    {
        name: 'usuario2',
        online: true
    },
    {
        name: 'usuario3',
        online: false
    },
    {
        name: 'usuario4',
        online: true
    },
    {
        name: 'usuario5',
        online: false
    },
    {
        name: 'usuario6',
        online: false
    },
    {
        name: 'usuario7',
        online: true
    }
];

const usuariosEnLinea = users.reduce((auxContador, auxUsuarios) => {
    if (auxUsuarios.online) {
        auxContador++;
    }
    return auxContador;
}, 0);//este 0 inicializa la variable auxContador

console.log(`Hay ${usuariosEnLinea} usuarios conectados`);