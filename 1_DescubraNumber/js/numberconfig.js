document.addEventListener("DOMContentLoaded", () => {
    const frm = document.querySelector(".formulario");
    const respError = document.querySelector(".outerros");
    const respChances = document.querySelector(".outchances");
    const respDica = document.querySelector(".dicas");

    const erros = []; // Vetor
    const sorteado = Math.floor(Math.random() * 100) + 1; // Cálculo do número aleatório
    const CHANCES = 6; // Constante com o total de chances disponíveis 

    frm.addEventListener("submit", (e) => {
        e.preventDefault(); // Evita o envio do formulário
        const numero = Number(document.querySelector(".userinfo").value); // Obtém o número digitado

        if (numero === sorteado) {
            respDica.innerText = `Parabéns!! Você acertou o número secreto: ${sorteado}!`;
            document.querySelector(".btSubmit").disabled = true;
            document.querySelector("#btNovo").classList.remove("ocultar");
        } else {
            if (erros.includes(numero)) { // Se número existe no vetor erro (ou seja, se já apostou)
                alert(`Você já apostou este número: ${numero}. Tente outro!`);
            } else {
                erros.push(numero); // Push adiciona valores ao vetor.
                const numErros = erros.length; // Obtém o tamanho do vetor
                const numChances = CHANCES - numErros; // Calcula o número de chances

                // Exibindo o número de erros
                respError.innerText = `${numErros} (${erros.join(",")})`;

                if (numChances === 0) {
                    alert("Suas chances acabaram! Boa sorte da próxima vez :(");
                    document.querySelector(".btSubmit").disabled = true;
                    document.querySelector("#btNovo").classList.remove("ocultar");
                    respDica.innerText = `Game Over!! Número sorteado: ${sorteado}`;
                } else {
                    const dicazona = numero < sorteado ? "maior" : "menor";
                    respDica.innerText = `Dica: Tente um número ${dicazona} que ${numero}`;
                }
            }
        }

        document.querySelector(".userinfo").value = ""; // Limpa o campo de entrada
        document.querySelector(".userinfo").focus(); 
    });

    // Evento para reiniciar o jogo
    document.querySelector("#btNovo").addEventListener("click", () => {
        location.reload(); // Recarrega a página para reiniciar o jogo
    });
});
