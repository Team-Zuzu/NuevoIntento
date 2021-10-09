const loader = document.querySelector('.loader')
var dosSegundos = false
var cargaTerminada = false

function agregarClases(cad) {
    for (let i = 0; i < loader.childElementCount; i++) {
        loader.children[i].classList.add(cad)
    }
}

function fin() {
    // alert('fin')
    loader.classList.add('fin')
    document.querySelector('header').classList.add('fin')
    document.querySelector('main').classList.add('fin')
    document.querySelector('footer').classList.add('fin')
    document.querySelector('body').classList.add('fin')
}

// if (window.scrollY == 0) {
//     window.addEventListener('click', event => {
//         cargaTerminada = true
//     });
// }
// else {
//     fin()
//     console.log(window.scrollY)
// }
window.addEventListener('click', event => {
    cargaTerminada = true
});

setTimeout(() => {
    dosSegundos = true
}, 2000)

// const disparador = setInterval(() => {
//     if (dosSegundos && cargaTerminada) {
//         clearInterval(disparador)
//         agregarClases('carga-terminada');
//         setTimeout(() => {
//             agregarClases('codo-a-codo');
//             loader.classList.add('codo-a-codo')
//         }, 1250);
//         setTimeout(() => {
//             fin()
//         }, 3000)
//     }
// }, 200);

agregarClases('carga-terminada');
agregarClases('codo-a-codo');
loader.classList.add('codo-a-codo')