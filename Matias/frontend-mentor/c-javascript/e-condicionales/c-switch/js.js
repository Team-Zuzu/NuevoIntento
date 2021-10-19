/*
Sintaxis simple: 
    switch (evaluación)
    {
        case n1:
            //código
            break;
        case n2:
            //código
            break;
        default:
            //código
    }

Sintaxis múltiple: 
    switch (evaluación)
    {
        case n1:
        case n2:
        case n3:
            //código
            break;
        default:
            //código
    }
*/

let num = 3;

switch (num)
{
    case 1: 
        console.log(`${num} tiene el valor 1`);
        break;
    case 2:
        console.log(`${num} tiene el valor 2`);
        break;
    default:
        console.log(`${num} es un número distinto a 1 y 2`);
}

switch (num)
{
    case 3: 
    case 6:
    case 9:
        console.log(`${num} es múltiplo de 3 y menor a 10`);
        break;
    default:
        console.log(`${num} no es múltiplo de 3 y menor a 10`);
}

