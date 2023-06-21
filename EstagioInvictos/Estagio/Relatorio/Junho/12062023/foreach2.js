// Implemetando um proprio forEach


Array.prototype.forEach2 = function(callBack){//Usando Array.prototype.forEach2 para criar a funcão do forEach
    //Criando a funcao do forEach
    for (let i = 0; i < this.length; i++){ //(this.lengt) ira fazer percorree todos os valores dentro do forEach2
        callBack(this [i], i, this)// calBack, que ira chamar tres indice, this[i] = valor atual, i = indice e o this = Array completo
    }
}


const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function (nome, indice){
    console.log(`${indice}) ${nome}`)
})