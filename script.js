//const botaoFinal = document.querySelector(".botao-finalizar");
//botaoFinal.innerHTML = "Fechar pedido";
//botaoFinal.classList.add("colorir");
//botaoFinal.classList.add("botao-finalizar2");

//const pedidos = document.querySelector(".container-prato");
//pedidos.classList.add("borda");

//const check = document.querySelector(".simb-check");
//check.classList.remove("ocultar");

//function selecionar(){
   // const check = document.querySelector(".simb-check");
    //const pedidos = document.querySelector(".container-prato");
    //if (check !== null && pedidos !== null ) {
      //  check.classList.remove(".simb-check")
        //pedidos.classList.add("borda")
//}

//function selecionar(){
    //const clicar = document.querySelector(".simb-check");
   // clicar.classList.remove("ocultar");
   // const selecao = document.querySelector(".container-prato");
   // selecao.classList.add("borda");}



function selecionarComida(elemento){
     const clicar = document.querySelector(".op1 .borda");
    if (clicar !== null){
        clicar.classList.remove("borda")
    }
        elemento.classList.add("borda")
}

function selecionarBebida(elemento){
  const clicar = document.querySelector(".op2 .borda");
  if (clicar !== null){
      clicar.classList.remove("borda");
  }
      elemento.classList.add("borda");
}

function selecionarSobremesa(elemento){
  const clicar = document.querySelector(".op3 .borda");
  if (clicar !== null){
      clicar.classList.remove("borda");
  }
      elemento.classList.add("borda");
}




//function selecionar(elemento){
  //  const clicou = document.querySelector(".simb-check .container-prato")
   // elemento.classList.remove(".ocultar");
   // elemento.classList.add(".borda")
   // if (clicado !== null){
  //      clicado.classList.remove(".borda")
  //  }
  //  elemento.classList.add(".ocultar")
  //  }


function botao(){
const botaoFinal = document.querySelector(".botao-finalizar");
botaoFinal.innerHTML = "Fechar pedido";
botaoFinal.classList.add("colorir");
botaoFinal.classList.add("botao-finalizar2");
}

//function finalizarPedido(){

//  let mensagem="Olá, gostaria de fazer o pedido:"
//"- Prato:" selecionarComida
//"- Bebida:" selecionarBebida
//"- Sobremesa:" selecionarSobremesa
//"Total:" valor;
//}