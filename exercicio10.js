const botao = document.getElementById('botao')

function inverterClasse() {
    const listaItens = document.querySelectorAll('li')

    listaItens.forEach(item => {
      item.className === "vermelho"
        ? (item.className = "azul")
        : (item.className = "vermelho")
    })
  }

  botao.addEventListener('click', inverterClasse)