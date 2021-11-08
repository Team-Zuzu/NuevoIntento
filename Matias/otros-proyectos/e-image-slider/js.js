const tiempoCambio = 10;
let deltaTime = 0;
const inputArray = document.querySelectorAll('input');
console.dir(inputArray);

const VerificarChecked = () => {

    let i = 0;
    while (i < inputArray.length) {
        if (inputArray[i].hasAttribute('checked')) {
            // console.log('encontrado (y)');
            return i;
        }
        else {
            i++;
        }
    }
    // console.error('no encontrado :C');
}

const Cambiar = () => {
    let pos = VerificarChecked();

    if (pos == inputArray.length - 1) {
        inputArray[pos].removeAttribute('checked');
        pos = 0;
        inputArray[0].setAttribute('checked', 'checked');
    }
    else {
        inputArray[pos].removeAttribute('checked');
        pos++;
        inputArray[pos].setAttribute('checked', 'checked');
    }
}

const update = setInterval(() => {

    deltaTime++;
    console.log(deltaTime);
    if (deltaTime >= tiempoCambio) {
        Cambiar();
        deltaTime = 0;
    }

}, 1000);

for(const input of inputArray){
    input.addEventListener('click', () => deltaTime = 0)
}
