let pos = 0;
const truco = ("soymatias");
const trucoPorLetra = truco.split('')

document.addEventListener('keydown',  letra => {
    if (letra.key === trucoPorLetra[pos]) {
        console.log(letra.key)
        pos++
    }
    else {
        console.log('Posición reiniciada.')
        pos = 0
    }
})

const update = setInterval(() => {
    if (pos == trucoPorLetra.length) {
        clearInterval(update)
        const lista = document.getElementById('lista')
        const li = document.createElement('li')
        const secretlink = document.createElement('a')
        secretlink.href = './Matias/c-otros-proyectos/otros-proyectos.html'
        secretlink.textContent = 'Otros Proyectos'
        li.appendChild(secretlink);
        lista.insertAdjacentElement('beforeend', li)
        console.log('Hola Matías')
        SoyMatias()
    }
}, 200);

function SoyMatias(){
    document.querySelector('body').classList.toggle('matias')
    document.querySelector('#my-h2').textContent = 'Hola Matias!'
}