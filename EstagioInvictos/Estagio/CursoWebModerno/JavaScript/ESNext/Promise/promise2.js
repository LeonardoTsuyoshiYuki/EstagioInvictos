// setTimeout(function() {
//     console.log('Executando callback...')
    
//     setTimeout(function() {
//         console.log('Executando callback...')

//         setTimeout(function() {
//             console.log('')
//         }, 2000)
//     }, 2000)
// }, 2000)

//Promise
function esperarPor(tempo = 2000) {
    return new Promise (function(resolve){
        setTimeout(function() {
            console.log('Executando promise...')
            resolve()
        },tempo)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor())