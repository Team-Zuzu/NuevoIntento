/*
    Protocolo HTTP
        https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto

    Códigos de estado de respuesta HTTP:
        https://developer.mozilla.org/es/docs/Web/HTTP/Status

*/

/*
    1. Necesito crear una variable llamada xhr para guardar la respuesta del servidor
    2. El método XMLHttpRequest open() inicializa una solicitud recién creada
*/

const button = document.getElementById('button')

button.addEventListener('click', () => {
    //En esta variable voy a guardar la respuesta del servidor (por convención se llama xhr)
    let xhr;

    if (window.XMLHttpRequest) {
        //para todos los navegadores actuales
        xhr = new XMLHttpRequest()
    } 
    else {
        //para exploradores viejos
        xhr = new ActiveXObject("Microsoft.XMLHTTP")
    }

    // inicializa el xhr
    xhr.open('get', 'https://jsonplaceholder.typicode.com/users')

    // antes de enviar la petición tengo que decirle que quiero que haga con los datos.
    // para esto tenemos que escuchar un evento para saber cuando esa información haya llegado
    xhr.addEventListener('load', (data) => {
        console.log(data);
        console.log(data.target);
        console.log(data.target.response);
        console.log(typeof data.target.response);
        // la información que conseguimos es un string, necesitamos convertirlo a JSON para poder seguir trabajando. Para esto usamos JSON.parse()
        const dataJSON = JSON.parse(data.target.response);
        console.log(dataJSON);

        const list = document.getElementById('list')

        for (const usersInfo of dataJSON) {
            const listItem = document.createElement('li')
            listItem.textContent = `${usersInfo.id} - ${usersInfo.name}`
            list.appendChild(listItem)
        }
    })

    xhr.send()
})