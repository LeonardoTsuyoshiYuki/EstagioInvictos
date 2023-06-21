require('./global')
console.log(MinhaApp.saudacao())


//Por ela ser uma esclopo Global, irei conseguir fazer a alteração 
//Porem, caso eu use o Object.freeze, no esclopo Global criado no arquivo global, eu congelo e não poderá ser alterado
MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome)
