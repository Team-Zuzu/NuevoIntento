// 1. Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”.
// alert(`Hola mundo!`)

// 2. Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write).
// document.write('<h2>Hola mundo!</h2>')

// 3. Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
//document.write('3 + 5 =', 3 + 5);

// 4. Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”

// let nombre = prompt('¿Cuál es tu nombre?');
// document.write(`Hola Sr. ${nombre}`);

// 5. Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
// let num1 = parseInt(prompt('ingrese un número'));
// let num2 = parseInt(prompt('ingrese otro número'));
// console.log(`${num1} + ${num2} =`, (num1 + num2));

// 6. Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
// let num1 = parseInt(prompt('ingrese un número'));
// let num2 = parseInt(prompt('ingrese otro número'));
// (num1 > num2) ? document.write(`${num1} es mayor a ${num2}`) : document.write(`${num2} es mayor a ${num1}`);

// 7. Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
// numeros.push(parseInt(prompt('ingrese un número')));
// numeros.push(parseInt(prompt('ingrese otro número')));
// numeros.push(parseInt(prompt('ingrese otro número más')));
// document.write(`${numeros[0]}, ${numeros[1]} y ${numeros[2]} fueron los números ingresados. ${Math.max(...numeros)} es el mayor de ellos.`);

// 7b. Igual que la anterior pero se ingresan 100 números 
// let numeros = [];
// for (let i = 0; i < 100; i++) {
//     numeros[i]=Math.round(Math.random() * (100 - 1) + 1)
// }
// console.log(numeros);
// document.write(`${Math.max(...numeros)}, es el mayor de ellos.`);

// 8. Escribe un programa que pida un número y diga si es divisible por 2
// let num = prompt('Ingrese un número');
// (num % 2 == 0) ? document.write(`Es divisible por 2`) : document.write(`No es divisible por 2`);

// 9. Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
// let frase = prompt('ingrese una frase');
// const BuscadorDeAs = () => {
//     let cant = 0;
//     for (const letra of frase) if (letra == 'a' || letra == 'A') cant++;
//     return cant;
// }
// document.write(`La frase "${frase}" tiene ${BuscadorDeAs()} a`);

// 10. Escribe un programa que pida una frase y escriba las vocales que aparecen
// let frase = prompt('Ingrese una frase');
// const BuscadorDeVocales = () => {
//     let buscar = ['a', 'e', 'i', 'o', 'u'];
//     let vocalesEncontradas = [];
//     for (const letra of frase) {
//         for (const vocal of buscar) {
//             if (letra == vocal) {
//                 vocalesEncontradas.push(letra);
//             }
//         }
//     }
//     return vocalesEncontradas;
// }
// document.write(`La frase "${frase}" contiene las siguientes vocales: ${BuscadorDeVocales()}`);

// 11. Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales
// let frase = prompt('Ingrese una frase');
// const ContadorDeVocales = () => {
//     let buscar = ['a', 'e', 'i', 'o', 'u'];
//     let cantVocales = 0;
//     for (const letra of frase) {
//         for (const vocal of buscar) {
//             if (letra == vocal) {
//                 cantVocales++;
//             }
//         }
//     }
//     return cantVocales;
// }
// document.write(`La frase "${frase}" contiene ${ContadorDeVocales()} vocales`);

//12. Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales
// let frase = prompt('Ingrese una frase');
// const ContadorDeVocales = (num) => {
//     let cantVocales = [0, 0, 0, 0, 0];
//     for (const letra of frase) {
//         switch (letra) {
//             case 'a':
//                 cantVocales[0]++;
//                 break;
//             case 'e':
//                 cantVocales[1]++;
//                 break;
//             case 'i':
//                 cantVocales[2]++;
//                 break;
//             case 'o':
//                 cantVocales[3]++;
//                 break;
//             case 'u':
//                 cantVocales[4]++;
//                 break;
//         }
//     }
//     return cantVocales[num];
// }
// document.write(`La frase "${frase}" contiene: 
// <ul>
// <li>${ContadorDeVocales(0)} a</li>
// <li>${ContadorDeVocales(1)} e</li>
// <li>${ContadorDeVocales(2)} i</li>
// <li>${ContadorDeVocales(3)} o</li>
// <li>${ContadorDeVocales(4)} u</li>
// </ul>`);

// 13. Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
// const Divisible = (num) => {
//     if (num % 2 == 0) document.write('Es divisible por 2<br>');
//     if (num % 3 == 0) document.write('Es divisible por 3<br>');
//     if (num % 5 == 0) document.write('Es divisible por 5<br>');
//     if (num % 7 == 0) document.write('Es divisible por 7<br>');
//     else document.write('No es divisible por 2, 3, 5 ni 7')
// }
// Divisible(210);

// 14. Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay que decir todos por los que es divisible)
// Ya lo hice xD

// 15. Escribir un programa que escriba en pantalla los divisores de un número dado
// const Divisores = (num) => {
//     let radioDeBusqueda = Math.trunc(num / 2);
//     for (let i = 0; i <= radioDeBusqueda; i++) {
//         if (num % i == 0) document.write(`${i} y -${i} son divisores de ${num}<br>`);
//     }
//     document.write(`${num} es divisor de ${num}<br>`);
// }
// Divisores(12);

// 16. Escribir un programa que escriba en pantalla los divisores comunes de dos números dados
// const Divisores = (num) => {
//     let radioDeBusqueda = Math.trunc(num / 2);
//     let divisores = [];

//     for (let i = 0; i <= radioDeBusqueda; i++) {
//         if (num % i == 0) divisores.push(i);
//     }
//     divisores.push(num)

//     if (divisores.length == 2) document.write(`${num} es primo <br>`)

//     return divisores;
// }
// const DivisoresComunes = (num1, num2) => {

//     let divisores1 = Divisores(num1);
//     let divisores2 = Divisores(num2);

//     if (divisores1.length > divisores2.length) {
//         let aux = divisores2;
//         divisores2 = divisores1;
//         divisores1 = aux;
//     }

//     console.table(divisores1)
//     console.table(divisores2)

//     let divisoresComunes = [];
//     for (const i in divisores1) {
//         let esDivisor = divisores2.some((aux) => aux == divisores1[i]);
//         if (esDivisor) divisoresComunes.push(divisores1[i])
//     }

//     console.table(divisoresComunes)

//     if (divisoresComunes.length != 1) {
//         document.write(`Estos son los divisores comunes de ${num1} y ${num2}: `);
//         for (let i = 0; i < divisoresComunes.length; i++) {
//             document.write(` ${divisoresComunes[i]} `)
//         }
//     }
//     else document.write(`Los números ${num1} y ${num2} no tienen divisores comunes`)
// }
// DivisoresComunes(12, 24);

// 17. Escribir un programa que nos diga si un número dado es primo
// Lo hice en la anterior xD

// 18. Pide la edad y si es mayor de 18 años indica que ya puede conducir
// const EsMayorDeEdad = (edad) => {
//     (edad >= 18) ? document.write('Puede conducir') : document.write('No puede conducir')
// }
// EsMayorDeEdad(17)

//19. Pide una nota (número). Muestra la calificación según la nota:
// ● 0-3: Muy deficiente
// ● 3-5: Insuficiente
// ● 5-6: Suficiente
// ● 6-7: Bien
// ● 7-9: Notable
// ● 9-10: Sobresaliente
// const Calificacion = (nota) =>{
//     nota = parseInt(nota);
//     if(!isNaN(nota) && nota >= 0 && nota <= 10){
//         if(nota >= 0 && nota < 3) document.write('Muy deficiente');
//         else if(nota >= 3 && nota < 5) document.write('Insuficiente');
//         else if(nota >= 5 && nota < 6) document.write('Suficiente');
//         else if(nota >= 6 && nota < 7) document.write('Bien');
//         else if(nota >= 7 && nota < 9) document.write('Notable');
//         else if(nota >= 9 && nota <= 10) document.write('Sobresaliente');
//     }
//     else document.write('Error al ingresar la nota');
// }
// Calificacion(7);

// 20. Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión
// const CadenasDeTexto = () => {
//     let cadenas = ''
//     let ultimaEntrada;
//     do{
//         ultimaEntrada = prompt('Escribí algo divertido')

//         if(ultimaEntrada != null) cadenas += `${ultimaEntrada} - `

//     }while (ultimaEntrada != null);

//     //substring marca lo que se queda, o sea todo el texto salvo por los ultimos 3 caracteres
//     cadenas = cadenas.substring(0, cadenas.length - 3);

//     return cadenas;
// }
// document.write(CadenasDeTexto())

// 21. Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
// const SumarNumeros = () => {
//     let ultimaEntrada;
//     let sumatoria = 0;
//     let imprimir = '';
//     do {
//         ultimaEntrada = prompt('Ingrese un número');
//         if(ultimaEntrada != null){
//             if(isNaN(ultimaEntrada)){
//                 alert('Error al ingresar el número')
//             }
//             else{
//                 sumatoria += parseInt(ultimaEntrada);
//                 imprimir += `${ultimaEntrada} + `;
//             }
//         }
//     } while (ultimaEntrada != null);
//     document.write(imprimir.substring(0, imprimir.length - 3));
//     return sumatoria;
// }
// document.write(` = ${SumarNumeros()}`)

// 22. Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento Nacional de Identidad). El algoritmo para calcular la letra del dni es el siguiente:
// ● El número debe ser entre 0 y 99.999.999
// ● Debemos calcular el resto de la división entera entre el número y el número 23.
// ● Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes: (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
// ● Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// ● Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

// const DNI = () => {
//     let ultimaEntrada;
//     let cadena = '';
//     let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']
//     do {
//         ultimaEntrada = prompt('Ingrese un número de DNI')
//         if (ultimaEntrada != null) {
//             if (isNaN(ultimaEntrada)) {
//                 alert('Error al ingresar el DNI. Asegurese de no escribir puntos ni comas')
//             }
//             else if (!(ultimaEntrada > 0 && ultimaEntrada < 99999999)) {
//                 alert('Error al ingresar el DNI. El número parece ser real.')
//             }
//             else {
//                 let dni = parseInt(ultimaEntrada);
//                 let resto = dni % 23;
//                 console.log(`resto del 0 al 22: ${resto}`);
//                 cadena += `Al DNI ${dni} le corresponde la letra ${letras[resto]}.<br>`
//             }
//         }
//     } while (ultimaEntrada != null);
//     return cadena;
// }
// document.write(DNI());

// 23. Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma:
// 1
// 22
// 333
// 4444
// 55555
// 666666

// const PiramideSuperiorIzquierda = () => {
//     let cadena = ''
//     for (let j = 1; j <= 30; j++) {
//         for (let i = 0; i < j; i++) {
//             (j < 10) ? cadena += `0${j}` : cadena += j;
//         }
//         cadena += '<br>';
//     }
//     return cadena;
// }
// document.write(PiramideSuperiorIzquierda())

// 24. Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario de la siguiente forma:
// 666666
// 55555
// 4444
// 333
// 22
// 1

// const PiramideSuperiorIzquierda = (num) => {
//     let cadena = ''
//     for (let j = 1; j <= num; j++) {
//         for (let i = 0; i < num - (j - 1); i++) {
//             (j < 10) ? cadena += `0${j}` : cadena += j;
//         }
//         cadena += '<br>';
//     }
//     return cadena;
// }
// document.write(PiramideSuperiorIzquierda(9))

// 25. Un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :
// 1
// 2
// 3
// 4 (Múltiplo de 4)
// 5
// ————————————————————
// 6
// 7
// 8 (Múltiplo de 4)
// 9 (Múltiplo de 9)
// 10

// const PeticionRaraxD = () => {
//     cadena = '';
//     for (let i = 1; i <= 500; i++) {
//         cadena += i;
//         if (i % 4 == 0) {
//             cadena += ' (Múltiplo de 4)'
//         }
//         if (i % 9 == 0) {
//             cadena += ' (Múltiplo de 9)'
//         }
//         cadena += '<br>'
//         if (i % 5 == 0) {
//             cadena += '<hr>'
//         }
//     }
//     return cadena;
// }
// document.write(PeticionRaraxD());

// 26. Solicitar números hasta que ingrese -1 y decir que número es el mayor de los ingresados
// const NumeroDeCierre = () => {
//     let entrada = parseInt(prompt('ingrese un número'))
//     let maximo;
//     if (entrada != -1) {
//         maximo = entrada;
//         while (entrada != -1) {
//             entrada = prompt('ingrese otro un número')
//             maximo = (entrada > maximo) ? entrada : maximo;
//         }
//     }
//     return (isNaN(maximo)) ? 'No se ingresaron números' : maximo
// }
// document.write(NumeroDeCierre())

// 27. Hacer una piramide pero con estilo de línea monospace
// const PiramideMonoespaciada = () => {
//     let cadena = '<p style = "font-family: Courier New;">'
//     for (let j = 1; j <= 30; j++) {
//         for (let i = 0; i < j; i++) {
//             (j < 10) ? cadena += `0${j}` : cadena += j;
//         }
//         cadena += '<br>';
//     }
//     cadena += '</p>'
//     return cadena;
// }
// document.write(PiramideMonoespaciada())

// 28. Comprobar si un número es divisible por 2, 3, 5 y 7 (modo inteligente)
// const DesafioDeFer = (num) => {
//     let cadena = ''
//     if (num % 2 == 0 || num % 3 == 0 || num % 5 == 0 || num % 7 == 0) {
//         cadena = 'Es divisible por '
//         if (num % 2 == 0) cadena += 2 + ', '
//         if (num % 3 == 0) cadena += 3 + ', '
//         if (num % 5 == 0) cadena += 5 + ', '
//         if (num % 7 == 0) cadena += 7 + ', '
//         cadena = cadena.substring(0, cadena.length - 2) + '.'
//     }
//     else cadena = 'No es divisible por nada >:((('
//     return cadena;
// }
// console.log(DesafioDeFer(210));

// 29. Pedir un número y pedir divisores. Comprobar si el número es divisible por los divisores. 
// const TratamientoDeCadenas = (cadena) => {
//     let i = 0;
//     while (!cadena.endsWith(' ', i)) {
//         i++;
//     }
//     let numero = cadena.slice(-i)
//     cadena = cadena.substring(0, cadena.length - (i + 2))
//     cadena += ' y ' + numero + '.'
//     return cadena
// }
// const DesafioMati = (divisor, divisores) => {

//     if(divisor != 0 && !isNaN(divisor)){
//         let cadena = 'No es divisible por nada >:((('
//         let pos = 0
//         while (cadena == 'No es divisible por nada >:(((' && pos < divisores.length) {
//             if (divisor % divisores[pos] == 0) cadena = 'Es divisible por '
//             pos++
//         }
//         if (cadena == 'Es divisible por ') {
//             for (let i = 0; i < divisores.length; i++) {
//                 if (divisor % divisores[i] == 0) cadena += divisores[i] + ', '
//             }
//             cadena = cadena.substring(0, cadena.length - 2)
//             cadena = TratamientoDeCadenas(cadena)
//         }
//         return cadena;
//     }
//     else return 'Querés dividir por cero o estás ingresando texto?? xD'
// }
// let num = 420
// const divisores = [2, 3, 5, 7, 210]
// console.log(DesafioMati(num, divisores))

// 30. Buscar números primos de forma epica
// const Primos = (num) => {
//     let cadena
//     if (num > 0) {
//         let divisorEncontrado = false
//         let i = 2
//         while (i < num && !divisorEncontrado) {
//             if (num % i == 0) {
//                 divisorEncontrado = true
//                 cadena = 'no es primo'
//             }
//             i++;
//         }
//         if (!divisorEncontrado) cadena = 'es primo'
//     }
//     else {
//         cadena = 'el numero debe ser mayor de 0'
//     }
//     return cadena
// }
// console.log(Primos(4));

// 31. Arreglar el algoritmo de Fer 
// let num = 11;
// let esPrimo = false
// for (let i = 0; i < num; i++) {
//     if(num % i != 0 && num != 1 && num != i){
//         // es primo
//         esPrimo = true
//     }
//     else{
//         // no es primo
//         esPrimo = false
//     }
// }
// if(esPrimo){
//     console.log('Es primo');
// }

// 32. Crear un programa que pueda definir la estación del año de acuerdo a un día y un mes dados.
// let dia = 21;
// let mes = 9;
// let cadena = `El día ${dia} del ${mes} es `
// const Asignacion = (num) => {
//     if (num < 0) {
//         if (mes < 3) cadena += 'verano'
//         else if (mes < 6) cadena += 'otoño'
//         else if (mes < 9) cadena += 'invierno'
//         else if (mes < 12) cadena += 'primavera'
//     }
//     else {
//         if (mes < 3) cadena += 'primavera'
//         else if (mes < 6) cadena += 'verano'
//         else if (mes < 9) cadena += 'otoño'
//         else if (mes < 12) cadena += 'invierno'
//     }
// }

// if (mes % 3 == 0) 
//     if (dia < 21) Asignacion(1)
//     else Asignacion(-1)
// else Asignacion(1)
// document.write(cadena);

// OTRA FORMA

// let dia = 21;
// let mes = 9;
// fecha = mes + dia / 100;
// if (fecha < 3.21) document.write("verano");
// else if (fecha < 6.21) document.write("otoño");
// else if (fecha < 9.21) document.write("invierno");
// else if (fecha < 12.21) document.write("primavera");
// else document.write("verano");

// 33. Escribir la tabla del 2. Por ejemplo. 
// 2 x 1 = 2 
// 2 x 2 = 4
// 2 x 3 = 6

// for (let i = 1; i <= 10; i++) {
//     let cadena = '2 x ' + i + ' = ' + (i * 2) + '<br>'
//     document.write(cadena)
// }