//Função em JS é First-Class Object (Cliente)
//Highir-oredem function

// Criar de forma literaria 
function func1(){

}

//Armazenar em uuma variável 
const func2 = function(){

}

//Armazenar em um ARRAY
const array = [function(a, b){return a, b}, func2, func1]
console.log(array[0](2, 3))

//Armazenar em um atributo de objeto

const obj = {}
obj.fala = function() {return 'Opa'}
console.log(obj.fala())

//Passar função com parametro
function run(fun){
    fun()
}
run(function() {console.log('Executando....')})


// Um função pode retorna/conter uma função

function soma (a, b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)