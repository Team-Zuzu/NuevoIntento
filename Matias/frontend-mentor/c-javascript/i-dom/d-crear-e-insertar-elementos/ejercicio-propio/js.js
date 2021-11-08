let nombreUsuario = 'Matias'
const fragment = document.createDocumentFragment();
const titulo = document.getElementById('titulo')

const span = document.createElement('span')
span.textContent = nombreUsuario
fragment.appendChild(span)

titulo.appendChild(fragment)