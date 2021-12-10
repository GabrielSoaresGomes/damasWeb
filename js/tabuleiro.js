document.getElementById('tabuleiro')
var numeroCasas = 8*8
function gerarTabuleiro() {
    let tabuleiro = document.getElementById('tabuleiro')
    for (var i = 0; i < numeroCasas; i++) {

        if (i % 8 == 0) {
            var novaLinha = document.createElement('div')
            novaLinha.classList.add('linha')
            tabuleiro.appendChild(novaLinha)
        }
        var novaDiv = document.createElement('div')
        novaDiv.classList.add('espaco')
        novaDiv.id = 'espaco' + i
        novaDiv.innerHTML = `${i}`
        novaLinha.appendChild(novaDiv)
    }
    var numeroLinha = document.getElementsByClassName('linha').length
    var linha = 0
    for (var i = 0; i < numeroCasas; i++) {
        if (i % 2 != 0 && linha % 2 == 0) {
            document.getElementById('espaco' + i).classList.add('espacoPreto')
        }
        if (i % 2 == 0 && linha % 2 != 0) {
            document.getElementById('espaco' + i).classList.add('espacoPreto')
        }
        if ((i + 1) % 8 == 0) {
            linha++
        }
    }
    gerarPecas()
}

function gerarPecas() {
    var linha = 0
    var novaDiv
    for (var i = 0; i < numeroCasas; i++) {
        if (linha <= 2) {
            if (i % 2 != 0 && linha % 2 == 0) {
                novaDiv = document.createElement('div')
                novaDiv.classList.add('pecasPretas')
                novaDiv.setAttribute('onclick', 'moverPeca('+i+")")
                document.getElementById('espaco' + i).innerHTML = ""
                document.getElementById('espaco' + i).appendChild(novaDiv)
            }
            if (i % 2 == 0 && linha % 2 != 0) {
                novaDiv = document.createElement('div')
                novaDiv.classList.add('pecasPretas')
                novaDiv.setAttribute('onclick', 'moverPeca('+i+")")
                document.getElementById('espaco' + i).innerHTML = ""
                document.getElementById('espaco' + i).appendChild(novaDiv)
            }
        }
        if (linha >= 5) {
            if (i % 2 != 0 && linha % 2 == 0) {
                novaDiv = document.createElement('div')
                novaDiv.classList.add('pecasBrancas')
                novaDiv.setAttribute('onclick', 'moverPeca('+i+")")
                document.getElementById('espaco' + i).innerHTML = ""
                document.getElementById('espaco' + i).appendChild(novaDiv)
            }
            if (i % 2 == 0 && linha % 2 != 0) {
                novaDiv = document.createElement('div')
                novaDiv.classList.add('pecasBrancas')
                novaDiv.setAttribute('onclick', 'moverPeca('+i+")")
                document.getElementById('espaco' + i).innerHTML = ""
                document.getElementById('espaco' + i).appendChild(novaDiv)
            }
        }
        if ((i + 1) % 8 == 0) {
            linha++
        }
    }
}


