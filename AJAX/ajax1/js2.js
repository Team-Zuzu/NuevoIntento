/*
    Esta versión de una solicitud AJAX fue hecha por mi. La diferencia con la de Dorian es que estoy usando un fragment para manipular el DOM solo una vez
*/


const button = document.getElementById('button')

button.addEventListener('click', () => {

    let xhr
    
    if (window.XMLHttpRequest)
        xhr = new XMLHttpRequest()
    else
        xhr = new ActiveXObject("Microsoft.XMLHTTP")

    xhr.open('get', 'https://jsonplaceholder.typicode.com/users')

    xhr.addEventListener('load', (data) => {

        const dataJSON = JSON.parse(data.target.response);

        const list = document.getElementById('list')
        let fragment = document.createDocumentFragment();

        for (const usersInfo of dataJSON) {
            const listItem = document.createElement('li')
            listItem.textContent = `${usersInfo.id} - ${usersInfo.name}`
            fragment.appendChild(listItem)
        }

        list.appendChild(fragment)
    })

    xhr.send()
})