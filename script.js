   let pratoEscolhido = null;
   let precoPrato = null;
  
   let bebidaEscolhida = null;
   let precoBebida = null;

   let sobremesaEscolhida = null;
   let precoSobremesa = null;


function selecionarComida(elemento, pratoEscolhido, precoPrato){
     const clicar = document.querySelector(".op1 .borda");
    if (clicar !== null){
        clicar.classList.remove("borda")
    }
        elemento.classList.add("borda")
}
function selecionarBebida(elemento, bebidaEscolhida, precoBebida){
  const clicar = document.querySelector(".op2 .borda");
  if (clicar !== null){
      clicar.classList.remove("borda");
  }
      elemento.classList.add("borda");
}
function selecionarSobremesa(elemento, sobremesaEscolhida, precoSobremesa){
  const clicar = document.querySelector(".op3 .borda");
  if (clicar !== null){
      clicar.classList.remove("borda");
  }
      elemento.classList.add("borda");
}
  function botao(){
    if (pratoEscolhido && bebidaEscolhida && sobremesaEscolhida) {
      const botaoFinal = document.querySelector(".botao-finalizar");
      botaoFinal.innerHTML = "Fechar pedido";
      botaoFinal.classList.add("colorir");
      window.open("https://api.whatsapp.com/send/?phone=5521982095525&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20o%20pedido%3A%20%0A-%20Prato%3A%20Frango%20Yin%20Yang%20%0A-%20Bebida%3A%20Coquinha%20Gelada%20%0A-%20Sobremesa%3A%20Pudim%20%0ATotal%3A%20R%24%2027.70")
    }
  } 
  console.log(botao)


/* FUNCIONAAAA
  function botao(elemento){
    if (p1 || p2 || p3 || p4 && b1 || b2 || b3 || b4 && s1 || s2 || s3 || s4) {
      const botaoFinal = document.querySelector(".botao-finalizar");
      botaoFinal.innerHTML = "Fechar pedido";
      botaoFinal.classList.add("colorir");
      window.open("https://api.whatsapp.com/send/?phone=5521982095525&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20o%20pedido%3A%20%0A-%20Prato%3A%20Frango%20Yin%20Yang%20%0A-%20Bebida%3A%20Coquinha%20Gelada%20%0A-%20Sobremesa%3A%20Pudim%20%0ATotal%3A%20R%24%2027.70")
    }
  } 
 */

/*   FUNÇÃO FUNCIONANDO
function botao(){
  if (selecionarComida && selecionarBebida && selecionarSobremesa) {
    const botaoFinal = document.querySelector(".botao-finalizar");
    botaoFinal.innerHTML = "Fechar pedido";
    botaoFinal.classList.add("colorir");
  }
} */

let mensagem= "Olá, gostaria de fazer o pedido: \n- Prato: Frango Yin Yang \n- Bebida: Coquinha Gelada \n- Sobremesa: Pudim \nTotal: R$ 27.70"
console.log(encodeURIComponent(mensagem));