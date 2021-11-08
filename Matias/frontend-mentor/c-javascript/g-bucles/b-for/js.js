/*
FOR
    Es un bucle determinado ya que hay que especificar cuantas vueltas dará durante su ejecución 
    Su sintaxis se compone de 3 partes
        Iniciación de variable
        Número de vueltas
        Incremento o decremento 
    Su sintaxis es la siguiente: 
        for(let i = 0; i <= 10; i++)
        {
            //código a ejecutar
        }
    Durante su ejecución, la variable "i" aumentará su valor en cada vuelta.
        for(let i = 0; i <= 3; i++)
        {
            console.log(i);
        }
        1º vuelta: i = 0 -> ¿i <= 3? -> i++ 
        2º vuelta: i = 1 -> ¿i <= 3? -> i++ 
        3º vuelta: i = 2 -> ¿i <= 3? -> i++ 
        4º vuelta: i = 3 -> ¿i <= 3? -> i++ 
        5º vuelta: i = 4 -> ¿i <= 3? -> fin del bucle
*/
let numeros = [7, 1, 2, 2, 0, 3]

for (let i = 0; i < numeros.length; i++){
    console.log(`i vale ${i} y el valor de esa posición en el array es ${numeros[i]}`);
}