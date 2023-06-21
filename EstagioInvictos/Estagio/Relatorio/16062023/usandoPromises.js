//Com promesi...
const http = require('http')//usando o framework de (http) do proprio Node
const { get } = require('lodash')

    //importa os dados do link
    const getTurma = letra => {//(letra = para coletar os dados da turma 'A', 'B' e 'C')
        //Para não precisar chamar 3 link e sim um link e ir mudando as turmas, (dessa forma e bem mais especifico para esse exercicio)
        const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
        return new Promise((resolve, reject) =>{//retornando o metodo Promise
            http.get(url, res => {//para poder pegar os dados da (Url) 
                let resultado = ''//criando uma variavel vazia
    
                res.on('data', dados => {//e passar o tributo (Res).on para armazenar os dados em (dados) 
                    resultado+= dados// inclementando os dados em resultado, (resultado = resultado + dados)
                })
    
                res.on('end', () => {//e no final ('end'), chama um try e catch
                   try{// para caso houver erro, pare meu codigo antes
                        resolve(JSON.parse(resultado))
                   }catch(e){
                        reject(e)
                   }
                })
            })
        })
    }

    //fazendo a chamada, para pegar os dados, da turma A, B e C

    let = nomes = []//criando uma variavel nomes, que recebe um (Array) Vazio

    //chamndo a Promise
    //('A').then(alunos =>) atribuindo a letra = 'A' e chamando uma (arrow function) para mapear so os nomes
    // getTurma('A').then(alunos => {
    //     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))//concatenado os nome e mapeando "nomes.concat(alunos.map()"
    //     //(a => `A: ${a.nome}`) para mostrar a turma mais o nome (exemplo: 'A: Kellia', 'A: Hi')
    //     getTurma('B').then(alunos => {//repetindo a função da turma ', agora como B
    //         nomes = nomes.concat(alunos.map(b => `B: ${b.nome}`))
    //             getTurma('C').then(alunos => {//repetindo a função da turma B, agora como C
    //                 nomes = nomes.concat(alunos.map(c => `C: ${c.nome}`))
    //                 console.log(nomes)
    //             })
    //     })
    // })


    //Usando no formato Promise
//Usando o (Promise.all) consigo criar a mesma função do callBack, porem de formar mais simple e detalhada
    Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])//Chamo todas as Turmas com o "Promise.all()"
    //Uso o (.then) para chamar os metodos. e encadeios os com outros (.then)
        .then(turmas => [].concat(...turmas))// Chamando o metodo (.concat)
        .then(alunos => alunos.map(alunos => alunos.nome))// Chamando o metodo (.map)
        .then(nomes => console.log(nomes))//Chamando o console.log() para imprimir o nome dos alunos
        .catch(e => console.log(e.message))// tratativa de erro (no Promise.all)


getTurma('D').catch(e => console.log(e.message))//simulando um erro (resposta: Unexpected token < in JSON at position 0)