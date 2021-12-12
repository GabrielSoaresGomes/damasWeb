var numeroCasas = 8*8

function zerarMovimento() {
    for (let i = 0; i < numeroCasas; i++) {
        if (document.getElementById('espaco'+i).classList.contains('localPossivel')) {
            document.getElementById('espaco'+i).classList.remove('localPossivel')
        }
    }
}

function moverPeca(espacoClicado) {
    for (let i = 0; i < numeroCasas; i++) {
        if (document.getElementById('espaco'+i).classList.contains('localPossivel')) {
            document.getElementById('espaco'+i).classList.remove('localPossivel')
        }
    }
    var divFilha = document.getElementById('espaco' + espacoClicado).children[0]
    var classeDivFilha = divFilha.classList.toString()
    if (classeDivFilha == "pecasPretas") {


        if (![8, 24, 40, 56].includes(espacoClicado)) {
            document.getElementById('espaco' + (espacoClicado + 7)).classList.add('localPossivel');
            document.getElementById('espaco' + (espacoClicado + 7)).setAttribute('onclick', 'finalizarMovimentoEsquerda(' + espacoClicado + ')')
        }
        if (![7, 23, 39, 55].includes(espacoClicado)) {
            document.getElementById('espaco' + (espacoClicado + 9)).classList.add('localPossivel');
            document.getElementById('espaco' + (espacoClicado + 9)).setAttribute('onclick', 'finalizarMovimentoDireita(' + espacoClicado + ')')
        }
    }
}

function finalizarMovimentoDireita(localAnterior) { // Caso o movimento da preta seja para a direita
    var novoLocal = localAnterior + 9 // O novo local recebe o número do local anterior e soma com 9

    //Executa a função de verificar movimento e só roda o if se o retorno for true
    if (verificarMovimento(novoLocal, "direita", localAnterior)) {

        // Chama a função para limpar o quadrado anterior e o quadrado que não foi escolhido
        limparQuadradosAnterior(localAnterior)

        // Aqui esta sendo criada a nova div que é a peça preta com as classes e atributos que tinha antes
        let novaDiv = document.createElement('div')
        novaDiv.classList.add('pecasPretas')
        novaDiv.setAttribute('onclick', 'moverPeca(' + novoLocal + ")")
        document.getElementById('espaco' + novoLocal).innerHTML = ""
        document.getElementById('espaco' + novoLocal).appendChild(novaDiv)
    }
}

function finalizarMovimentoEsquerda(localAnterior) { // Caso o movimento da preta seja para a esquerda
    var novoLocal = localAnterior + 7  // O novo local recebe o número do local anterior e soma com 7

    //Executa a função de verificar movimento e só roda o if se o retorno for true
    if (verificarMovimento(novoLocal, "esquerda", localAnterior)) {

        // Chama a função para limpar o quadrado anterior e o quadrado que não foi escolhido
        limparQuadradosAnterior(localAnterior)

        // Aqui esta sendo criada a nova div que é a peça preta com as classes e atributos que tinha antes
        let novaDiv = document.createElement('div')
        novaDiv.classList.add('pecasPretas')
        novaDiv.setAttribute('onclick', 'moverPeca(' + novoLocal + ")")
        document.getElementById('espaco' + novoLocal).innerHTML = ""
        document.getElementById('espaco' + novoLocal).appendChild(novaDiv)
    }
}

function verificarMovimento(novoLocal, direcao, localAnterior) {
    if (direcao == "direita" && [7,23,39,55].includes(localAnterior)) {
        return false
    }
    if (direcao == "esquerda" && [8,24,40,56].includes(localAnterior)) {
        return false
    }
    var novoEspacoFilho = document.getElementById('espaco'+novoLocal).children
    if (novoEspacoFilho.length == 0) {
        return true
    }
}

function limparQuadradosAnterior(localAnterior) {
    //Essa linha de baixo faz com que o quadrado onde a peça preta estava, receba o seu número novamente
        document.getElementById('espaco' + localAnterior).innerHTML = localAnterior
        //Remove a class que deixava verde do outro espaço que podia ser clicado
        document.getElementById('espaco' + (localAnterior + 9)).classList.remove('localPossivel')
        document.getElementById('espaco' + (localAnterior + 7)).classList.remove('localPossivel')
        var atributosAnterior = document.getElementById('espaco' + (localAnterior + 9)).attributes
        if(atributosAnterior.onclick) {
            document.getElementById('espaco' + (localAnterior + 9)).attributes.removeNamedItem('onclick')
        }
        atributosAnterior = document.getElementById('espaco' + (localAnterior + 7)).attributes
        if (atributosAnterior.onclick) {
            document.getElementById('espaco' + (localAnterior + 7)).attributes.removeNamedItem('onclick')
        }

}
