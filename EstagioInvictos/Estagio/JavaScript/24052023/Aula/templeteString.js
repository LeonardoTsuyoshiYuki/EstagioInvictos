const nome = `Rebeca`
const concatenacao = `Ola ` + nome + `!`
const template = `
    Ola
    ${nome}!`
console.log(concatenacao, template)    

//Expressoes...
//${} consigo usar uma função
console.log(`1 + 1 = ${1 + 1}`)

// .toUpperCase() deixa em letras maiusculas
const up = texte => texte.toUpperCase()


console.log(`Ei... ${up(`cuidado`)}!`)