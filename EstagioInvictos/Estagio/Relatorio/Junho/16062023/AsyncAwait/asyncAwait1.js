const { duration } = require("moment")

function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

// esperarPor(2000)
//     .then(() => console.log('Executando promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 3...'))

// function retornarValor() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(10), 5000)
//     })
// }
function retornarValorRapido() {
    return 20
}

async function executar() {
    let valor = await retornarValorRapido()

    await esperarPor(2000)
    console.log(`Async/Wait ${valor}...`)

    await esperarPor(2000)
    console.log(`Async/Wait ${valor + 1}...`)

    await esperarPor(2000)
    console.log(`Async/Wait ${valor + 2}...`)

    await esperarPor(2000)

    return valor + 3
}

async function executarDeVerdade(){
    const valor = await executar()
    console.log(valor)
}
executarDeVerdade()

// executar()
//     .then(console.log)


// const v = executar()
// console.log(v)