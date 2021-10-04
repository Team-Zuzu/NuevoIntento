/*
INSERTAR Y ELIMINAR ELEMENTOS

    parent.insertBefore(newElement, referenceElement) -> Insertar un elemento antes del elemento de referencia

    SOPORTE TOTAL   
        parent.insertAdjacentElement(position, element) 
        parent.insertAdjacentHTML(position, HTML) //basura
        parent.insertAdjacentText(position, text) //basura

    positions: 
        beforebegin -> Antes de que empiece (hermano anterior)
        afterbegin -> Despues de que empiece (primer hijo)
        beforeend -> Antes de que acabe (ultimo hijo)
        afterend -> después de que acabe (hermano siguiente)

    parent.replaceChild(newChild, oldChild) -> Reemplaza un hijo por otro
*/





const list = document.getElementById('list');
const newElement = document.createElement('li');
newElement.textContent = `I'm a new element`;

// list.appendChild(newElement); //el problema con esto es que SIEMPRE lo acomoda en el último lugar

// list.insertBefore(newElement, list.children[1]);

// list.children[0].insertAdjacentElement('beforebegin', newElement); //aca tuve que agregar al hijo (children[0]) porque sino lo ponía como un elemento hermano del ul

// list.insertAdjacentElement('afterbegin', newElement);
// list.insertAdjacentElement('beforeend', newElement);
// list.children[0].insertAdjacentElement('afterend', newElement);

// list.children[0].insertAdjacentHTML('afterend', '<li>Elemento con HTML</li>');
// list.children[0].insertAdjacentText('afterend', '<li>Elemento con HTML</li>');

// list.replaceChild(newElement, list.children[1])






/*
DOM manipulation convenience methods - JQuery like https://caniuse.com/#search=jQuery-like

positions: 
    parent.before() -> Antes de que empiece (hermano anterior)
    parent.prepend() -> después de que empiece (primer hijo)
    parent.append() -> antes de que acabe (ultimo hijo)
    parent.after() -> después de que acabe (hermano siguiente)

    child.replaceWith(newChild)
*/


// list.children[0].before(newElement);
// list.prepend(newElement);
// list.append(newElement);
// list.children[0].after(newElement);

// list.children[0].replaceWith(newElement);


/*
Clonar y eliminar elementos

    element.cloneNode(true|false) -> Clona el nodo. Si le pasamos rue clona todo el elemento con los hijos, si le pasamos false clona solo el elemento sin hijos. 
    element.remove() -> Elimina el nodo del DOM
    element.removeChild(child) -> Elimina el nodo hijo del DOM
*/

// list.after(list.cloneNode(true));
// list.remove()
list.removeChild(list.children[0])