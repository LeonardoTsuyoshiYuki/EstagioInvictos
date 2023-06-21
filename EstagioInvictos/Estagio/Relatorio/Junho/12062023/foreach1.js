// Tres formas de utilizar o forEach

//Criando a variavel
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

//Criando uma function, com forEACH
aprovados.forEach(function(nome, indice, Array){
    console.log(`${indice + 1})${nome}`)
    //console.log(Array)
    //resposta 1)Agatha
            // [ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
            //2)Aldo
            //....
})

//Criando um FunctionArrow com forEach
aprovados.forEach(nome => console.log(nome))


const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)
