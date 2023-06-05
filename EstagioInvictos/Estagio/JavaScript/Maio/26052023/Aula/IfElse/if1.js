function soBoaNoticia(nota){
    if (nota >= 7){
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeiroEuFalo(valor){
    if(valor) {
        console.log ('E verdade ' + valor)
    }
}

seForVerdadeiroEuFalo()
seForVerdadeiroEuFalo(null)
seForVerdadeiroEuFalo(undefined)
seForVerdadeiroEuFalo('')
seForVerdadeiroEuFalo(0)
seForVerdadeiroEuFalo(-1)
seForVerdadeiroEuFalo(` `)
seForVerdadeiroEuFalo(`?`)
seForVerdadeiroEuFalo([])
seForVerdadeiroEuFalo([], 2)
seForVerdadeiroEuFalo({})
