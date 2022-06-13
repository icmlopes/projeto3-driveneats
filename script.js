let pratoEscolhido = null;
let precoPrato = null;

let bebidaEscolhida = null;
let precoBebida = null;

let sobremesaEscolhida = null;
let precoSobremesa = null;


function selecionarComida(elemento, pratoClicado, precoPrato) {
  const clicar = document.querySelector(".op1 .borda");
  if (clicar !== null) {
    clicar.classList.remove("borda")
  }
  elemento.classList.add("borda")
  pratoEscolhido = pratoClicado;
  botao()
}
function selecionarBebida(elemento, bebidaClicado, precoBebida) {
  const clicar = document.querySelector(".op2 .borda");
  if (clicar !== null) {
    clicar.classList.remove("borda");
  }
  elemento.classList.add("borda");
  bebidaEscolhida = bebidaClicado;
  botao()
}
function selecionarSobremesa(elemento, sobremesaClicado, precoSobremesa) {
  const clicar = document.querySelector(".op3 .borda");
  if (clicar !== null) {
    clicar.classList.remove("borda");
  }
  elemento.classList.add("borda");
  sobremesaEscolhida = sobremesaClicado;
  botao()
}
function botao() {
  console.log(pratoEscolhido)
  console.log(bebidaEscolhida)
  console.log(sobremesaEscolhida)
  if (pratoEscolhido && bebidaEscolhida && sobremesaEscolhida) {
    const botaoFinal = document.querySelector(".botao-finalizar");
    botaoFinal.innerHTML = "Fechar pedido";
    botaoFinal.classList.add("colorir");
    botaoFinal.removeAttribute("disabled")
  }
}
function link(){
  window.open("https://api.whatsapp.com/send/?phone=5521982095525&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20o%20pedido%3A%20%0A-%20Prato%3A%20Frango%20Yin%20Yang%20%0A-%20Bebida%3A%20Coquinha%20Gelada%20%0A-%20Sobremesa%3A%20Pudim%20%0ATotal%3A%20R%24%2027.70")
}

let mensagem = "Olá, gostaria de fazer o pedido: \n- Prato: Frango Yin Yang \n- Bebida: Coquinha Gelada \n- Sobremesa: Pudim \nTotal: R$ 27.70"
console.log(encodeURIComponent(mensagem));

