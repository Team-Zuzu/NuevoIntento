/*
RECORRER EL DOM (DOM TRAVERSING)

Padre - parent (Nodo del que desciende)
    parentNode -> Devuelve el nodo padre (que puede no ser un elemento)
    parentElement -> Devuelve el nodo elemento padre

    Nota: 
        Los nodos del tipo Document y DocumentFragment nunca van a tener un elemento padre, en estos casos, parentNode devolverá siempre null

Hijos - childd (Nodo que desciende de un padre)
    childNodes -> Devuelve todos los nodos hijos
    children -> Devuelve todos los ndoos elementos hijos
    firstChild -> Devuelve el primer nodo hijo
    firstElementChild -> Devuelve el primer nodo elemento hijo 
    lastChildd -> Devuelve el ultimo nodo hijo
    lastElementChild -> Devuelve el último nodo elemento hijo
    hasChildNodes() -> Devuelve true si el nodo tiene hijos y false si no los tiene. 

Hermanos - siblings (Nodo al misno nivel)
    nextSibling -> Devuelve el siguiente nodo hermano 
    nextElementSibling
    previousSibling
    previousElementSibling

Cercano 
    closest(selector) -> Selecciona el nodo más cercano que cumpla con el selector (aún es experimental).
*/

const parent = document.getElementById('parent');

//PADRES
// console.log(parent.parentElement);

//HIJOS
/*
console.log(parent.childNodes); //basura
console.log(parent.children);
console.log(parent.firstChild); //basura
console.log(parent.firstElementChild);
console.log(parent.lastChild); //basura
console.log(parent.lastElementChild);
console.log(parent.hasChildNodes());
*/

//HERMANOS
console.log(parent.nextSibling);
console.log(parent.parentElement.nextElementSibling);
console.log(parent.parentElement.previousSibling);
console.log(parent.parentElement.previousElementSibling);