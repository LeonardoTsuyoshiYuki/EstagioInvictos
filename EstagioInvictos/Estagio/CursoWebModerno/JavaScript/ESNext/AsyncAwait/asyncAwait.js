//Com promesi...
const http = require('http')//usando o framework de (http) do proprio Node
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


//Recurso ES8
//Objetivo de simplipicar o uso de promises....

let obterAlunos = async() => {
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')
    return [].concat(turmaA, turmaB, turmaC)
}//Retorna um objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))
