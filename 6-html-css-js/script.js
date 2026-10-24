// função que ira executar quando clicar no botão btn-gerar.
function atualizartema() {
    const numero = Number(document.getElementById('numero-input').value)
    document.body.classList.toggle('modo-10', numero === 10)
    document.body.classList.toggle('modo-21', numero === 21)
    document.body.classList.toggle('modo-25', numero === 25)
    document.body.classList.toggle('modo-22', numero === 22)
    document.body.classList.toggle('modo-684', numero === 684)
}

function gerartabuada() {
    atualizartema()

    // pega o valor do campo input no html.
    const numeroinput = document.getElementById('numero-input')
    //  convert o  texto que veio do htmal para numero inteiro .
    const numero = parseInt(numeroinput.value, 10)
    // pega o elemeto  aonde atabuada sera exibida no HTML.
    const resultadoDiv = document.getElementById('resultado-aqui')

    // limpa o conteudo anterior  no campo onde o resultado sera exibido.
    resultadoDiv.innerHTML = ''

    // adiciona o titulo da tabuada com tag h2
    resultadoDiv.innerHTML += `<h2>tabuada do numero ${numero}</h2>`
    
    // laço de repetição para gerar tabuada de 1 ate 10.
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i
        resultadoDiv.innerHTML += `<p>${numero} x ${i} = ${resultado}</p>`
    }
}

// pega a elemento onde a tabuada sera exibida no html a associa a um constante.
const btngerar = document.getElementById('btn-gerar')
const numeroinput = document.getElementById('numero-input')

//  faz a função gerartabuada() ser executado quando clicar no botão
btngerar.addEventListener('click', gerartabuada)
numeroinput.addEventListener('input', atualizartema)
