let header = document.querySelector('header');
let hamburguesa = document.querySelector('.hamburguesa');

window.addEventListener('scroll', () => {

    if (window.innerWidth > 1200) {
        header.classList.toggle('sticky', window.scrollY > 0);
    }
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 1200) {
        if (window.scrollY > 0 && !header.classList.contains('sticky')) {
            header.classList.add('sticky');
        }
    }
    else {
        header.classList.remove('sticky', header.classList.contains('sticky'));
    }
})

const MenuHamburguesa = () => {
    header.classList.toggle('active');
    hamburguesa.classList.toggle('active');
}