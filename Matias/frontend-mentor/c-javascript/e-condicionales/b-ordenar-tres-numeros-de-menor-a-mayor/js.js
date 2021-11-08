const numbers = document.getElementById("numbers");
const result = document.getElementById("result");

let a = prompt("Introduzca el primer número");
let b = prompt("Introduzca el segundo número");
let c = prompt("Introduzca el tercer número");


numbers.textContent = `Los números introducidos son: ${a}, ${b}, ${c}`;

let aux; 

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

result.textContent = `Estos son los números ordenados: ${a}, ${b}, ${c}`;