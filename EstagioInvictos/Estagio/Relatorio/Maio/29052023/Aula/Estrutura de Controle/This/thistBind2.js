/*
Duas formas de corrigir o Conflito entre paradigma
Usando a funcao `.bind`
Ou Criando uma Variavel (normalmente utilizado)`self`
para armazerar o valor do `this.idade`
*/


function Pessoa(){
    this.idade = 0

//Outro forma de corrigir, criando uma variavel
    const self = this // Variavel `self`, recebera o `this.idade` da funcao
    setInterval(function() {
        /*this*/self.idade++
        console.log(/*this*/self.idade)
    }/*corrigindo com `BINd`.bind(this)*/,1000)//Tempo que sera gerado os intervalo 1000Ms = 1s
}

new Pessoa