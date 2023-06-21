function criarPessoa (nome, preco){
    return{
        nome,
        preco, 
        desconto: 0.1        
    }
}

console.log(criarPessoa(`Iphone `, 2488))