/*
MATH

Se utiliza para operaciones matemáticas más especificas. Utiliza nomenclatura deS punto

Propiedades: 
    Math.E - Math.Pi

Métodos: 
    Math.abs(x) -> Devuelve el valor absoluto de x
    Math.ceil(x) -> Redondea hacia arriba (no importa si era 6.1)
    Math.floor(x) -> Redondea hacia abajo (no importa si era 6.9)
    Math.pow(x, y) -> Devuelve la potencia de x elevado a y
    Math.sqrt(x) -> Devuelve la raiz cuadrada
    Math.random() -> Genera un número pseudoaleatorio entre 0 y 1
    Math.round(x) -> Devuelve el valor de un número redondeado al entero más cercano. 
    Math.sign(x) -> Devuelve -1 si el número que le pasamos era negativo, 1 si era positivo y 0 si era 0 

Es un objeto estático lo que significa que tenemos que usar su nombre para utilizarlo. 
*/

console.log(Math.E);
console.log(Math.PI);
console.log(Math.abs(-13));
console.log(Math.ceil(6.7));
console.log(Math.floor(6.7));
console.log(Math.pow(2, 8));
console.log(Math.random());
console.log(Math.round(Math.random() * 100));

//Para crear un número aleatorio entre un máximo y un mínimo:
let max = 80;
let min = 50;
console.log(Math.round(Math.random() * (max - min) + min));

console.log(Math.sign(7));

console.log(Math.sqrt(2));