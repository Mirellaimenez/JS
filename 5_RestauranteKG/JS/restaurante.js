// Elaborando um programa para um restaurante, a qial lê o preço por kg e o consumo em gramas de um cliente.
// Ao final, exibe o valor a ser pago

// 1º criando referências

const frm=document.querySelector("form");
const resp=document.querySelector("h3");

//Eventos

frm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const quilo=Number(frm.inQuilo.value);
    const consumo=Number(frm.inConsumo.value);

    const valor=(quilo/1000)*consumo; // Calcula o valor a ser pago
     resp.innerText=`Valor a ser pago: ${valor.toFixed(2)}`;
})