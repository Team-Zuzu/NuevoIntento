class Libro {
    constructor(titulo, autor, año, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
        this.genero = genero;
    }
    resumen() {
        return `${this.titulo} de ${this.autor}, publicado en el año ${this.año} pertenece al género ${this.genero}`;
    }
}

//6. Validar que los campos no se introduzcan vacíos 
function NoEmpy(i, whatIs) {
    let aux;
    do {
        aux = prompt(`Introduzca el ${whatIs} del ${i + 1}º libro`);
    } while (aux == '');
    return aux;
}

//7. Validar que el año sea un número y que tenga 4 digitos
function IsNumber(i) {
    let aux;
    do {
        aux = prompt(`Introduzca el año de publicación del ${i + 1}º libro`);
    } while ((aux.length >= 1 && aux.length <= 4) == false || isNaN(aux));
    return aux;
}

//8. Validar que el genero sea: aventuras, terror o fantasía
function SpecificGender(i) {
    let aux;
    do {
        aux = prompt(`Introduzca el genero del ${i + 1}º libro`);
    } while ((aux == 'Aventura' || aux == 'Terror' || aux == 'Fantasía') == false);
    return aux;
}

//9. Crear una función que muestre todos los libros.
function MostrarLibros() {
    for (let i = 0; i < libros.length; i++) {
        console.log(libros[i].resumen());
    }
}

//10. Crear una funcion que muestre todos los autores ordenados alfabeticamente. 
function AuthorsOrderedAlphabetically() {
    let order = [];
    for (let i = 0; i < libros.length; i++) {
        order[i] = libros[i].autor;
    }

    let aux;
    for (let j = 0; j < order.length -1; j++) {
        for (let i = 0; i < order.length -1; i++) {
            if (order[i] > order[i + 1]) {
                aux = order[i + 1];
                order[i + 1] = order[i];
                order[i] = aux;
            }
        }    
    }

    for (let i = 0; i < order.length; i++) {
        console.log(order[i]);
    }
}

//11. Crear una funcion que pieda genero y muestre la informacion de los libros que pertenezcan a ese genero usando un metodo
function ShowGender() {
    let aux;
    do {
        aux = prompt('¿Que genero te gustaría leer? Opciones: Terror, Aventura, Fantasía');
    } while ((aux == 'Aventura' || aux == 'Terror' || aux == 'Fantasía') == false);

    for (let i = 0; i < libros.length; i++) {
        if (libros[i].genero == aux) {
            console.log(libros[i].resumen());
        }
    }
}

//START

let libros = [];
let cantLibros = 1;

libros.push(new Libro('Así habló Zaratustra', 'Friedrich Nietzsche', 1883, 'Fantasía'));
libros.push(new Libro('Mi planta de naranja lima', 'José Mauro de Vasconcelos', 1968, 'Fantasía'));
libros.push(new Libro('La llamada de Cthulhu', 'H. P. Lovecraft', 1928, 'Terror'));
libros.push(new Libro('El alquimista', 'Paulo Coelho', 1988, 'Aventura'));

for (let i = 0; i < cantLibros; i++) {

    const auxLibro = new Libro(
        NoEmpy(i, 'título'),
        NoEmpy(i, 'autor'),
        IsNumber(i),
        SpecificGender('genero')
    );

    libros.push(auxLibro)
}

console.log('Este es el catalogo de libros:');
MostrarLibros();
console.log('Estos son los autores ordenados alfabeticamente:');
AuthorsOrderedAlphabetically();
console.log('Estos libros pueden gustarte:');
ShowGender();