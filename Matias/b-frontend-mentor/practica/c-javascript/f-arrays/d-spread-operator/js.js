//SPREAD OPERATOR (operador de expanción)


//Su sintaxis es:
const numbers = [7, 1, 2, 2, 0, 3, 12, 13];
console.log(...numbers);


//enviar elementos de un array a una función:
const addNumbers = (a, b, c) => {
    console.log(a + b + c);
}
let numbersToAdd = [1, 2, 3];

addNumbers(...numbersToAdd);


//Añadir un array a otro array
let users = ['Javier', 'David', 'Rosa', 'Juan', 'Mercedes'];
let newUsers = ['Marta', 'Jaime', 'Laura'];

users.push(...newUsers)
console.log(users);


//Copiar arrays
let arr1 = [1,2,3,4];
let arr2 = [...arr1];
console.log(arr2);


//Concatenar arrays (unir arrays)

let arr3 = [5,6,7,8];

let arrConcat = arr1.concat(arr3);
console.log(arrConcat);

let arrConcat2 = [...arr1, ...arr3];
console.log(arrConcat2);

//Enviar a una función un número indefinido de variables (parámetros REST)

const restParms = (...numbers) => {
    console.log(numbers);
}

restParms(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//Librería Math

console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

//Eliminar elementos duplicados

console.log([...new Set(numbers)]);