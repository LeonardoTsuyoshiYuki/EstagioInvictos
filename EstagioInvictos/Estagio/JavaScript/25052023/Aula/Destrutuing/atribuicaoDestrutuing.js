const pessoa = {
    nome: 'Leonardo',
    idade: 21, 
    endereco:{ 
        logradouro: 'Rua Monete Alegre',
        numero: 555
   }
}

// Destrutuing 'cunst {oq eu quero retirar da estrutura} = 
//nome da estrutura

const {nome, idade} = pessoa
console.log(nome, idade)
 
const{nome: n, idade: i} = pessoa
console.log(n, i)

//como sobrenome e apelido não existe na estrutura 'pessoa'
//o console ira enviar undefined
const {sobrenome,  apelido} = pessoa
console.log(sobrenome, apelido)

//caso eu queira mostra que e true ou false 
//(atributos = true ou false)
const {endereco:{logradouro, numero, cep = true}} = pessoa
console.log(logradouro, numero, cep)

const {endereco} = pessoa
console.log(endereco)