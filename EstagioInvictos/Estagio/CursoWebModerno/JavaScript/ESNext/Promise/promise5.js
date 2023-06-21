function funcionaOuNao(valor, chancheErro) {
    return new Promise((resolve, reject) => {
        try {
            if (Math.random() < chancheErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch (e) {
            reject(e)
        }
    })
}

funcionaOuNao('Testando...', 0.9)
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v),
        //err => console.log(`Erro Esp.: ${err}`)
    )
    .catch(err => console.log(`Erro Geral: ${err}`))
    .then(() => console.log('Fim!'))