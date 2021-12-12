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

       document.getElementById('espaco'+(espacoClicado+7)).classList.add('localPossivel');
       document.getElementById('espaco'+(espacoClicado+7)).setAttribute('onclick','finalizarMovimentoEsquerda('+espacoClicado+')')
       document.getElementById('espaco'+(espacoClicado+9)).classList.add('localPossivel');
       document.getElementById('espaco'+(espacoClicado+9)).setAttribute('onclick','finalizarMovimentoDireita('+espacoClicado+')')
    }
}

function finalizarMovimentoDireita(localAnterior) {
    var novoLocal = localAnterior + 9
    if (verificarMovimento(novoLocal)) {
        document.getElementById('espaco' + localAnterior).innerHTML = localAnterior
        document.getElementById('espaco' + (localAnterior + 9)).classList.remove('localPossivel')
        document.getElementById('espaco' + (localAnterior + 9)).attributes.removeNamedItem('onclick')
        document.getElementById('espaco' + (localAnterior + 7)).classList.remove('localPossivel')
        document.getElementById('espaco' + (localAnterior + 7)).attributes.removeNamedItem('onclick')

        let novaDiv = document.createElement('div')
        novaDiv.classList.add('pecasPretas')
        novaDiv.setAttribute('onclick', 'moverPeca(' + novoLocal + ")")
        document.getElementById('espaco' + novoLocal).innerHTML = ""
        document.getElementById('espaco' + novoLocal).appendChild(novaDiv)
    }
}

function finalizarMovimentoEsquerda(localAnterior) {
    var novoLocal = localAnterior + 7
    if (verificarMovimento(novoLocal)) {
        document.getElementById('espaco' + localAnterior).innerHTML = localAnterior
        document.getElementById('espaco' + (localAnterior + 9)).classList.remove('localPossivel')
        document.getElementById('espaco' + (localAnterior + 9)).attributes.removeNamedItem('onclick')
        document.getElementById('espaco' + (localAnterior + 7)).classList.remove('localPossivel')
        document.getElementById('espaco' + (localAnterior + 7)).attributes.removeNamedItem('onclick')

        let novaDiv = document.createElement('div')
        novaDiv.classList.add('pecasPretas')
        novaDiv.setAttribute('onclick', 'moverPeca(' + novoLocal + ")")
        document.getElementById('espaco' + novoLocal).innerHTML = ""
        document.getElementById('espaco' + novoLocal).appendChild(novaDiv)
    }
}

function verificarMovimento(novoLocal) {
    var novoEspacoFilho = document.getElementById('espaco'+novoLocal).children
    console.log(novoEspacoFilho.length)
    if (novoEspacoFilho.length == 0) {
        console.log("entrou")
        return true
    }

}
