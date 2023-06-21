console.log(this === global)//resposta false
console.log(this === module)//resposta false

console.log(this === module.exports)//resposta true
console.log(this === exports)//resposta true

function logThis(){
    console.log('Dentro da Função!')
    console.log(this === exports)//resposta false, pois dentro de uma function, ele se direciona para o esclopo Global
    console.log(this === module.exports)//resposta false, pois dentro de uma function, ele se direciona para o esclopo Global
    console.log(this == global)//resposta true

   // this.perigo = '...' //dentro de uma function, ele se direciona para o esclopo Global
}

// this.perigo = '...'//dentro de uma function, ele se direciona para o module.exports

//chamando a function
logThis()

function functionExpression(){
    console.log("Aponta para o Global ->",this === global)
    console.log("Não aponta para o export ->", this === exports)
    console.log("Não aponta para o module.exports ->", this === module.exports)
    
    console.log("O this nesta função é o objeto Global ->", this === global)
    console.log("O this nesta função É O MODULE.EXPORTS ->", this === module.exports)
}

functionExpression()