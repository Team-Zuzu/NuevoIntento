/*
OBJETOS
    Son estrucutras de datos que representan propiedades, valores y acciones que puede realizar el objeto 
    Todos los objetos tienen propiedades o atributos y comportamientos o acciones representados por partes de clave (key) : valor (value)
        ej:
        const computer = {
            screenSize = 17,
            model: 'MacBook PRO'
        }
        const table = {
            material: 'wood',
            width: 160,
            height: 110
        }
    Para acceder las propiedades y acciones del objeto se utiliza la nomenclatura del punto
        ej:
        const person = {
            name: 'Mega',
            age: 28,
            sons: ['Taby', Morgan']
        }

        De esta forma podemos acceder al objeto: 
        console.log(person.name);
        console.log(person.age);
        console.log(person.sons[0]);
        console.log(person.sons[1]);

        También podemos acceder al objeto utilizando un bucle: 
        for(const key in person){
            console.log(key);
        }
        Esto va a imprimir: name - age - sons.
        
        for(const key in person){
            console.log(person[key]);
        }
        Esto va a imprimir: Mega - 28 - Taby - Morgan.
*/

const person = {
    name: 'Mega',
    age: 28,
    sons: ['Taby', 'Morgan', 'Stevie', 'Mufasa', 'Amy', 'Tyson']
}

console.log(person);

//Estas dos son formas de acceder al valor de la variable "name"
console.log(person.name);
console.log(person['name']);

//de esta forma accedemos a las CLAVES del objeto
for (const key in person) {
    console.log(key);
}

//de esta forma accedemos a los VALORES
for (const key in person) {
    console.log(person[key]);
}

//
for (const son of person.sons) {
    console.log(son);
}

console.log(`Hola ${person.name}. Tienes ${person.age}. Tus hijos se llaman ${person.sons.join(', ')}`);