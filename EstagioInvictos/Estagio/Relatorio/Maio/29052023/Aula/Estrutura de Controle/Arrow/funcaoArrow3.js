
// usando dunction o parametro e considerado global
let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global)
 
const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

// Porem no `ARROW` nao e considerado global
let comparaComThisArrow = param => console.log(this === param)

comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)
