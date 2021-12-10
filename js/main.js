var numeroCasas = 8*8
function moverPeca(espacoClicado) {
    console.log(espacoClicado)

    var divFilha = document.getElementById('espaco' + espacoClicado).children[0]
    var classeDivFilha = divFilha.classList.toString()
    if (classeDivFilha == "pecasPretas") {
        console.log("entrou")
    }
}