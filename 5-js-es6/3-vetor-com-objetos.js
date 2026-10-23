const usuarios = [
    {nome:'Marta', idade: 30},
    {nome:'jose', idade: 40},
    {nome:'maria', idade: 50},
    {nome:'marcela', idade: 60},
]

console.log('\nexibindo todos os usuarios do vetor: ')
usuarios.forEach(u => console.log(`${u.nome} tem ${u.idade} anos. `))

console.log('\nfiltrando usuarios com idade acima de 50 anos: ')
const maiordecinquenta = usuarios.filter(u => u.idade >=50)
maiordecinquenta.forEach(u => console.log(`${u.nome} tem ${u.idade} anos.`))

console.log('\nexibindo apenas os nomes: ')
const nomes = usuarios.map(u => u.nome)
nomes.forEach(nome => console.log(`${nome};`))

console.log('\nencontrando um usuario: ')
const usuarioencontrado = usuarios.find(u => u.nome === 'Marta')
console.log(usuarioencontrado)
console.log(`${usuarioencontrado.nome} tem ${usuarioencontrado.idade} anos.`)

console.log('\nmostra a soma de todas as idades: ')
const somaidades = usuarios.reduce ((total,u) => total + u.idade, 0)
console.log(`total das idades: ${somaidades}`)


