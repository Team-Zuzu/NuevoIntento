/*
Estructuras de control de flujo: 
    Condicionales: 
        Simples
        Compuestos
        Múltiples
    Bucles
        Determinados
        Indeterminados

Sintaxis: 
    Condicion simple: 
        if (condición) //código a ejecutar
        if (condición){
            //código a ejecutar 1
            //código a ejecutar 2
        }
    Condición compuesta:
        if (condición) //código a ejecutar
        else //código a ejecutar
*/

let num1 = 0;

//CONDICIONA SIMPLE
if(num1 > 0){
    console.log(`${num1} es mayor que 0`);
    console.log(`¿Lo sabías, verdaaad? e.e`);
} 

//CONDICIÓN COMPUESTA
if(num1 > 0) console.log(`${num1} es mayor que 0`);
else if (num1 == 0) console.log(`${num1} es igual a 0`);
else console.log(`${num1} es menor que 0`);

/*
OPERADORES LÓGICOS
    and: &&
    or: ||
*/

let num2 = 10;

if (num1 > 0 && num2 > 0)
{
    console.log(`Ambos números son positivos.`);
}
else if (num1 > 0 || num2 > 0)
{
    console.log(`al menos un número es positivo`);
}
else
{
    console.log(`ambos números son negativos u.u`);
}

console.log(`EJERCICIO: ordenar 3 números de menor a mayor`);

let a = 7; 
let b = 2;
let c = 13;
let aux; 

console.log(`los números elegidos fueron: ${a}, ${b}, ${c}`);

if (a > b)
{
    aux = b;
    b = a;
    a = aux;
    if (b > c)
    {
        aux = c;
        c = b;
        b = aux;
    }
}
if (a > b)
{
    aux = b;
    b = a;
    a = aux;
    if (b > c)
    {
        aux = c;
        c = b;
        b = aux;
    }
}

console.log(`los números ordenados: ${a}, ${b}, ${c}`);