// Objeto e o JSON tem a mesma forma de se escrever, porem com algumas diferença nas sintaces
//Como nos exemplos a baixo

const obj = { a: 1, b: 2, c: 3, soma() {return a + b + c}}
console.log(JSON.stringify(obj))

//console.log(JSON.parse("{a: 1, b: 2, c: 3}")) erro devido que não e dessa forma que se escreve um JSON
//console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}")) erro devido que não e dessa forma que se escreve um JSON

console.log (JSON.parse ('{"a": 1, "b": 2, "c": 3}')) //forma correto de escrever o JSON
console.log (JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": []}'))// Quando for escrever uma String em formato JSON tem que estar em aspas duplas("string"), mas as (numero (1), {},[] e truo ou false) não precisa

