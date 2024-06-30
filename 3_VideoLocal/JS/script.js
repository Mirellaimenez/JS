//Criando referências 

const frm =document.querySelector("form");
const resp1=document.querySelector("h3");
const resp2=document.querySelector("h4");

//Criando o evento ao botão submit

frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    const titulo = frm.inTitulo.value; //Obtendo o valor do respectivo campo.
    const duracao=Number(frm.inDuracao.value);

    const horas=Math.floor(duracao / 60); // utilizamos o método Math para arredondar o valor para baixo
    const minutos= duracao%60; // módulo para obter o resto

    resp1.innerText = `Filme: ${titulo}`;
    resp2.innerText = ` Horas de duração: ${horas} horas(s) e ${minutos} minuto(s)`;

});