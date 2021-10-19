/*
OPERADOR TERNARIO.
    Se utiliza cuando una condición será true o false, igual que el if. 
    Su ejecución puede tener una o varias sentencias. En caso de que sean varias irán separadas por comas y entre paréntesis.

    Su sintaxis: 
        Caso simple: 
            (condición) ? true : false
        Casi compuesto: 
            (condición) ? 
                (sentencia nº1,
                sentencia nº2)
                :
                (sentencia nº1,
                sentencia nº2)
*/

let num = 3; 
(num % 2 == 0) ? console.log(`${num} es par`) : console.log(`${num} es impar`);

/*
ES RECOMENDABLE USAR UN OPERADOR TERNARIO PORQUE LOS RECURSOS QUE HACEN FALTA PARA EJECUTAR UN OPERADOR TERNARIO SON MENORES QUE LOS QUE HACEN FALTA PARA UN IF
*/

(num % 2 == 0) ? 
(
    console.log(`${num} es par`),
    console.log(`${num} es par2`)
) 
: 
( 
    console.log(`${num} es impar`),
    console.log(`${num} es impar2`)
);