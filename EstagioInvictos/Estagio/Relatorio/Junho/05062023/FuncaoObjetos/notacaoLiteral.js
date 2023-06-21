//EcoScript 2015

const a = 1
const b = 2
const c = 3

// forma antiga
const obj1 = {a:a, b:b, c:c,}
// forma atualizado
const obj2 = {a, b, c,}
 console.log(obj1)
 console.log(obj2)
 
 //

 const nomeAttr = `nota` // tem que ser criado
 const valorAttr = 7.87  // tem que ser criado

 // forma antiga
 const obj3 = {}
 obj3[nomeAttr] = valorAttr
 console.log(obj3)
 
 // forma atualizado
 const obj4 = {[nomeAttr]: valorAttr}
 consolo.log (obj4)

const obj5 = {
    // forma antiga
    funcao1: function(){
        //....
    },
     // forma atualizado
    funcao2(){
        //.....
    }
}

console.log(obj5)
