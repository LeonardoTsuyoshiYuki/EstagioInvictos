function real(partes, ... valores){//para quando chamar (real) apareca (R$) os valores dentro de ${}
    const resultado = []//Criando um string vazio
    valores.forEach((valor, indice) => {//valores ira percorrer no valor e indice, e cria uma função
        valor = isNaN (valor) ? valor: `R$${valor.toFixed(2)}` // se valor for = 0 (?)se não, passa `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor) // resultado vai puxar partes com o[indice], e os valor 
    })
    return resultado.join('')//".join('')" vai transforma o valor do Array em um valor String.
}

const preco = 29.9 
const precoParcela = 11 
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)
