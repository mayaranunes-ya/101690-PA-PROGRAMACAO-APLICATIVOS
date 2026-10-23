// vetor de numeros
const numeros = [1, 2, 3, 4, 5]

console.log('\nexibindo todos os numeros: ')
console.log(numeros)

console.log('\nmultiplicando todos os numeros por 2: ')
console.log(numeros)
const numerosmultiplicadospordois = numeros.map(n => n * 2)
console.log(numerosmultiplicadospordois)

console.log('\nexibindo apenas os numeros pares: ')
console.log(numeros)
const numerospares = numeros.filter(n => n % 2 === 0)
console.log(numerospares)

console.log('\nexibindo a soma de todos os numeros: ')
console.log(numeros)
const soma = numeros.reduce((soma, atual) => soma + atual, 0 )
console.log(soma)

