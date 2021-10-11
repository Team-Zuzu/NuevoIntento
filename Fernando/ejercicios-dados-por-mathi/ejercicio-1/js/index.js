// Ejercicio 1. 
// Crear una función que reciba un string. La función debe analizar el string y si encuentra la palabra "mundo", debe reemplazarla por "fer". La función debe mostrar por pantalla el string.

// let frase = prompt("Ingrese una frase:")

// if (frase.includes("mundo")==true) {
//     frase=frase.replace("mundo","fer")
// }
// console.log(frase);

// Ejercicio 2.


// var frase = prompt("Ingrese una frase:")
// var puteadas = [
//     "puto",
//     "manco",
//     "troll",
//     "flamer",
//     "report"
// ]

// for (const puteada of puteadas) {
//     if (frase.includes(puteada)==true) {
//     frase=frase.replace(puteada,"*****")
// }
// }
// document.write(frase);

// Ejercicio 3

// Quiero que el programa vaya contando cuantas puteadas se van diciendo
// Y si llegás a 5 puteadas (o mas), quiero que aparezca en pantalla JUGADOR BANEADO (en mayusculas)
// let contInsultos=0  
// let frase = "hola"
// let puteadas = [
//     "puto",
//     "manco",
//     "troll",
//     "flamer",
//     "report"
// ]

// let jugador={
//     nombre:"Error404",
//     edad:30,
//     champ:"aSol",
//     linea:"jungla"
// }

// console.log(`Champ: ${jugador.champ} Línea: ${jugador.linea}`);

// while (frase != null) {
//     frase = prompt("Ingrese una frase:")
//     for (const puteada of puteadas) {
//         if (typeof(frase) == "string") {
//             if (frase.includes(puteada) == true) {
//                 contInsultos = contInsultos + 1;
//             }
//         }
//     }
//     if (contInsultos>=5) {
//         alert("Banneado por PUTO")
//         frase=null
//     }
// }
// document.write(contInsultos);
// console.log(puteadas);

//Ejercicio 4

personas = [
    {
        nombre: "Fernando0",
        apellido: "Gaspari0",
        genero: "Masculino0",
        email: "bliitzx@gmail.com0",
        contraseña: "blabla0",
        fotoPerfil: "imagen0",
        mostrarInfo(){
            console.log(this);
        }
    },
    {
        nombre: "Fernando1",
        apellido: "Gaspari1",
        genero: "Masculino1",
        email: "bliitzx@gmail.com1",
        contraseña: "blabla1",
        fotoPerfil: "imagen1",
        mostrarInfo(){
            console.log(this);
        }
    },
    {
        nombre: "Fernando2",
        apellido: "Gaspari2",
        genero: "Masculino2",
        email: "bliitzx@gmail.com2",
        contraseña: "blabla2",
        fotoPerfil: "imagen2",
        mostrarInfo(){
            console.log(this);
        }
    },
    {
        nombre: "Fernando3",
        apellido: "Gaspari3",
        genero: "Masculino3",
        email: "bliitzx@gmail.com3",
        contraseña: "blabla3",
        fotoPerfil: "imagen3",
        mostrarInfo(){
            console.log(this);
        }
    },
    {
        nombre: "Fernando4",
        apellido: "Gaspari4",
        genero: "Masculino4",
        email: "bliitzx@gmail.com4",
        contraseña: "blabla4",
        fotoPerfil: "imagen4",
        mostrarInfo(){
            console.log(this);
        }
    },
    {
        nombre: "Fernando5",
        apellido: "Gaspari5",
        genero: "Masculino5",
        email: "bliitzx@gmail.com5",
        contraseña: "blabla5",
        fotoPerfil: "imagen5",
        mostrarInfo(){
            console.log(this);
        }
    },
    {
        nombre: "Fernando6",
        apellido: "Gaspari6",
        genero: "Masculino6",
        email: "bliitzx@gmail.com6",
        contraseña: "blabla6",
        fotoPerfil: "imagen6",
        mostrarInfo(){
            console.log(this);
        }
    },
    {
        nombre: "Fernando7",
        apellido: "Gaspari7",
        genero: "Masculino7",
        email: "bliitzx@gmail.com7",
        contraseña: "blabla7",
        fotoPerfil: "imagen7",
        mostrarInfo(){
            console.log(this);
        }
    },
    {
        nombre: "Fernando8",
        apellido: "Gaspari8",
        genero: "Masculino8",
        email: "bliitzx@gmail.com8",
        contraseña: "blabla8",
        fotoPerfil: "imagen8",
        mostrarInfo(){
            console.log(this);
        }
    },
    {
        nombre: "Fernando9",
        apellido: "Gaspari9",
        genero: "Masculino9",
        email: "bliitzx@gmail.com9",
        contraseña: "blabla9",
        fotoPerfil: "imagen9",
        mostrarInfo(){
            console.log(this);
        }
    }
]

cad = `
<table>
<tr>
<th>Nombre</th>
<th>Apellido</th>
<th>Género</th>
<th>E-mail</th>
<th>Contraseña</th>
<th>Foto de Perfil</th>
</tr>
`

for (let i = 0; i < personas.length; i++) {

    cad = cad + `
    <tr onClick="personas[${i}].mostrarInfo();">
        <td>${personas[i].nombre}</td>
        <td>${personas[i].apellido}</td>
        <td>${personas[i].genero}</td>
        <td>${personas[i].email}</td>
        <td>${personas[i].contraseña}</td>
        <td><img src="${personas[i].fotoPerfil}" alt="foto de perfil"></td>
    </tr>
  `
}

document.getElementById("idtabla").innerHTML = cad

// for (const i in datos[5]) {           //muestra el valor de la clave del objeto.
//     console.log(datos[5][i]);
// }

// for (const objeto of datos) {
//     if (objeto.nombre=="Erika") {
//         console.log(objeto);
//     }
// }