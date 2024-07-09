let errado = document.getElementById('opcao')
let pergunta1 = document.getElementById('selectMenu1')
let pergunta2 = document.getElementById('selectMenu2')
let pergunta3 = document.getElementById('selectMenu3')
let resultado = document.getElementById('pontuacao')

function MostrarValorDaSelect(){

    resultado.value = Number(pergunta1.value) + Number(pergunta2.value) + Number(pergunta3.value)

    if (resultado.value == 3){

        alert('Parabéns, você acertou todas!!!')
    }
    else if (resultado.value == 0){

        alert('Infelizmente você errou tudo...')
    }
    else if (resultado.value == 1 || resultado.value == 2){

        alert('Você errou.')
    }
    else if (errado == pergunta1, pergunta2, pergunta3){
        
        alert('Selecione todas as respostas!')
    }
}