'use strict'//Ativa o modo estrito do JS, que ajuda a capturar erros

const calcularMedia = (n1, n2, n3) => (Number(n1) + Number(n2) + Number(n3)) / 3

function situacaoDoAluno(nota) {
    if (nota >= 7) {
        return 'Aprovado'
    } else if (nota >= 5 && nota <= 6.9) {
        return 'Recuperação'
    } else if (nota < 5) {
        return 'Reprovado'
    }
}

function cliqueButton() {

    const n1        = Number(document.getElementById('n1').value)
    const n2        = Number(document.getElementById('n2').value)
    const n3        = Number(document.getElementById('n3').value)
    const resultado = document.getElementById('resultado')

    const media          = calcularMedia(n1, n2, n3)      
    const mediaFormatada = media.toFixed(1)                    
    const status         = situacaoDoAluno(media)              

    const classeMap = {
        'Aprovado':    'status-aprovado',
        'Recuperação': 'status-recuperacao',
        'Reprovado':   'status-reprovado'
    }
    //Exibe a média formatada e o status do aluno; se em recuperação, adiciona o complemento 'de'
    resultado.textContent = `A média do(a) aluno(a) é ${mediaFormatada}, ele(a) está ${status === 'Recuperação' ? 'de Recuperação' : status}`
    resultado.classList.remove('status-aprovado', 'status-recuperacao', 'status-reprovado') 
    resultado.classList.add(classeMap[status])                                                  
}                                                                                               