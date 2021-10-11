//Actividad práctica 1

//Ejercicio 1
// alert("Hello Word");

//Ejercicio 2
// document.write("Hello Word");

//Ejercicio 3
// document.write(" ", 3 + 5);

//Ejercicio 4
// let nombre = prompt ("Ingrese su nombre", "");
// document.write(" Hola " + nombre);

//Ejercicio 5
// var num1 = parseInt(prompt ("Elija un número", ""));
// var num2 = parseInt(prompt ("Elija otro número", ""));
// document.write (" La suma de sus números es ", num1 + num2);

//Ejercicio 6
// var mayor = parseInt (prompt ("Elija un número", ""));
// var menor = parseInt (prompt ("Elija otro número", ""));
// if (mayor>menor) {
//     console.log(mayor);
// }
// console.log(menor);

//Ejercicio 7
// var primero = parseInt (prompt ("Elija un número", ""));
// var segundo = parseInt (prompt ("Elija otro número", ""));
// var tercero = parseInt (prompt ("Elija otro número", ""));
// console.log(Math.max(primero, segundo, tercero));

//Ejercicio 8
// var divisible = parseInt (prompt ("Elija un número", ""));
// if (divisible%2 == 0) {
//     console.log(divisible, " es divisible por 2.");
// }
// else{
//     console.log(divisible, "no es divisible por 2.");
// };

//Ejercicio 9
// var frase = prompt ("Escriba una frase", "");
// var a = 0;
//Por cada letra de frase.
//Por cada letra de frase.
//Por cada letra de frase.
// for (const letra of frase) {
//     if (letra == "a") {
//     a = a + 1;
//     }
// };
// console.log("La frase tiene ", a, " letras A");

//Ejercicio 10
// var frase = prompt ("Escriba una frase", "");
// for (const letra of frase) {
//     if (letra=="a") {
//         console.log(letra);
//     }
//     else if (letra=="e") {
//         console.log(letra);
//     }
//     else if (letra=="i") {
//         console.log(letra);
//     }
//     else if (letra=="o") {
//         console.log(letra);
//     }
//     else if (letra=="u") {
//         console.log(letra);
//     }
// }

//Ejercicio 11
// var frase = prompt ("Escriba una frase", "");
// var vocales = 0;
// for (const letra of frase) {
//     if (letra=="a" || letra=="e" || letra=="i" || letra=="o" || letra=="u") {
//         vocales += 1;
//     }
// }
// console.log("La frase tiene ", vocales, " vocales.");

//Ejercicio 12
// var frase = prompt ("Escriba una frase", "");
// var a = 0;
// var e = 0;
// var i = 0;
// var o = 0;
// var u = 0;
// for (const letra of frase) {
//     if (letra=="a") {
//         a+=1;
//     }
//     else if (letra=="e") {
//         e+=1;
//     }
//     else if (letra=="i") {
//         i+=1;
//     }
//     else if (letra=="o") {
//         o+=1;
//     }
//     else if (letra=="u") {
//         u+=1;
//     }
// }

// console.log("A= " + a + ", E= " + e + ", I= " + i + ", O= " + o + ", U= " + u);

//Ejercicio 13
// var num = parseInt( prompt ("Escriba un número", ""));

// if (num%2==0) {
//     console.log(num + " es divisible por 2.");
// }
// else if (num%3==0) {
//     console.log(num + " es divisible por 3.");
// }
// else if (num%5==0) {
//     console.log(num + " es divisible por 5.");
// }
// else if (num%7==0) {
//     console.log(num + " es divisible por 7.");
// }
// else {
//     console.log(num + "  no es divisible por 2, 3, 5 ni 7.");
// }

//Ejercicio 14
// var num = parseInt(prompt("Escriba un número", ""));

// if (num % 2 == 0 || num % 3 == 0 || num % 5 == 0 || num % 7 == 0) {
//     if (num % 2 == 0) {
//         console.log(num + " es divisible por 2");
//     }
//     if (num % 3 == 0) {
//         console.log(num + " es divisible por 3");
//     }
//     if (num % 5 == 0) {
//         console.log(num + " es divisible por 5");
//     }
//     if (num % 7 == 0) {
//         console.log(num + " es divisible por 7");
//     }
// }
// else {
//     console.log(num + " no es divisible por 2, 3, 5 ni 7.");
// }

//Ejercicio 15
// var num = parseInt(prompt("Escriba un número", ""));
// for (let index = 1; index < num; index++) {
//     if (num % index == 0) {
//         console.log(num + " es divisor de " + index);
//     }
// }

//Ejercicio 16
// var num = parseInt(prompt("Escriba un número", ""));
// var num1 = parseInt(prompt("Escriba un número", ""));
// for (let index = 1; index <= num; index++) {
//     if (num % index == 0) {
//         for (let index1 = 1; index1 <= num1; index1++) {
//             if (num1 % index == 0 && num1 % index1 == 0) {
//                 console.log(num + " y " + num1 + " son divisores de " + index);
//             }
//         }
//     }
// }

//Ejercicio 17 (Mostrar en consola si el numero ingresado es primo (sin tener en cuenta la division por 1 ni por el mismo numero))
// var num = parseInt(prompt("Escriba un número", ""));
// var primo=true;
// Este bucle for busca la excepción de la variable booleana primo.
// for (let i = 2; i <= (num-1); i++) {
//     if (num % i == 0) {
//         primo=false
//     }
//     else {
//     }
// }
// if (primo==true) {
//     console.log("Es primo.");
// }

//Ejercicio 18
// var num = parseInt(prompt("Escriba un número", ""));
// if (num>=18) {
//     console.log("Ya podés conducir");
// }

//Ejercicio 19
// var num = parseInt(prompt("Escriba un número", ""));
// if (num >= 0 && num < 3) {
//     console.log("Nota: Muy deficiente");
// }
// if (num >= 3 && num < 5) {
//     console.log("Nota: Insuficiente");
// }
// if (num >= 5 && num < 6) {
//     console.log("Nota: Suficiente");
// }
// if (num >= 6 && num < 7) {
//     console.log("Nota: Bien");
// }
// if (num >= 7 && num < 9) {
//     console.log("Nota: Notable");
// }
// if (num >= 9 && num <= 10) {
//     console.log("Nota: Sobresaliente");
// }

//Ejercicio 20
// var frase="";
// var frases="";
// while (frase!=null) {
//     var frase = prompt("Escriba una frase", "");
//     if (frase!=null) {
//         var frases=( frases + " - " + frase)
//     }
// }
// console.log(frases);

//Ejercicio 21
// var num=0;
// var nums=0;
// while (num!=null) {
//     var num = prompt("Escriba un número", "");
//     if (num!=null && !isNaN(num)) {
//         num=parseInt(num);
//         var nums=(nums + num)
//     }
//     else if (isNaN(num)){
//         alert("No es un número")
//     }
// }
// console.log(nums);

//Ejercicio 22
// var dni=0;
// var num=0;
// var numi=0;
// while (dni!=null) {
//     var dni = prompt("Escriba su D.N.I");
//     if (dni!=null && dni<=99999999) {
//         for (let i = 0; i <= 22; i++) {
//             dni=parseInt(dni);
//             numi=dni%i;
//         }
//         if (numi==0) {
//             console.log("T");
//         }
//         if (numi==1) {
//             console.log("R");
//         }
//         if (numi==2) {
//             console.log("W");
//         }
//         if (numi==3) {
//             console.log("A");
//         }
//         if (numi==4) {
//             console.log("G");
//         }
//         if (numi==5) {
//             console.log("M");
//         }
//         if (numi==6) {
//             console.log("Y");
//         }
//         if (numi==7) {
//             console.log("F");
//         }
//         if (numi==8) {
//             console.log("P");
//         }
//         if (numi==9) {
//             console.log("D");
//         }
//         if (numi==10) {
//             console.log("X");
//         }
//         if (numi==11) {
//             console.log("B");
//         }
//         if (numi==12) {
//             console.log("N");
//         }
//         if (numi==13) {
//             console.log("J");
//         }
//         if (numi==14) {
//             console.log("Z");
//         }
//         if (numi==15) {
//             console.log("S");
//         }
//         if (numi==16) {
//             console.log("Q");
//         }
//         if (numi==17) {
//             console.log("V");
//         }
//         if (numi==18) {
//             console.log("H");
//         }
//         if (numi==19) {
//             console.log("L");
//         }
//         if (numi==20) {
//             console.log("C");
//         }
//         if (numi==21) {
//             console.log("K");
//         }
//         if (numi==22) {
//             console.log("E");
//         }

//     }
//     else if (isNaN(dni)){
//         alert("El número no corresponde.");
//     }
//     else if (isNaN(dni)==NaN) {
//         dni=null;
//     }
// }

//Ejercicio 23
// for (let i = 0; i <= 30; i++) {
//     document.write("<br>")
//     for (let j = 0; j < i; j++) {
//         document.write(i)
//     }
// }

//Ejercicio 24
// var num = prompt("Escriba un número");
// for (let i = 1; i <= num; i++) {
//     document.write("<br>")
//     for (let j = num; j >= i; j--) {
//         document.write(num)
//     }
// }

//Ejercicio 25
// for (let i = 1; i <= 500; i++) {
//         console.log(i);
//         if (i%4==0) {
//             console.log("Múltiplo de 4");
//         }
//         if (i%9==0) {
//             console.log("Múltiplo de 9");
//         }
//         if (i%5==0) {
//             console.log("-------------------");
//         }
// }

//Actividad práctica 2

//Ejercicio 1
// let num=25;

// function repetir(num) {
//     for (let i = 0; i < num; i++) {
//         console.log("Bienvenidos al curso Full Stack");
//     }
// }
// repetir(num);

//Ejercicio 2
// let num1=10;
// let num2=25;

// function max(num1,num2) {
//     if (num1>num2) {
//         console.log(num1 + " es mayor que " + num2);
//     }
//     else {
//         console.log(num2 + " es mayor que " + num1);
//     }
// }
// max(num1, num2);

//Ejercicio 3
// let num1=7;
// let num2=10;
// let num3=8;

// function promedio3(num1,num2,num3) {
//     let promedio=(num1+num2+num3)/3;
//     return promedio;
// }

// console.log(promedio3(num1,num2,num3));

//Ejercicio 4
// function promedioNotas() {
//     let num = 0;
//     let cont = 0;
//     let promedio = 0;
//     let numtotal = 0;
//     while (num >= 0 || isNaN(num)==true) {
//         num = parseInt(prompt("Escriba su nota"));
//         if (typeof num == 'number' && num>=0) {
//             cont = cont + 1;
//             numtotal = numtotal + num;
//         }
//     }
//     promedio=numtotal/cont;
//     return promedio;
// }
// console.log(promedioNotas());
function siguiente(num) {
    total = num + 1
    return total;
}
// console.log(siguiente(10));

//Ejercicio 5
function doble(num) {
    total = num * 2
    return total;
}
// console.log(doble(10));

//Ejercicio 6
function cuadrado(num) {
    total = num * num
    return total;
}
// console.log(cuadrado(10));

//Ejercicio 7
function imprimirValores(num) {
    console.log("Siguiente: " + siguiente(num));
    console.log("Doble: " + doble(num));
    console.log("Cuadrado: " + cuadrado(num));
}
// imprimirValores("25");

//Ejercicio 8
function imprimirElDobleDelSiguiente(num) {
    console.log(doble(siguiente(num)));
    return num;
}
// imprimirElDobleDelSiguiente(100);

//Ejercicio 9
function imprimirElDobleDelSiguienteAlCuadrado(num) {
    total = (cuadrado(doble(siguiente(num))));
}
// console.log(imprimirElDobleDelSiguienteAlCuadrado(100));

//Ejercicio 10
function perimetro(lado) {
    let total = lado * 4
    return total;
}
// console.log(perimetro(10));

//Ejercicio 11
function superficie(lado) {
    total = lado * lado;
    return total;
}
// console.log(superficie(10));

//Ejercicio 12
function circunferencia(radio) {
    total = (Math.PI * radio * 2);
    return total;
}
// console.log(circunferencia(20));

//Ejercicio 13
function area(radio) {
    total = Math.PI * (radio ** 2);
    return total;
}

// console.log(area(8));

//Ejercicio 14
function diasMes(mes) {
    if (mes >= 1 || mes <= 12) {
        switch (mes) {
            case 1:
                console.log("Enero tiene 31 días");
                break;

            case 2:
                console.log("Febrero tiene 28 días");
                break;
            case 3:
                console.log("Marzo tiene 31 días");
                break;
            case 4:
                console.log("Abril tiene 30 días");
                break;
            case 5:
                console.log("Mayo tiene 31 días");
                break;
            case 6:
                console.log("Junio tiene 30 días");
                break;
            case 7:
                console.log("Julio tiene 31 días");
                break;
            case 8:
                console.log("Agosto tiene 31 días");
                break;
            case 9:
                console.log("Septiempre tiene 30 días");
                break;
            case 10:
                console.log("Octubre tiene 31 días");
                break;
            case 11:
                console.log("Noviembre tiene 30 días");
                break;
            case 12:
                console.log("Diciembre tiene 31 días");
                break;
        }
    }
}
// diasMes(1);

//Ejercicio 15
function bisiesto(año) {
    if (año % 4 == 0) {
        console.log(`El año ${año} fué bisiesto.`);
    }
    else {
        console.log(`El año ${año} no fué bisiesto.`);
    }

}
// bisiesto(2020);

//Ejercicio 16
function diasMes(dia, mes, año) {
    if (mes >= 1 || mes <= 12) {
        switch (mes) {
            case 1:
                console.log("Enero tiene 31 días");
                break;

            case 2:
                if (año % 4 == 0) {
                    console.log("Febrero tiene 29 días");
                }
                else {
                    console.log("Febrero tiene 28 días");
                }
                break;
            case 3:
                console.log("Marzo tiene 31 días");
                break;
            case 4:
                console.log("Abril tiene 30 días");
                break;
            case 5:
                console.log("Mayo tiene 31 días");
                break;
            case 6:
                console.log("Junio tiene 30 días");
                break;
            case 7:
                console.log("Julio tiene 31 días");
                break;
            case 8:
                console.log("Agosto tiene 31 días");
                break;
            case 9:
                console.log("Septiempre tiene 30 días");
                break;
            case 10:
                console.log("Octubre tiene 31 días");
                break;
            case 11:
                console.log("Noviembre tiene 30 días");
                break;
            case 12:
                console.log("Diciembre tiene 31 días");
                break;
        }
    }
}
// diasMes(15,11,1954);

//Ejercicio 17
function diaAnterior(dia, mes, año) {
    total = dia - 1;
    return total;
}
// console.log(diaAnterior(1, 7, 1991));

//Ejercicio 18
// IGUAL AL EJERCICIO 16

//Ejercicio 19
// let edades=[
//     18,
//     22,
//     30,
//     18,
//     22,
//     22,
//     18,
//     30,
//     18,
//     30,
//     30,
// ]
// let i=0;
// while (i<edades.length) {
//     console.log(edades[i]);
//     i++;
// }

//Ejercicio 20
// let edades=[
//     18,
//     22,
//     30,
//     41,
//     18,
//     22,
//     41,
//     22,
//     18,
//     41,
//     17,
//     41,
//     30,
//     18,
//     30,
//     41,
//     30,
//     41,
// ]

// for (let i = 0; i < edades.length; i++) {
//     if (edades[i]%2==0) {
//         console.log(edades[i]);
//     }
// }

//Ejercicio 21
// let edades=[
//     18,
//     22,
//     30,
//     41,
//     18,
//     22,
//     41,
//     22,
//     18,
//     41,
//     17,
//     41,
//     30,
//     18,
//     30,
//     41,
//     30,
//     41,
// ]
function arrayMin(edades) {
    edadMin = 1000;
    for (let i = 0; i < edades.length; i++) {
        if (edadMin > edades[i]) {
            edadMin = edades[i]
        }
    }
    console.log(edadMin);
}
// arrayMin(edades)
// console.log(Math.min(...edades))

//Ejercicio 22
// console.log(Math.max(...[23,47,9,54,99,2]))

//Ejercicio 23
function posArray(array, indice) {
    console.log(array[indice]);
}
// posArray([25, 30,16,99], 2)

//Ejercicio 24
// let num=0;
function repetidos(array) {
    array = array.sort((a, b) => a - b)
    console.log(array);
    for (let i = 0; i < array.length; i++) {
        if (array[i] == array[i + 1]) {
            console.log(array[i]);
        }
    }
}

// repetidos([3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100,11]);

//Ejercicio 25
let myColor = ["Red", "Green", "White", "Black"];
function concatenarArray(myColor) {
    let arrayConcatenado = "";
    for (array of myColor) {
        arrayConcatenado = arrayConcatenado + array + ", ";
    }
    // console.log(`"${arrayConcatenado}"`);
}
concatenarArray(myColor);

//Ejercicio 26
function invertirNum(num) {
    num = num.toString();
    num = num.split("");
    num = num.reverse();
    num = num.join("");
    num = parseInt(num);
    console.log(num);
}
// invertirNum(25111991);

//Ejercicio 27
function ordenar(palabra) {
    palabra = palabra.split("");
    palabra = palabra.sort();
    palabra = palabra.join("");
    console.log(palabra);
}
// ordenar("webmaster");

//Ejercicio 28
function letraCapital(frase) {
    let letraCapital=[];
    frase = frase.split(" ");
    for (let i = 0; i < frase.length; i++) {
        letraCapital[i] = frase[i].substring(0, 1).toUpperCase();
        frase[i]=frase[i].substring(1);
        frase[i]=letraCapital[i] + frase[i]
    }
    frase=frase.join(" ");
}
// letraCapital("prince of persia")

//Ejercicio 29
function palabraLarga(frase) {
    let contPalabra=[];
    let palabraMayorNumLetras;
    let palabraMayor;
    frase=frase.split(" ");
    for (let i = 0; i < frase.length; i++) {
        contPalabra[i]=frase[i].length;
    }
    palabraMayorNumLetras=Math.max(...contPalabra);
    palabraMayor=frase.filter( word => word.length >= palabraMayorNumLetras);
    palabraMayor=palabraMayor.join(", ");
    console.log(palabraMayor);
}
// palabraLarga("hola mathiulito como estas?");