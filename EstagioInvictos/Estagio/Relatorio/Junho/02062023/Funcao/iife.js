//IIFE Immdiately Invoked Function Expression

// A function precisa esta entre "()"
//Esse function e utilizado para fugir do escoplo global 
(function() {
    console.log(`Sera executado na hora!`)
    console.log(`Foge do escopo mais abragente!`)
})()//Esses "()" envoca os conteudos da function 