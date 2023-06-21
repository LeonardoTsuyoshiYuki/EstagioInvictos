//par nome/valor

const saudacao = 'Opa' // contexteo léxico

function exec(){
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos alinhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereço: {
        logradouro: 'Rua Monte Alegre',
        numero: 555
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)


