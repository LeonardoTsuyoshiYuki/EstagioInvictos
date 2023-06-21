//sem promesi...

const http = require ('http')//usando o framework de (http) do proprio Node
const { getPriority } = require('os')
//importa os dados do link
const getTurma = (letra, callback) => {//(letra = para coletar os dados da turma 'A', 'B' e 'C')
    //Para não precisar chamar 3 link e sim um link e ir mudando as turmas, (dessa forma e bem mais especifico para esse exercicio)
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {//para poder pegar os dados da (Url) 
        let resultado = ''//criando uma variavel vazia

        res.on('data', dados => {//e passar o tributo (Res).on para armazenar os dados em (dados) 
            resultado+= dados// inclementando os dados em resultado, (resultado = resultado + dados)
        })

        res.on('end', () => {//e no final ('end'), chamar uma callback
            callback(JSON.parse(resultado))//para passar os dados que esta em json, para string
            //para o (Node) interpretar 
        })
    })
}

//fazendo a chamada, para pegar os dados, da turma A, B e C

let = nomes = []//criando uma variavel nomes, que recebe um (Array) Vazio

//chamndo a callback
getTurma('A', alunos => {//('A', alunos =>) atribuindo a letra = 'A' e chamando uma (arrow function) para mapear so os nomes
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))//concatenado os nome e mapeando "nomes.concat(alunos.map()"
    //(a => `A: ${a.nome}`) para mostrar a turma mais o nome (exemplo: 'A: Kellia', 'A: Hi')
       getTurma('B', alunos => {//repetindo a função da turma A, agora como B
        nomes = nomes.concat(alunos.map(b => `B: ${b.nome}`))
            getTurma('C', alunos => {//repetindo a função da turma B, agora como C
                nomes = nomes.concat(alunos.map(c => `C: ${c.nome}`))
                console.log(nomes)
            })
       })
})
