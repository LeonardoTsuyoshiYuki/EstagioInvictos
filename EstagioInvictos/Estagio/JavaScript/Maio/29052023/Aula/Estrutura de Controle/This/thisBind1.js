const pessoa = {
    saudacao: `Bom Dia!`,
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

//De forma que dara o comflito(retorna undefined)
const falar = pessoa.falar 
falar() // Conflito entre paradigma: funfional e 00


// Uso de Bind
// para corrigir (this.saudacao)
//Forma que corrija o comflito
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()