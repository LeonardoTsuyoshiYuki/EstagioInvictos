const escola = "Escol4"

console.log(escola.charAt(4))
console.log(escola.charAt(5))

//.charCodeAt mostra o valor do numero da tabela asc
console.log(escola.charCodeAt(4))

//.indexOf mostra o local que esta o caracter 
console.log(escola.indexOf(`4`))

//.substring(1) Volta o valor no terminal, sem o primeiro caracter
console.log (escola.substring(1))

//.substring(0, 3) Volta o valor do primeiro ate o terceiro caracter
console.log (escola.substring(0, 3))

//.concat contatena 
console.log('Escola '.concat(escola).concat ("!"))
// ou 
console.log('Escola '+ escola + ("!"))


//.replace substitui o valor indicado (4) pelo caracter (a)
console.log (escola.replace(4 , 'a'))

//.replace substitui o valor indicado (/\d/) pelo caracter (a)
console.log (escola.replace(/\d/, 'a'))

//.replace substitui o  prieiro caracter com (/\w/) pelo caracter (a)
console.log (escola.replace(/\w/, 'a'))

//.replace substitui todos os caracter com (/\w/g) pelo caracter (a)
console.log (escola.replace(/\w/g, 'a'))

//.split converte a string pelo arry
console.log (`Ana,Maria,Pedro`.split(`,`))