const listadealunos = [
{nome: 'ana', nota: 5.0},
{nome: 'bruno', nota: 10.0},
{nome: 'maria', nota: 2.0},
{nome: 'marta', nota: 7.0},
{nome: 'cecilia', nota: 6.0}
]

console.log('\nmostre todos os aluno, seus nomes e suas notas: ')
listadealunos.forEach(u => console.log(`aluna(o) ${u.nome} tirou  nota ${u.nota}.`))

console.log('\nmostre a media geral da turma: ')
const somanotas = listadealunos.reduce ((total,u) => total + u.nota, 0)
console.log ( somanotas / 5)

console.log('\nmostre o nome e nota dos alunos com nota abaixo de 7.0: ')
const notarmenorquesete = listadealunos.filter(u => u.nota < 7.0)
notarmenorquesete.forEach(u => console.log(`aluno(a) ${u.nome} tirou a nota ${u.nota}`))

console.log('\nmostre apenas o nome dos alunos com nota maior ou igual a 7.0: ')
const notarmaiorquesete = listadealunos.filter(u => u.nota >= 7.0)
notarmaiorquesete.forEach(u => console.log(`aluno(a) ${u.nome} tirou a nota ${u.nota}`))

console.log('\nmostre o nome e nota do aluno bruno: ')
console.log (listadealunos [1])