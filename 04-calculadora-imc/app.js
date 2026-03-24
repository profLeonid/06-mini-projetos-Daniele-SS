'use strict' //Ativa o modo estrito do JS, que ajuda a capturar erros

const calcularIMC = () => {

    const nome      = document.getElementById('nome').value
    const altura    = Number(document.getElementById('altura').value)
    const peso      = Number(document.getElementById('peso').value)
    const resultado = document.getElementById('resultado')

    //Calculo do IMC
    const imc           = peso / (altura * altura)
    const imcFormatado  = imc.toFixed(1)

    //Classifica o IMC do usuário chamando a função classificarIMC
    const classificacao = classificarIMC(imc)

    const classeMap = {
        'Abaixo do peso':    'status-abaixo-peso',
        'Peso normal':       'status-peso-normal',
        'Sobrepeso':         'status-sobrepeso',
        'Obesidade grau I':  'status-obesidade-1',
        'Obesidade grau II': 'status-obesidade-2',
        'Obesidade grau III':'status-obesidade-3'
    }

    // Exibe o nome do usuário, o IMC calculado e sua classificação
    resultado.textContent = `${nome}, seu IMC é ${imcFormatado} — ${classificacao}`
    resultado.classList.remove('status-abaixo-peso', 'status-peso-normal', 'status-sobrepeso', 'status-obesidade-1', 'status-obesidade-2', 'status-obesidade-3')
    resultado.classList.add(classeMap[classificacao])
}

// Retorna a classificação do IMC conforme as faixas estabelecidas
function classificarIMC(imc) {
    /*Como cada bloco tem um return, assim que uma condição for verdadeira a função para imediatamente, 
    tornando o else desnecessário*/
    if (imc < 18.5) {
        return 'Abaixo do peso'
    }

    if (imc >= 18.5 && imc <= 24.9) {
        return 'Peso normal'
    }

    if (imc >= 25.0 && imc <= 29.9) {
        return 'Sobrepeso'
    }

    if (imc >= 30.0 && imc <= 34.9) {
        return 'Obesidade grau I'
    }

    if (imc >= 35.0 && imc <= 39.9) {
        return 'Obesidade grau II'
    }

    if (imc >= 40.0) {
        return 'Obesidade grau III'
    }
}