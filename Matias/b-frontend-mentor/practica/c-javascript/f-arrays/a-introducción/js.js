/*
ARRAYS
    Son estructuras que nos permiten almacenar varios datos y agruparlos. 
    Se pueden llenar con cualquier tipo de dato válido en JS y deben ir separados por comas. 
    Se pueden mezclar tipos de datos pero NO ES RECOMENDABLE.
    Se declara con []
    Pueden declararse vacíos o con contenido ya establecido
    En JS los arrays se comportan como listas (no tienen un espacio definido)

    Declaración: 
        let array = [];
        let numeros = [1, 2, 3, 4, 5]

    Cada número de los elementos podrá ser identificado por su indice, es decir, por su posición. 
    Los indices empiezan a contar desde 0.
*/

let numeros = [1, 2, 3, 4, 5];
console.log(numeros);
console.log(numeros[3]);
console.log(numeros[3] + numeros[1]);

let nombre = ["Fernando Gaspari", "Matías Espínola"];
console.log(`hay ${nombre.length} nombres registrados`);
console.log(`"${nombre[0]}" tiene ${nombre[0].length} letras (contando el espacio xD)`);