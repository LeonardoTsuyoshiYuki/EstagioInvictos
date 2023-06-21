console.log(typeof Array, typeof new Array, typeof [])
//resultado 'function object object'

//Não e recomendado criar Array dessa forma
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log (aprovados)
//resultado '[ 'Bia', 'Carlos', 'Ana' ]'

//Melhor forma de criar um Array
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
//resultado 'Bia'
console.log(aprovados[1])
//resultado 'Carlos'
console.log(aprovados[2])
//resultado 'Ana'
console.log(aprovados[3]) // pode tentar acessar um elemento que nao esteja no Array, porem ira das underfined
//resultado 'underfined'

//Subistituir no Array
aprovados[3] = 'Paulo'

//".push" Imclementar no Array
aprovados.push('Abia')
console.log(aprovados.length)//mostra a quantidade 
//resultado '5'

//Pode ser imclementado em uma posição mais alta porem, deixara o Array com valores undefined nas lacunas não preenchidas
aprovados[9] = 'Rafael'
console.log (aprovados.length)
//resultado '10'
console.log (aprovados[8] === undefined)
//resultado 'true'
console.log (aprovados)
//resultado '[ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Abia', <4 empty items>, 'Rafael' ]'

//".sort" Ordenar o Array de formar mais implicita (alteração dentro Array)
//Tem outras forma de alterar a ordem do Array, porem envez de alterar o original, ela cria um novo Array e ordena
aprovados.sort()
console.log (aprovados)
//resultado '[ 'Abia', 'Ana', 'Bia', 'Carlos', 'Paulo', 'Rafael', <4 empty items> ]'

//"delete" Exclua um valor do Array, porem não ira resequenciar o Array, mas deixara o valor undefined
delete aprovados[1]//lembrando que todo Array começa no numero 0
console.log(aprovados[1])
//resultado 'undefined'
console.log(aprovados[2])
//resultado 'Bia'

//".splice()" Ela serve para adicionar elementos dentro do Array, como serve paraa remover e server para adicinar e deletar do Array ao mesmo tempo
aprovados = ['Bia', 'Carlos', 'Ana']//criando novo array para organizar
//como funciona o ".sprice" (aprovados.sprice((a ordem do Array), (a quantidade), (caso queira adicionar('o valor para adicionar')pode adicionar o a quantidade que for nessesaria, por aqui)))
//esta iniciando na ordem 1, deletado so 1 elemento 
aprovados.splice(1, 1)
console.log(aprovados)
//resultado '[ 'Bia', 'Ana' ]'

//esta iniciando nq ordem 3, deletando nem um elemento e adicionando o ellemento ('Elemwnto1' e 'Elemento2') 
aprovados.splice(3, 0, 'Elemntos1','Elementos2')
console.log(aprovados)
//resultado '[ 'Bia', 'Ana', 'Elemntos1', 'Elementos2' ]'

//esta iniciando na ordem 1, deletando dois elemento, e adicionando o elemento ('Elemwnto3' e 'Elemento4') 
aprovados.splice(1, 2, 'Elemento3', 'Elemento4')
console.log (aprovados)
//resultado '[ 'Bia', 'Elemento1', 'Elemento2', 'Elementos2' ]'