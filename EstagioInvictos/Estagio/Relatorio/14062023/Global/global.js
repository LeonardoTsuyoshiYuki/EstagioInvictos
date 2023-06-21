//Criando o esclopo global dessa forma, podera ser alterado o atributo dele
globalThis.MinhaApp = {
    saudacao() {
        return 'Estou em todos os Lugares!'
    },
    nome: 'Sistema Leogal'
}

//Porem usando o Object.freeze() os atributos serão congelados 
// globalThis.MinhaApp = Object.freeze({
//     saudacao() {
//         return 'Estou em todos os Lugares!'
//     },
//     nome: 'Sistema Leogal'
// })