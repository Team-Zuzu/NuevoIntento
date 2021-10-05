let pos = 0;
const truco = ("codoacodo");
const trucoPorLetra = truco.split('')

document.addEventListener("keydown",  letra => {

    if (letra.key === trucoPorLetra[pos]) {
        console.log(letra.key)
        pos++
    }
    else {
        console.log(`Posición reiniciada.`)
        pos = 0
    }
})

const update = setInterval(() => {
    if (pos == trucoPorLetra.length) {

        clearInterval(update)

        const lista = document.getElementById('lista')

        const li = document.createElement('li')
        const a = document.createElement('a')
        a.href = './Matias/c-otros-proyectos/otros-proyectos.html'
        a.textContent = 'Otros Proyectos'

        li.appendChild(a);
        lista.insertAdjacentElement('beforeend', li)

        console.log('Hola Matías')
        SoyMatias()

    }
}, 200);

function SoyMatias(){
    const body = document.querySelector('body')
    const h1 = document.querySelector('h1')
    const matias = document.querySelector('.matias')
    const h2 = matias.children[0]
    const fernando = document.querySelector('.fernando')
    const as = document.querySelectorAll('a')

    h2.textContent = 'Hola Matias!'

    body.classList.toggle('active')
    h1.classList.toggle('active')
    fernando.classList.toggle('active')
    matias.classList.toggle('active')
    h2.classList.toggle('active')
    as.forEach(a => {
        a.classList.toggle('active')
    });
}