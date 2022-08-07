const avancar = document.getElementById('btn-avancar')
const voltar = document.getElementById('btn-voltar')
const cartoes = document.querySelectorAll('.cartao')

let cartaoAtual = 0

function adicionar(indiceCartao) {
  cartoes[indiceCartao].classList.add('selecionado')
}

function esconder() {
  const cartaoSelecionado = document.querySelector('.selecionado')
  cartaoSelecionado.classList.remove('selecionado')
}

avancar.addEventListener('click', function () {
  if (cartaoAtual === cartoes.length - 1) return
  cartaoAtual++

  adicionar(cartaoAtual)

  esconder()
})

voltar.addEventListener('click', function () {
  if (cartaoAtual === 0) return

  esconder()

  cartaoAtual--
  adicionar(cartaoAtual)
})
