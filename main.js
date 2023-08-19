//Função para validação e tocar audio
let contador = 1
function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido!')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//Render do estilo do botão quando ativa e desativa
for(contador = 0; contador<listaDeTeclas.length; contador++) {    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
    
}

//Função de wait
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }