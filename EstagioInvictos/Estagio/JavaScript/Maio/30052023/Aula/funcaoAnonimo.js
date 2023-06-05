
//crinando uma variavel com uma função anonima'soma' 
const soma = function(x, y){
    return x + y // que retorna a operação
}

//imprimi o resultado da função com uma função anonima
const imprimirResultado = function(a, b, operacao 
    = soma){
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)//implementando o valor
imprimirResultado(3, 4, soma)//implementando o valor e 
//add o valor da 'soma'

//Crinando outra função anonima, para ser implementado
//dentro do imprimir resultado
imprimirResultado(3, 4, function (x, y){
    return x - y
})

//criando uma função anonima arrow 
imprimirResultado(3, 4, (x, y) => x * y)


//Criando Objeto com função anonima
const pessoa = { 
    falar: function(){
        console.log('opa')
    }
}
pessoa.falar()