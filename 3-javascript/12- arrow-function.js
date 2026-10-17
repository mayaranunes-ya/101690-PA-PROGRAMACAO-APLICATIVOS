const somar = (a, b) => {   //Usado para mais de uma operação. O {} é usado para mais de uma operação
    return a + b    
}

// Faz a mesma coisa que a função acima, mas de forma mais simplificada
const subtrair = (a, b) => a - b

//chamar
const soma = somar(10, 20)
const subtracao = subtrair(20, 10)

console.log(`Soma: ${soma}`)
console.log(`Subtração: ${subtracao}`)


