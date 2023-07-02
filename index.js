var setaDireita = window.document.getElementById("seta-direita")
var setaEsquerda = window.document.getElementById("seta-esquerda")
var bruna = window.document.getElementById("bruna")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")

function rolarParaDireita() {
    bruna.style = "display:none"
    samantha.style = "display:flex; margin-left: -60px"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top: 55px"
}
function rolarParaEsquerda() {
    bruna.style = "display:flex"
    samantha.style = "display:none"
    setaDireita.style = "display:flex"
    setaEsquerda.style = "display:none; margin-top: 55px"
}