let pos = 0;
const truco = ("soymatias");
const trucoPorLetra = Array.from(truco);

document.addEventListener("keydown", function (letra) {

    if (letra.key === trucoPorLetra[pos]) {
        console.log(letra.key);
        pos++;
    }
    else {
        console.log(`${letra.key} no es igual a ${trucoPorLetra.indexOf}. Posición reiniciada.`);
        pos = 0;
    }
});

const update = setInterval(() => {
    if (pos == trucoPorLetra.length) {
        clearInterval(update);
        console.log('Hola Matías');

        const lista = document.getElementById('lista');

        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = './Matias/c-otros-proyectos/otros-proyectos.html'
        a.textContent = 'Otros Proyectos';

        li.appendChild(a);
        lista.insertAdjacentElement('beforeend', li);
    }
}, 200);