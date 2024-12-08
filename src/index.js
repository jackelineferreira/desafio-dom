// Função para calcular valores e aplicar descontos
document.getElementById("calculateBtn").addEventListener("click", () => {
    // Captura os valores dos campos
    const numPessoas = parseInt(document.getElementById("numPessoas").value);
    const totalConta = parseFloat(document.getElementById("totalConta").value);
    const paymentMethod = document.getElementById("paymentMethod").value;

    // Validações básicas
    if (isNaN(numPessoas) || isNaN(totalConta) || numPessoas <= 0 || totalConta <= 0) {
        alert("Por favor, insira valores válidos para o número de pessoas e o total da conta.");
        return;
    }

    // Calcula o desconto (10% para PIX ou dinheiro)
    let valorFinal = totalConta;
    if (paymentMethod === "pix" || paymentMethod === "dinheiro") {
        valorFinal *= 0.9; // Aplica 10% de desconto
    }

    // Calcula o valor por pessoa
    const valorPorPessoa = valorFinal / numPessoas;

    // Exibe os resultados no DOM
    document.getElementById("finalConta").textContent = `Valor Final (com desconto): R$ ${valorFinal.toFixed(2)}`;
    document.getElementById("perPessoaConta").textContent = `Valor por Pessoa: R$ ${valorPorPessoa.toFixed(2)}`;
});