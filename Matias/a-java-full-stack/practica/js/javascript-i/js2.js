// 1. Realizar una función, a la que se le pase como parámetro un número N,
// y muestre por consola N veces, el siguiente mensaje: “Bienvenidos al
// curso Full Stack”


// function bienvenidos(num){
//     for (let i = 0; i < num; i++) {
//         console.log('Bienvenidos al curso de Full Stack');
//     }
// }
// bienvenidos(2)


// 2. Diseñar una función que tenga como parámetros dos números, y que
// calcule el máximo.


// const buscarMaximo = (num1, num2) => Math.max(num1, num2)
// console.log(buscarMaximo(10, 5));


// 3. Crear una función que se llame promedio3, que reciba como
// parámetro tres valores y devuelva el promedio de los mismos.


// promedio3 = (num1, num2, num3) => (num1 + num2 + num3) / 3
// console.log(promedio3(6, 7, 8));


// 4. Crear una función que lea notas hasta que ingrese -1 y devuelve el
// promedio de las notas leídas. 


// function promedioPrompt() {
//     let ultimaEntrada
//     let notas = []
//     do {
//         ultimaEntrada = parseInt(prompt('ingrese la nota'))
//         if (ultimaEntrada > 0 && ultimaEntrada <= 10) notas.push(ultimaEntrada)
//     } while (ultimaEntrada != -1)
//     return notas.reduce((a, b) => a + b) / notas.length
// }
// console.log(promedioPrompt());


// 4b. Una función que se llame siguiente, que reciba como
// parámetro un valor entero, y devuelva el siguiente del número
// ingresado como parámetro


const siguiente = num => ++num
// console.log(siguiente(8))


// 5. Una función que se llame doble, que reciba como parámetro un valor, y
// devuelva el doble del número ingresado como parámetro.


const doble = num => num * 2
// console.log(doble(8))


// 6. Una función que se llame cuadrado, que reciba como parámetro un
// valor, y devuelva el valor del numero ingresado como parámetro
// elevado al cuadrado.


const cuadrado = num => Math.pow(num, 2)
// console.log(cuadrado(8))


// 7. Una función que se denomine imprimirValores que dado un número
// por parámetro, imprima cual es el valor siguiente, el doble y el
// cuadrado. Usando las funciones definidas en los puntos 5) , 6) y 7) :
// siguiente, el doble y el cuadrado.


function imprimirValores(num) {
    console.log(`${num} + 1 = ${siguiente(num)}`)
    console.log(`${num} * 2 = ${doble(num)}`)
    console.log(`${num} * ${num} = ${cuadrado(num)}`)
}
// imprimirValores(8)


// 8. Una función que se denomine imprimirElDobleDelSiguiente que dado
// un número por parámetro, imprima cual es el valor siguiente del doble.
// Usando las funciones definidas en los puntos 5) , 6) : siguiente, el
// doble .


const imprimirElDobleDelSiguiente = num => console.log(doble(siguiente(num)))
// imprimirElDobleDelSiguiente(8)

// 9. Una función que se denomine
// imprimirElDobleDelSiguienteAlCuadrado que dado un número por
// parámetro, imprima cual es el valor siguiente del doble. Usando las
// funciones definidas en los puntos 5) , 6) y 7) : siguiente, el doble y el
// cuadrado


const imprimirElDobleDelSiguienteAlCuadrado = num => console.log(doble(cuadrado(siguiente(num))))
// imprimirElDobleDelSiguienteAlCuadrado(8)


// 10.Una función que dado la longitud de un lado de un cuadrado devuelva
// el perímetro


const perimetro = num => num * 4
// console.log(perimetro(8));


// 11. Una función que dado la longitud de un lado de un cuadrado devuelva
// la superficie.


const superficie = num => Math.pow(num, 2)
// console.log(superficie(8))



// 12.Una función que dado el radio de un círculo devuelva la circunferencia


const circunferencia = radio => Math.PI * (radio * 2)
// console.log(circunferencia(8))


// 13.Una función que dado el radio de un círculo devuelva el área del
// círculo.


const area = radio => Math.PI * Math.pow(radio, 2)
// console.log(area(8))


// 14.Una función que dado un número de mes y me devuelva la cantidad de
// días de ese mes (suponiendo que no es un año bisiesto).


const diasDelMes = mes => new Date(2019, mes, 0).getDate();
// console.log(diasDelMes(2));


// 15.Una función que reciba como parámetro un año y diga si ese año es
// bisiesto.


const bisiesto = year => (new Date(year, 2, 0).getDate() == 29) ? 'bisiesto' : 'normal'
// console.log(bisiesto(2020));


// 16.Una función que reciba el día, mes y año y me devuelva la cantidad de
// días de ese mes.


const cantDias = (dia, mes, year) => new Date(year, mes, 0).getDate()
// console.log(cantDias(14, 2, 2018));


// 17.Una función que reciba día, mes y año y devuelva el día anterior


function diaAnterior(dia, mes, year) {
    let hoy = new Date(year, mes - 1, dia)
    let ayer = new Date(hoy.getTime() - 1000 * 60 * 60 * 24)
    return `${ayer.getDate()} - ${ayer.getMonth() + 1} - ${ayer.getFullYear()}`
}
// console.log(diaAnterior(1, 1, 2000))


// 18.Una función que se llame ultimoDiaDelMes que reciba día, mes y año y
// devuelva el último día del mes.


const ultimoDiaDelMes = (dia, mes, year) => new Date(year, mes, 0).getDate()
// console.log(ultimoDiaDelMes(2, 2, 2020)) 


// 19.Ejercicio 1: cree un array con todas las edades de los estudiantes de su
// clase. Itere el array utilizando un bucle while y luego imprima todas las
// edades en la consola.


const edades = [20, 18, 30, 45, 19, 32, 26]
function mostrarEdades(edades) {
    let i = 0
    while (i < edades.length) {
        console.log(edades[i]);
        i++
    }
}
// mostrarEdades(edades)


// 20.Ejercicio 2: Al ejercicio 1 agregue un condicional dentro del ciclo while
// para imprimir solo números pares. Cambie el ciclo para usar un ciclo
// "for" en lugar de un ciclo "while".
// Para los siguientes ejercicios, no puede ordenar su array. ¡Asegúrese
// de que su solución funcione para cualquier array que se pase!


function mostrarEdadesPares(edades) {
    for (let i = 0; i < edades.length; i++)
        if (edades[i] % 2 == 0) console.log(edades[i])
}
// mostrarEdadesPares(edades)


// 21.Ejercicio 3: escriba una función que reciba un array como parámetro e
// imprima el número más bajo de la array en la consola.


const imprimirMenor = edades => console.log(Math.min(...edades))
// imprimirMenor(edades)


// 22.Ejercicio 4: escriba una función que reciba un array como parámetro e
// imprima el número más grande de la array en la consola.


const imprimirMayor = edades => console.log(Math.max(...edades))
// imprimirMayor(edades)


// 23.Ejercicio 5: Escriba una función que reciba dos parámetros, un array y
// un índice. La función imprimirá el valor del elemento en la posición
// dada (basado en uno) en la consola. 


const imprimirIndice = (array, i) => (i >= array.length || i < 0) ? console.log('Error en el indice') : console.log(array[i])
// imprimirIndice(edades, 2)


// 24.Ejercicio 6: Escriba una función que reciba un array y solo imprima los
// valores que se repiten. Por ejemplo, dada la siguiente array e índice, la
// función imprimirá '6,23,33,100'.


let array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100]
function repetidos(array) {
    let ordenado = array.sort((a, b) => a - b)
    for (let i = 0; i < ordenado.length; i++)
        if (ordenado[i] == ordenado[i + 1]) console.log(ordenado[i])
}
// repetidos(array)


// 25.Ejercicio 7: escriba una función de JavaScript simple para unir todos los
// elementos de la siguiente array en una cadena.
//Debería ver lo siguiente en su consola: "Rojo", "Verde", "Blanco", "Negro"


myColor = ['Red', 'Green', 'White', 'Black'];
function concatenar1(array) {
    let cadena = ''
    array = array.map((aux) => `"${aux}", `)
    cadena = cadena.concat('', ...array)
    return cadena
}
const concatenar2 = array => ''.concat('', ...array.map((aux) => `"${aux}", `))
// console.log(concatenar2(myColor))


// 26.Ejercicio 8: escriba una función de JavaScript que invierta un número.
// Por ejemplo, si x = 32443, la salida debería ser 34423.


function invertir1(num) {
    cadena = num.toString()
    cadena = cadena.split('')
    cadena = cadena.reverse()
    cadena = cadena.join('')
    return parseInt(cadena)
}
const invertir2 = num => parseInt(num.toString().split('').reverse().join(''))
// console.log(invertir2(123456))


// 27.Ejercicio 9: escriba una función de JavaScript que devuelva una cadena
// en orden alfabético. Por ejemplo, si x = 'webmaster', la salida debería
// ser 'abeemrstw'. La puntuación y los números no se pasan en la
// cadena.


const ordenarAlfabeto = cadena => cadena.split('').sort().join('')
// console.log(ordenarAlfabeto('webmaster'))


// 28.Ejercicio 10: escriba una función de JavaScript que convierta la primera
// letra de cada palabra a mayúsculas. Por ejemplo, si x = "prince of
// persia", la salida debería ser "Prince Of Persia".


function capitalize(cadena) {
    cadena = cadena.split(' ')
    let mayus = cadena.map(palabra => palabra.substring(0, 1).toUpperCase())
    cadena = cadena.map(palabra => palabra.substring(1))
    for (let i = 0; i < cadena.length; i++)
        mayus[i] += cadena[i]
    mayus = mayus.join(' ')
    return mayus
}
function capitalize2(cadena) {
    cadena = cadena.split(' ')
    for (let i = 0; i < cadena.length; i++)
        cadena[i] = (cadena[i].substring(0, 1).toUpperCase() + cadena[i].substring(1))
    return cadena.join(' ')
}
// console.log(capitalize2('prince of persia'))


// 29.Ejercicio 11: escriba una función de JavaScript que busque la palabra
// más larga de una frase. Por ejemplo, si x = "Tutorial de desarrollo web",
// el resultado debería ser "Desarrollo"


function palabraMasLarga(cadena) {
    cadena = cadena.split(' ')
    let longitudes = []
    for (const palabra of cadena)
        longitudes.push(palabra.length)
    let max = Math.max(...longitudes)
    return '' + cadena.filter(palabra => palabra.length == max)
}
// console.log(palabraMasLarga('Tutorial de desarrollo web'))