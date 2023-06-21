//criando as uma função com os parametro segundos e frase
function falaDepoisDe(segundos, frase) {
//retorn da Promise (resolve = resolver) e (reject = rejeita) forma univelsal de usar 
    return new Promise((resolve, reject) => {//pode ser usado tanto o resolve ou reject(não precisa ser usado dessa forma, poder ser alterado os nome) como (resolvel, rejeita)
        setTimeout(() => {//setando um tempo
            resolve(frase)//passando a frase, no caso quando resolveu(Promise não consegue ter mais de um parametro)
            //caso queira passar outros, precisa usar um Object, com os atributos
            //reject(frase) caso queira usar o reject(não e muito utilizado)
        }, segundos *1000)//parameto vezes os segundos(1000 = 1 minuto)
    })
}

falaDepoisDe(3, 'Que legal!')// Passando os (segundos = 3) e (frase = 'Que legal!')
    //Pode ser utilizado varios (.then)para encadear 
    .then((frase) => frase.concat('?!?'))// promise passa pelo concat(para concatenar a frase com a outra frase ('?!?'))
    .then(outraFrase => console.log(outraFrase))//Imprimindo a frase mais a concatenação, depois de 3 segundo 
    .catch(e => console.log(e))// no caso de ser utilizado o (reject)
    //.catch ira tratar o erro que foi rejeitado, e ira mostra a frase(resposta: Que legal!)

//setTimeout e para simular um delay, como se fosse no sistema. 