// Codigo com erro

/*
function imprimirNomeGritando (obj) {
    console.log(obj.name.toUpperCase() + `!!!!`)
}

const obj = {nome: `Roberto`}
imprimirNomeGritando(obj)
*/

// Tratativa de erro

function tratarErroElancer(erro){
    //throw new Error(`...`)
    //throw 10
    //throw true
    //throw `mensagem`
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
    
}
function tratarErroElancer2(erro){
    //throw new Error(`...`)
    //throw 10
    //throw true
    //throw `mensagem`
    throw {
        nome: erro.name2,
        msg: erro.message,
        date: new Date
    }
    
}

function imprimirNomeGritando (obj, obj2) {
    try{
    console.log(obj.name.toUpperCase() + `!!!!`)
    console.log(obj2.name.toUpperCase() + `!!!!`)
    } catch(e){
        tratarErroElancer(e)
        tratarErroElancer2(e)
    }finally {
        console.log(`Final`)
    }
}

// Erro no `nome` = name
const obj = {name: `Roberto`}
imprimirNomeGritando(obj)
const obj2 = {nome: `Pedro`}
imprimirNomeGritando(obj2)