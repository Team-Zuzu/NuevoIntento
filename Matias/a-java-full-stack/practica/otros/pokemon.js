// new Vue({
//     el: "#pokemon",
//     data: {
//         info: '',
//     },
//     created() {
//         this.cargaDatos("https://pokeapi.co/api/v2/pokemon")
//     },
//     methods: {
//         cargaDatos(url) {
//             fetch(url)
//                 .then(response => response.json())
//                 .then(data => {
//                     console.log('Llegaron los datos');
//                     this.info = data
//                 })
//                 .catch(error => {
//                     console.log('Hay un error raro e.e');
//                     console.log(error)
//                 })
//         }
//     }
// })