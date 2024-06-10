function exibirMensagem() {
    const nome = prompt("Por favor, digite seu nome:");
    if (nome) { // se o usuario digitou faça tal coisa
        const mensagemBoasVindas = document.getElementById("mensagemBoasVindas"); // obtém a div com o id mensagemBoasVindas do html
        mensagemBoasVindas.textContent = `Olá ${nome}, Olá seja bem-vindo!`;  // cria uma mensagem personalizada com o nome digitado no prompt
    }
}

function calcularTabuada() {
    const numero = parseInt(prompt("Digite um número para ver a tabuada")); // parseInt converte o valor digitado (que é uma string) em um número inteiro
    if (!isNaN(numero)) { // verifica se o valor digitado não é um número
        let tabuada = "";
        for (let i = 1; i <= 10; i++) { // serve para contar do 1 até o 10, por ex na tabuada do 5, 5x1, 5x2, 5x3.... quando chegar no 5x10 encerra.
            tabuada += `${numero} x ${i} = ${numero * i}<br>`;
        }

        const resultadoTabuada = document.getElementById("resultadoTabuada");
        resultadoTabuada.innerHTML = tabuada;
     } else {
            alert("Por favor, digite um número válido.")
        }
    }