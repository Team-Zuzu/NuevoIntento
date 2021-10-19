/*
FUNCIONES - INTRODUCCIÓN
    -> Son fragmentos de código que escribimos para ejecutar una tarea y no volver a escribir el mismo código más de una vez.
    -> Nos ayuda a modularizar el código 
    -> Las funciones deben realizar una sola tarea 
    Sintaxis:
        function nombreFuncion(){
            //código a ejecutar
        }
        const nombreFuncion = () =>{
            //código a ejecutar
        }
    Las funciones pueden recibir parametros. Esta sería su sintaxis:
        function nombreFuncion(parametro1, parametro2){
            //código a ejecutar
        }
        const nombreFuncion = (parametro1, parametro2) =>{
            //código a ejecutar
        }
    También pueden devolver valores: 
        function nombreFuncion(parametro1, parametro2){
            return parametro1 + parametro2;
        }
        const nombreFuncion = (parametro1, parametro2) => return parametro1 + parametro2;
*/

// function saludar() {
//     console.log(`Hola`);
// }

// const saludar = () => console.log(`hola`);

// const saludarUsuario = (user) => console.log(`Hola ${user}!`);

// saludarUsuario('Matías');

// const suma = (num1, num2) => num1 + num2;

const suma = (num1, num2) => {
    if (num1 == 2) {
        return `num1 es igual a ${num1}`;
    }
    return num1 + num2;
}
let result = suma(2, 3);
console.log(result);