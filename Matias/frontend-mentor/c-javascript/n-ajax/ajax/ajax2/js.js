const form = document.getElementById('form')
const characters = document.getElementById('characters')
const table = document.getElementById('table')

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     getData(characters.children[characters.selectedIndex])
// })

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (characters.selectedIndex < 0) {
        getData();
    } else {
        getData(characters.children[characters.selectedIndex].value);
    }
});

const getData = (id) => {

    let xhr;
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest()
    else xhr = new ActiveXObject("Microsoft.XMLHTTP")

    if (id == undefined) {
        xhr.open('GET', 'marvel.php');

        xhr.addEventListener('load', (data) => {
            // console.log(data)
            const dataJSON = JSON.parse(data.target.response);
            // console.log(dataJSON);

            const fragment = document.createDocumentFragment()

            for (const heroes of dataJSON) {
                const option = document.createElement('option')
                option.setAttribute('value', heroes.ID)
                option.textContent = heroes.Name
                fragment.append(option)
            }

            characters.appendChild(fragment)
        })
    }
    else {
        xhr.open('GET', `marvel.php?id=${id}`);

        xhr.addEventListener('load', (data) => {
            const dataJSON = JSON.parse(data.target.response);
            // console.log(dataJSON);

            const fragment = document.createDocumentFragment();
            for (const heroes of dataJSON) {
                const row = document.createElement('tr')

                const dataName = document.createElement('td')
                const dataAlignment = document.createElement('td')
                const dataHometown = document.createElement('td')
                const dataGender = document.createElement('td')
                const dataFighting = document.createElement('td')

                dataName.textContent = heroes.Name
                dataAlignment.textContent = heroes.Alignment
                dataHometown.textContent = heroes.Hometown
                dataGender.textContent = heroes.Gender
                dataFighting.textContent = heroes.Fighting_Skills

                row.append(dataName)
                row.append(dataAlignment)
                row.append(dataHometown)
                row.append(dataGender)
                row.append(dataFighting)

                fragment.append(row)
            }
            if (table.children[1]) {
                table.removeChild(table.children[1])
            }

            table.append(fragment)
        })
    }

    xhr.send()
}

getData();