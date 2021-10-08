const loader = document.querySelector('.loader')

function agregarClases(cad) {
    for (let i = 0; i < loader.childElementCount; i++) {
        loader.children[i].classList.add(cad)
    }
}

function fin() {
    loader.classList.add('fin')
    document.querySelector('body').classList.add('fin')
}

if (window.scrollY == 0) {
    window.addEventListener('load', event => {
        agregarClases('carga-terminada');
        setTimeout(() => {
            agregarClases('codo-a-codo');
            loader.classList.add('codo-a-codo')
        }, 1250);
        setTimeout(() => {
            fin()
        }, 3000)
    });
}
else {
    fin()
    console.log(window.scrollY)
}