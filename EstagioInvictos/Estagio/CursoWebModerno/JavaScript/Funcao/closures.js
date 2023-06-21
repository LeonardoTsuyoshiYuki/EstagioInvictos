// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto léxico em ação!

//Criando uma variavel 'x' com o valor 
const x = `Global` 

//function
function fora(){
    const x = `Local`
    function dentro(){
        return x   
    }
    return dentro
}
 
//criando uma variavel para acessar a function 'fora' 
const minhaFuncao = fora()
//imprimindo a variavel, ela ira receber o 'const' dentro da function
console.log (minhaFuncao())
