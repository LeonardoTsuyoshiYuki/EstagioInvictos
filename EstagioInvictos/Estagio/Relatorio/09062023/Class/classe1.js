//Criando classe
// Criando classes simples(sempre tem que ter o constructor para sentenciar os valores)
class Lancamento{
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

// criando outra classe, porem com funções 
class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(... lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }
    sunario(){
        let valorConsolidado = 0
        this.lancamentos.forEach (l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

// Inclememntando o valores no Lancamento 
//inclementando o valor de salario
const salario = new Lancamento('Salario', 45000)
//Inclementandos contaDeLuz
const contaDeLuz = new Lancamento ('Luz', -220)
//Inclementaando o valor da conta
const contas = new CicloFinanceiro(6, 2018)
//adicionando os as constantes salario e contaDeLuz no Lancamento  
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sunario())