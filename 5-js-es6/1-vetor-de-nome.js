// Croando um vetor

const listanomes = ['marta', 'jose','maria']

console.log('\nexibindo todos os elementos do vetor: ')
console.log(listanomes)

console.log('\nexibindo o primeiro elemento do vetor: ')
console.log(listanomes[0])

console.log('\nadicionando um elemento no vetor: ')
listanomes.push('marilia')
console.log(listanomes)

// sua vez, adicione seu nome no vetor .

console.log('\nremovendo o primeiro elemento no vetor:')
listanomes.shift()
console.log(listanomes)

console.log('\nremovendo um elemento específico no vetor:')
// a partir do indice 2, remover apenas um elemento.
listanomes.splice(2,1)
console.log(listanomes)

console.log('\nremovendo o ultimo elemento no vetor:')
listanomes.pop()
console.log(listanomes)

