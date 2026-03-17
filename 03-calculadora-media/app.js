'use scritc'

//Função para realizar o calculo da média artimetica
const calcularMedia = (n1, n2, n3) => Number(n1) + Number(n2) + Number(n3) / 3

//Função para validar se o aluno está: aprovado, de recuperação ou reprovado
function situacaoDoAluno (nota) {

    if ( nota >= 7) {
        return 'Aprovado'

    } else if ( nota >= 5 || nota <= 6.9) {
        return 'Recuperação'

    } else if ( nota < 5) {
        return 'Reprovado'
    }
}

function cliqueButton() {
    
    const n1        = Number(document.getElementById('n1').value)
    const n2        = Number(document.getElementById('n2').value)
    const n3        = Number(document.getElementById('n3').value)
    const resultado = document.getElementById('resultado')
    
    const status  = situacaoDoAluno()

    
    const media = calcularMedia (n1, n2, n3).toFixed(0)/*Chamo minha função de calculo e uso o .toFixed(0) 
                                                        para que não apareça números após a vírgula*/

                                                        
    //Exibição do resultado que o usuário irá visualizar na tela
    resultado.textContent = `A média do aluno é ${media}, ele está ${status}`
    resultado.classList.remove('status-aprovado', 'status-recuperacao', 'status-reprovado')
    //resultado.classList.add(cor)
}
