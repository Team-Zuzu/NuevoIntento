/*
PROGRAMACIÓN ORIENTADA A OBJETOS
    Es un paradigma de programación que actualiza la forma de programar. 
    Algunos conceptos fundamentales son: 
        Clase
        Herencia
        Objeto
        Método
        Evento
    Hasta ahora, si queríamos crear objetos "persona" debíamos hacer algo así:
    const persona1 ={
        nombre: 'Juan',
        apellido: 'García',
        edad 27
    };
    Sin embargo, la forma correcta de crear objetos es mediante clases. 
    
CLASES - PROPIEDADES
    
    Las clases son "plantillas" que se utilizan para crear objetos iguales. 
    Cuando creamos un objeto, a esa acción se le denomina INSTANCIAR un objeto. 
    Las clases necesitan una función constructora. Estas funciones son llamadas cada vez que querramos instanciar un objeto.
        ej: Crear clase "persona":
        class Persona{ //el nombre de la clase empieza con mayuscula
            constructor(nombre, apellido, edad){
                this.nombre = nombre;
                this.apellido = apellido;
                this.edad = edad
            }
        }
        Nota: Se le puede asignar propiedades que no estén en los parametros pero siempre utilizando this para hacer referencia al objeto.
            ie: 
            this.datos = `${nombre} ${apellido} ${edad}`

CLASES - METODOS

    Los objetos pueden tener funciones asociadas a él. En ese caso se las denominan METODOS. Estas se ubican dentro de la case pero fuera del constructor.
        ej:
        saludar() {
            return `Hola, me llamo ${this.nombre} y tengo ${this.edad};`;
        }

CREAR OBJETOS

    Para crear un objeto debemos utilizar la palabra reservada "new" y el nombre de la clase que queremos utilizar.
        ie: 
        const juan = new Persona('Juan', 'García', 23);
    Una vez instanciado el objeto podremos acceder a sus propuedades y métodos utilizando la nomenclatura del punto o buscando su propiedad en el objeto. 
        ej1: nomenclatura del punto
        juan.nombre;
        juan.apellido;
        juan.edad;
        juan.datos;
        juan.saludar();
        ej2: buscando su propiedad
        juan['nombre']
        juan['apellido']
        juan['edad']
        juan['datos']
        juan['saludar']()
*/

class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.datos = `Me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`;
    }
    saludar(){
        return `Me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`
    }
}

const juan = new Persona('Juan', 'García', 25);
const marta = new Persona('Marta', 'García', 35);

console.log(juan);
console.log(marta.saludar());