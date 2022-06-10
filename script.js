const botaoFinal = document.querySelector(".botao-finalizar");
botaoFinal.innerHTML = "Fechar pedido";
botaoFinal.classList.add("colorir");
botaoFinal.classList.add("botao-finalizar2");

const pedidos = document.querySelector(".container-prato");
pedidos.classList.remove("ocultar");
pedidos.classList.add("borda");

const check = document.querySelector(".simb-check");
check.classList.remove("ocultar");