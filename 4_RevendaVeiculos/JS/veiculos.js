// Referências
const frm=document.querySelector("form");
const resp1=document.querySelector("#outResp1");
const resp2=document.querySelector("#outResp2");
const resp3=document.querySelector("#outResp3");

//Criando eventos

frm.addEventListener("submit", (e) =>{
    e.preventDefault(); // Evita o envio do form

    const veiculos =frm.inVeiculos.value;
    const preco=Number(frm.inPreco.value);

    const entrada=preco *0.50; //Calculando o valor da entrada
    const parcela = (preco*0.50)/12; //Valor das parcelas

    resp1.innerText=`Promocão: ${veiculos}`;
    resp2.innerText=` Entrada de R$: ${entrada.toFixed(2)}`;
    resp3.innerText= ` Parcelas de +12x de R$ ${parcela.toFixed(2)}`;


})