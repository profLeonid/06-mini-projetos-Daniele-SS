'use scritc'

//FUNÇÕES DE SETA/ ARROW FUNCTION
const calcularValorEconomizado = (preco, desconto) => preco * desconto / 100

const calcularValorFinal = (precoFinal, calcularValorEconomizado) => precoFinal - calcularValorEconomizado

//Função para selecionar a cor de acordo com o desconto que será aplicado
function escolherCor(desconto) {
    if (desconto <= 5) {
        return 'desconto1'

    } else if (desconto <= 10) {
        return 'desconto2'

    } else {
        return 'desconto3'
    }
}

function handleClick() {
    const preco     = Number(document.getElementById('preco').value)
    const desconto  = Number(document.getElementById('desconto').value)
    const resultado = document.getElementById('resultado')

    const valorEconomizado = calcularValorEconomizado(preco, desconto)
    const precoFinal = calcularValorFinal(preco, valorEconomizado)

    const cor = escolherCor(desconto)

    resultado.textContent = `${valorEconomizado} - ${precoFinal}`
    resultado.classList.remove('desconto1', 'desconto2', 'desconto3')
    resultado.classList.add(cor)
}