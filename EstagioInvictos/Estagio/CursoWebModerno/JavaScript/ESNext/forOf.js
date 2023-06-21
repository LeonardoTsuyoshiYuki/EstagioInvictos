//ForOf em String
for(let letra of "Cod3r"){
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for(let i in assuntosEcma){
    console.log(i)//(resposta: 1 - 2 - 3)
}

for(let assunto of assuntosEcma){
    console.log(assunto)//(resposta: Map - Set - Promise)
}

//Usando o metodo (Map) com o (forof)

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])
for(let assunto of assuntosMap){//Passando o todos os valores de (assuntosMap)
    console.log(assunto)
    // (resposta: [ 'Map', { abordado: true } ] - [ 'Set', { abordado: true } ] - [ 'Promise', { abordado: false } ])
}

for(let chave of assuntosMap.keys()){//Passando somente as chaves
    console.log(chave)
    //(resposta: Map - Set - Promise)
}


for(let valor of assuntosMap.values()){//Passando somente os valores
    console.log(valor)
    //(resposta: { abordado: true } - { abordado: true } - { abordado: false })
}

// Passando as entradas

for(let [ch, vl] of assuntosEcma.entries()){//Passando o local de cada chave do Array
    console.log(ch, vl)
    //(resposta: 0 Map - 1 Set - 2 Promise)
}

//Usando o metodo (Set) com o (forof)

const s = new Set(['a', 'b', 'c'])// Criando o metodo (Set)
for(let letra of s){
    console.log(letra)
    //(resposta: a - b - c)
}