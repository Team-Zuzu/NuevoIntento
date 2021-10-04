/*
BUCLES 
    Se usan cuando queremos que un trozo de código se repita. 
    Existen bucles determinados e indeterminados. 
    Los determinados se usan cuando epecificamos el número de veces que se va a repetir. 
        Ej: Imprimir números del 1 al 10
    Los indeterminados se usan cuando no sabemos el número de veces que se van a repetir. 
        Ej: Repetir mensaje de introducor contraseña
    La esctrictura de un bucle siempre es la misma 
        bucle{
            //código a ejecutrar
        }

WHILE
    Es un bucle indeterminado ya que no sabemos cuantas vueltas dará durante su ejecución 
    Su sintaxis se compone de una única parte (condición de salia)
        while(condición){
            //código a ejecutar
        }

DO WHILE
    Es un bucle indeterminado ya que no sabemos cuantas vueltas dará durante su ejecución 
    Su sintaxis se compone de dos partes. 
        Código a ejecutrar 
        Condición de salida
        do{
            //código a ejecutar
        }while(condición)
*/

// let pass = "";
// while(pass != "hola")
// {
//     pass = prompt("Introduzca su contraseña");
// }
// console.log("Fin del bucle");

let pass = "";
do
{
    pass = prompt("Introduzca su contraseña");
}while(pass != "hola");
console.log("Fin del bucle");