function MenuHamburguesa() {
    let navigation = document.querySelector('.navigation');
    let hamburguesa = document.querySelector('.hamburguesa');
    navigation.classList.toggle('active');
    hamburguesa.classList.toggle('active');
}