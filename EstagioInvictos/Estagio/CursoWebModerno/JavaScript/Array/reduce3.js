//Como funciona o "Reduce"
Array.prototype.reduce2 = function(callBack, valorInicial){
    const indiceInicial = valorInicial ? 0 : 1 //"?" = if 0 ":" = else 1, para caso setar um valor inicial
    let acumulador = valorInicial || this [0]// Inicial no primeiro valor do Array
        for (let i = indiceInicial; i < this.length; i ++){//(this.lengt) ira fazer percorree todos os valores dentro do reduce
            acumulador = callBack(acumulador, this[i], i , this) //Para acumular os valores do Array
            // calBack, que ira chamar tres indice, this[i] = valor atual, i = indice e o this = Array completo
    }
    return acumulador 
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma, 21))