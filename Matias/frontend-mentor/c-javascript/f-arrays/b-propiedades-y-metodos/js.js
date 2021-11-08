/*
PROPIEDADES:
    .lenght -> Devuelve el número de posiciones que contiene el array

METODOS: 
    Array.isArray(variable a evaluar) -> Devuelve true si la variable es un array

ELIMINAR UN ELEMENTO: 
    .shift() -> Elimina el PRIMER elemento del array y devuelve ese elemento
    .pop() -> Elimina el ÚLTIMO elemento de un array y devuelve ese elemento 

AÑADIR ELEMENTOS
    .push(element1, element2, ...) -> Añade uno o más elementos al FINAL del array y devuelve la nueva longitud. 
    .unshift(element1, element2, ...) -> Añade uno o más elementos al COMIENZO del array y devuelve la nueva longitud.  

BUSCAR ELEMENTOS
    .indexOf() -> Devuelve el PRIMER indice del elemento que coincida con el valor especificado, o -1 si no encuentra ninguno. 
    .lastIndexOf() -> Devuelve el ULTIMO indice del elemento que coincida con el valor especificado, o -1 si no encuentra ninguno. 
    .reverse() -> Invierte el orde de los elementos del array.

TO-STRING
    .join("separador") -> Devuelve un STRING con el separador que indiquemos (por defecto son comas). 

AÑADIR O ELIMINAR ELEMENTOS
    .splice(a, b, items) -> Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos. 
        a -> Indice de inicio
        b -> Número de elementos a eliminar (opcional)
        items -> Elementos a añadir (opcional).

EXTRAER ELEMENTOS
    .slice(a, b) -> Copia elementos de un array desde A hasta B. Si no existe B lo hace hasta el final. Si no existe ni A ni B hace una copia del original.
*/

let numeros = [7, 2, 0, 3, 13];
let numero = 25; 

console.log(numeros.length);
console.log(Array.isArray(numero));

numeros.shift();
console.log(numeros);

numeros.pop();
console.log(numeros);

numeros.push(1, 2, 3, 4, 5);
console.log(numeros);

numeros.unshift(1, 2, 3, 4, 5);
console.log(numeros);

console.log(numeros.indexOf(2));
console.log(numeros.indexOf(6));

console.log(numeros.lastIndexOf(2));
console.log(numeros.lastIndexOf(6));

numeros.reverse();
console.log(numeros);

let arrayString = [numeros.join("")];
console.log(arrayString);

numeros.splice(5)//elimina desde la posición 5 hasta el final
console.log(numeros);
numeros.splice(2, 2)//se fue hasta la posición 2 y eliminó 2 elementos
console.log(numeros);
numeros.splice(1, 2, 2, 0, 3)//se fue hasta la posición 1 y eliminó 2 elementos y agregó 2, 0, 3
console.log(numeros);

let nuevosNumeros = numeros.slice(1, 3);
console.log(nuevosNumeros);