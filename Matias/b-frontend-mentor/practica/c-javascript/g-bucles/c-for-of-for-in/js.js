/*
FOR OF
    Simplifa el bucle for tradicional sin tener que darle el número de vueltas ni realizar un incremento 
    let names = ["Fer", "Mega", "Taby", "Morgan"];
    for(let name of names){
        console.log(name)
    }
    1º vuelta: Fer
    2º vuelta: Mega
    3º vuelta: Taby
    4º vuelta: Morgan

FOR IN
    for(let name in names){
        console.log(name)
    }
    1º vuelta: 0
    2º vuelta: 1
    3º vuelta: 2
    4º vuelta: 3
*/

let names = ["Fer", "Mega", "Taby", "Morgan"];

for (const name of names) {
    console.log(name);
}

for (const index in names) {
    console.log(index);
}

/*
BREAK y CONTINUE
    Break termina el bucle 
    Continue salta esa vuelta del bucle y continua con la siguiente
*/

for (let i = 0; i < names.length; i++) {
    if (names[i] === "Taby") {
        break;
    }
    console.log(names[i]);
}

for (let i = 0; i < names.length; i++) {
    if (names[i] === "Taby") {
        continue;
    }
    console.log(names[i]);
}