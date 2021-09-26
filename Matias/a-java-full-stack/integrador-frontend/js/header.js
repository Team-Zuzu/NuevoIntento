let navbar = document.querySelector('.navbar');
let toggle = document.querySelector('.toggle');

window.addEventListener('scroll', () => {

    if (window.innerWidth > 1200) {
        navbar.classList.toggle('sticky', window.scrollY > 0);
    }
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 1200) {
        if (window.scrollY > 0 && !navbar.classList.contains('sticky')) {
            navbar.classList.add('sticky');
        }
        if (toggle.classList.contains('active')) {
            Toggle()
        }
    }
    else {
        navbar.classList.remove('sticky', navbar.classList.contains('sticky'));
    }
})

const Toggle = () => {
    navbar.classList.toggle('active');
    toggle.classList.toggle('active');
}

VanillaTilt.init(document.querySelectorAll('.card'), {
    max: 15,
    speed: 1000,
});