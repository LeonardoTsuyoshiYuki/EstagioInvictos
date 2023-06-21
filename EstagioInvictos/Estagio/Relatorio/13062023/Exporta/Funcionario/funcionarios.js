//Arquido da maquina virtual do curso
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

//Cliente http, de requisicao
const axios = require ('axios')

//Criando uma função para achar os funcionarios da China
const chineses = f => f.pais === 'China'

//Criando uma função para achar as funcionarias Mulheres
const mulheres = f => f.genero === 'F'

//Criando uma função que compara os salarios das funcionarias para que encontre a menor
const menorSalario = (func, funcAtual) => {
    //(return) = se o salario do funcionario que foi percorrido for menos que o salario do funcionario atual,
    //mantem o funcionario que tem o menos salario ja percorrido,
    //caso o funcionario Atual, for menor que o anterior, ira subistituis o "funcAtual" e armazenara no "func" 
    //o funcionario com o menor salario
    return func.salario < funcAtual.salario ? func : funcAtual
    
}

//caso queira com o maior salario 
const maiorSalario = (func, funcAtual) => {return func.salario > funcAtual.salario ? func : funcAtual}


//pegando os dados em "Json" da "Url" = (const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json')
axios.get(url).then(response => {
    const funcionarios = response.data 
    //console.log(funcionarios)

    //Mulher chinesa com o menor salario e maior
    const func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)
    const func2 = funcionarios.filter(chineses).filter(mulheres).reduce(maiorSalario)
    
    console.log(func, func2)
})






