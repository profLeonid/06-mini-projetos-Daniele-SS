'use strict' //Ativa o modo estrito do JS, que ajuda a capturar erros

// Verifica se o candidato é apto com base no tempo informado
function verificarAptidao(tempo) {
    if (tempo < 14.0) {
        return 'Apto'
    } else {
        return 'Não Apto'
    }
}

function avaliar() {

    const tempo     = Number(document.getElementById('tempo').value) //Captura o tempo informado pelo usuário
    const resultado = document.getElementById('resultado') //Captura o elemento que exibirá o resultado

    const status = verificarAptidao(tempo) //Verifica se o candidato é apto ou não apto

    const classeMap = {
        'Apto':     'status-apto',
        'Não Apto': 'status-nao-apto'
    } //Mapeia cada status para sua respectiva classe CSS

    resultado.textContent = `O candidato está: ${status}` //Exibe o resultado na tela
    resultado.classList.remove('status-apto', 'status-nao-apto') //Remove classes anteriores antes de adicionar a nova
    resultado.classList.add(classeMap[status]) //Adiciona a classe CSS correspondente ao status
}