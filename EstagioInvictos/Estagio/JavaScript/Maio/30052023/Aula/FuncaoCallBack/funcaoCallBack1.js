
//Criando um Array
const fabricantes = ["Mercedes", "Audi", "BMW"]


//Funcao `CallBack`
function imprimir(nome, indice){
     console.log(`${indice + 1}. ${nome} `)
   //console.log(indice+ 1,'.', nome) outra forma
}
fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => 
    console.log(fabricante)
)