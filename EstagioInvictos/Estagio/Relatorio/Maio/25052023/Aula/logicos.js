function compras( trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2
  //const comprarTv32 = !!(trabalho1 ^ trabalhor2) // bitwin xor
    const manterSaudevel = !comprarSorvete

    return {comprarSorvete, comprarTv50, 
            comprarTv32, manterSaudevel}
/*  porderia der assim tbm 
     return {comprarSorvete: comprarSorvete
            ,comprarTv50: comprarTv50
            ,comprarTv32: comprarTv32
            ,manterSaudevel: manterSaudevel}   
*/
}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))