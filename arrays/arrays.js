var nomes = document.getElementById('nomes')
var exibir = document.getElementById('exibir')
var lista = []

function salvar() {
  lista.push(nomes.value)
  console.log(lista)
}
function ve() {
  exibir.innerHTML = lista
}
