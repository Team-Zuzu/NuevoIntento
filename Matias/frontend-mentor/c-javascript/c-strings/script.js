/*
    PROPIEDADES

        lenght -> Devuelve la longitud de la cadena

    METODOS

        Todos los métodos devuelven una cadena nueva. La cadena original no será modificada. 

        toUpperCase() -> Devuelve la cadena en mayúsculas

        toLowerCase() -> Devuelve la cadena en minúsculas

        indexOf(string) -> Devuelve la posición en la que se encuentra el string. Si no lo encuentra devuelve -1
        
        replace(valor a buscar, valor nuevo) -> Remplaza el fragmento por un fragmento de la cadena por uno nuevo. 
        
        substring(inicio [,fin]) -> Extrae los caracteres desde el inicio hasta el fin (el final no se incluye). Si no se incluye el fin extrae hasta el final.

        slice(inicio [, fin]) -> Igual que substring pero admite valores negativos. Si ponemos valores negativos empezará desde atrás. Si no se incluye el final extrae hasta el final. 
        (2, -4) -> Empieza a contar en el tercer caracter y los 4 últimos no los considera. 

        trim() -> Elimina los espacios al inicio y al final de la cadena

        starsWith(valor [, inicio]) -> Sirve para saber si la cadena empieza con ese valor. Devuelve true o false.

        endsWith(valor [, longitud]) -> Sirve para saber si la cadena termina con ese valor. Devuelve true o false. 

        includes(valor [, inicio]) -> Igual que indexOf pero devuelve true o false

        repeat(valor) -> Repite el string el número de veces que le indiquemos.
*/

let cadena = "Hola Mundo!";
console.log(cadena.length);

console.log(cadena.toUpperCase());
console.log(cadena.toLowerCase());

console.log(cadena.indexOf("Mundo"));
console.log(cadena.indexOf("d"));

console.log(cadena.replace("Mundo", "Matías"));

console.log(cadena.substring(3));
console.log(cadena.substring(3, 8));

console.log(cadena.slice(-3))
console.log(cadena.slice(2))
console.log(cadena.slice(1, 4))

let cadena2 = "    Hola Mundo, estamos trabajando con cadenas.    "
console.log(cadena2);
console.log(cadena2.trim());

console.log(cadena.startsWith("H"));
console.log(cadena.startsWith("h"));
console.log(cadena.startsWith("M", 5));

console.log(cadena.endsWith("!"));
console.log(cadena.endsWith("u", 7));//Hola Mundo!
console.log(cadena.endsWith("Mundo!"));

console.log(cadena.includes("n"));
console.log(cadena.includes("a", 2));

let cadena3 = "Hola";
console.log(cadena3.repeat(3));
console.log("r".repeat(3));